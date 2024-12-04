"use client";
"use strict";
exports.__esModule = true;
exports.Vortex = void 0;
var utils_1 = require("@/lib/utils");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var simplex_noise_1 = require("simplex-noise");
exports.Vortex = function (props) {
    var canvasRef = react_1.useRef(null);
    var containerRef = react_1.useRef(null);
    var particleCount = props.particleCount || 700;
    var particlePropCount = 9;
    var particlePropsLength = particleCount * particlePropCount;
    var rangeY = props.rangeY || 100;
    var baseTTL = 50;
    var rangeTTL = 150;
    var baseSpeed = props.baseSpeed || 0.0;
    var rangeSpeed = props.rangeSpeed || 1.5;
    var baseRadius = props.baseRadius || 1;
    var rangeRadius = props.rangeRadius || 2;
    var baseHue = props.baseHue || 220;
    var rangeHue = 100;
    var noiseSteps = 3;
    var xOff = 0.00125;
    var yOff = 0.00125;
    var zOff = 0.0005;
    var backgroundColor = props.backgroundColor || "#000000";
    var tick = 0;
    var noise3D = simplex_noise_1.createNoise3D();
    var particleProps = new Float32Array(particlePropsLength);
    var center = [0, 0];
    var HALF_PI = 0.5 * Math.PI;
    var TAU = 2 * Math.PI;
    var TO_RAD = Math.PI / 180;
    var rand = function (n) { return n * Math.random(); };
    var randRange = function (n) { return n - rand(2 * n); };
    var fadeInOut = function (t, m) {
        var hm = 0.5 * m;
        return Math.abs(((t + hm) % m) - hm) / hm;
    };
    var lerp = function (n1, n2, speed) {
        return (1 - speed) * n1 + speed * n2;
    };
    var setup = function () {
        var canvas = canvasRef.current;
        var container = containerRef.current;
        if (canvas && container) {
            var ctx = canvas.getContext("2d");
            if (ctx) {
                resize(canvas, ctx);
                initParticles();
                draw(canvas, ctx);
            }
        }
    };
    var initParticles = function () {
        tick = 0;
        // simplex = new SimplexNoise();
        particleProps = new Float32Array(particlePropsLength);
        for (var i = 0; i < particlePropsLength; i += particlePropCount) {
            initParticle(i);
        }
    };
    var initParticle = function (i) {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var x, y, vx, vy, life, ttl, speed, radius, hue;
        x = rand(canvas.width);
        y = center[1] + randRange(rangeY);
        vx = 0;
        vy = 0;
        life = 0;
        ttl = baseTTL + rand(rangeTTL);
        speed = baseSpeed + rand(rangeSpeed);
        radius = baseRadius + rand(rangeRadius);
        hue = baseHue + rand(rangeHue);
        particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };
    var draw = function (canvas, ctx) {
        tick++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawParticles(ctx);
        renderGlow(canvas, ctx);
        renderToScreen(canvas, ctx);
        window.requestAnimationFrame(function () { return draw(canvas, ctx); });
    };
    var drawParticles = function (ctx) {
        for (var i = 0; i < particlePropsLength; i += particlePropCount) {
            updateParticle(i, ctx);
        }
    };
    var updateParticle = function (i, ctx) {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i;
        var n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;
        x = particleProps[i];
        y = particleProps[i2];
        n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
        vx = lerp(particleProps[i3], Math.cos(n), 0.5);
        vy = lerp(particleProps[i4], Math.sin(n), 0.5);
        life = particleProps[i5];
        ttl = particleProps[i6];
        speed = particleProps[i7];
        x2 = x + vx * speed;
        y2 = y + vy * speed;
        radius = particleProps[i8];
        hue = particleProps[i9];
        drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);
        life++;
        particleProps[i] = x2;
        particleProps[i2] = y2;
        particleProps[i3] = vx;
        particleProps[i4] = vy;
        particleProps[i5] = life;
        (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
    };
    var drawParticle = function (x, y, x2, y2, life, ttl, radius, hue, ctx) {
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineWidth = radius;
        ctx.strokeStyle = "hsla(" + hue + ",100%,60%," + fadeInOut(life, ttl) + ")";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    };
    var checkBounds = function (x, y, canvas) {
        return x > canvas.width || x < 0 || y > canvas.height || y < 0;
    };
    var resize = function (canvas, ctx) {
        var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        center[0] = 0.5 * canvas.width;
        center[1] = 0.5 * canvas.height;
    };
    var renderGlow = function (canvas, ctx) {
        ctx.save();
        ctx.filter = "blur(8px) brightness(200%)";
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
        ctx.save();
        ctx.filter = "blur(4px) brightness(200%)";
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };
    var renderToScreen = function (canvas, ctx) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };
    react_1.useEffect(function () {
        setup();
        window.addEventListener("resize", function () {
            var canvas = canvasRef.current;
            var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
            if (canvas && ctx) {
                resize(canvas, ctx);
            }
        });
    }, []);
    return (React.createElement("div", { className: utils_1.cn("relative h-full w-full", props.containerClassName) },
        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, ref: containerRef, className: "absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center" },
            React.createElement("canvas", { ref: canvasRef })),
        React.createElement("div", { className: utils_1.cn("relative z-10", props.className) }, props.children)));
};

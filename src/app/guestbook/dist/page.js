// src/app/guestbook/page.tsx
'use client'; // Mark this as a client component
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var server_1 = require("@/app/supabase/server"); // Import server-side Supabase client
var guestbook_form_1 = require("@/components/form/guestbook-form");
var guestbook_section_1 = require("@/components/section/guestbook-section");
var paragraph_1 = require("@/components/ui/paragraph");
var react_1 = require("react");
var Page = function () {
    var _a = react_1.useState(null), user = _a[0], setUser = _a[1];
    react_1.useEffect(function () {
        var fetchUser = function () { return __awaiter(void 0, void 0, void 0, function () {
            var supabase, _a, user_1, error, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, server_1.createClient()];
                    case 1:
                        supabase = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, supabase.auth.getUser()];
                    case 3:
                        _a = _b.sent(), user_1 = _a.data, error = _a.error;
                        if (error) {
                            console.error("Error fetching user:", error.message);
                        }
                        else {
                            setUser(user_1);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        console.error("Error fetching user:", error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fetchUser();
    }, []);
    if (!user) {
        return (React.createElement("section", null,
            React.createElement("p", null, "No user authenticated. Please log in.")));
    }
    return (React.createElement("section", { id: "guestbook", className: "flex h-auto grow flex-col items-center gap-y-16 px-4 md:gap-y-20 lg:gap-y-24" },
        React.createElement("div", { className: "flex flex-col gap-y-4" },
            React.createElement(paragraph_1["default"], { title: "Guestbook" },
                React.createElement("p", null, "Leave me a trace of your visit, could be a message, a quote, or a song you'd want me to listen to.")),
            React.createElement(guestbook_form_1["default"], { user: user.user })),
        React.createElement(guestbook_section_1["default"], null)));
};
exports["default"] = Page;

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
var server_1 = require("@/utils/supabase/server");
var image_1 = require("next/image");
var GuestbookCard = function (_a) {
    var content = _a.content, user_id = _a.user_id, createdAt = _a.createdAt, index = _a.index;
    return __awaiter(void 0, void 0, void 0, function () {
        var supabase, _b, user, error, formatTimestamp, user_avatar, full_name;
        var _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, server_1.createAdminClient()];
                case 1:
                    supabase = _g.sent();
                    return [4 /*yield*/, supabase.auth.admin.getUserById(user_id)];
                case 2:
                    _b = _g.sent(), user = _b.data, error = _b.error;
                    // Log error jika ada masalah mengambil data pengguna
                    if (error) {
                        console.error("Error fetching user:", error);
                    }
                    formatTimestamp = function (timestamp) {
                        var currentDate = new Date();
                        var createdAtDate = new Date(timestamp);
                        var timeDiff = currentDate.getTime() - createdAtDate.getTime();
                        var hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
                        var daysDiff = Math.floor(hoursDiff / 24);
                        if (daysDiff > 1) {
                            return daysDiff + " days ago";
                        }
                        else if (daysDiff === 1) {
                            return "yesterday";
                        }
                        else if (hoursDiff > 0) {
                            return hoursDiff + " hours ago";
                        }
                        else {
                            return "less than an hour ago";
                        }
                    };
                    user_avatar = ((_d = (_c = user === null || user === void 0 ? void 0 : user.user) === null || _c === void 0 ? void 0 : _c.user_metadata) === null || _d === void 0 ? void 0 : _d.avatar_url) || "/default-avatar.png";
                    full_name = ((_f = (_e = user === null || user === void 0 ? void 0 : user.user) === null || _e === void 0 ? void 0 : _e.user_metadata) === null || _f === void 0 ? void 0 : _f.full_name) || "Anonymous";
                    return [2 /*return*/, (React.createElement("div", { className: "group relative z-10 flex h-full w-full flex-col gap-y-2" },
                            React.createElement("div", { className: "flex w-full items-center gap-4" },
                                React.createElement("div", { className: "relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-secondary md:h-10 md:w-10" },
                                    React.createElement(image_1["default"], { src: user_avatar, alt: full_name, fill: true, className: "object-cover" })),
                                React.createElement("div", { className: "flex flex-col" },
                                    React.createElement("p", { className: "text-xs body md:text-sm" }, full_name),
                                    React.createElement("p", { className: "text-xs text-muted-foreground body-light" }, formatTimestamp(createdAt)))),
                            React.createElement("code", { className: "h-auto body-light" }, content)))];
            }
        });
    });
};
var Guestbook = function () { return __awaiter(void 0, void 0, void 0, function () {
    var supabase, _a, guestbook, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, server_1.createAdminClient()];
            case 1:
                supabase = _b.sent();
                return [4 /*yield*/, supabase.from("guestbook").select("*")];
            case 2:
                _a = _b.sent(), guestbook = _a.data, error = _a.error;
                if (error) {
                    console.error("Error fetching guestbook:", error);
                }
                return [2 /*return*/, (React.createElement("div", { className: "flex h-fit w-full flex-col-reverse gap-6 md:gap-8" }, guestbook &&
                        guestbook.map(function (item, index) { return (React.createElement(GuestbookCard, { content: item.content, user_id: item.user_id, key: index, createdAt: item.created_at, index: index })); })))];
        }
    });
}); };
exports["default"] = Guestbook;

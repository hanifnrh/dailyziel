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
// Components
var content_form_1 = require("@/components/form/content-form");
var guestbook_1 = require("@/components/macro/guestbook");
var skeleton_1 = require("@/components/macro/skeleton");
var blur_in_1 = require("@/components/ui/blur-in");
var button_1 = require("@/components/ui/button");
var sparkles_text_1 = require("@/components/ui/sparkles-text");
var tracing_beam_1 = require("@/components/ui/tracing-beam");
// Utils
var fn_1 = require("@/utils/function/fn");
var server_1 = require("@/utils/supabase/server");
// Icons
var react_icons_1 = require("@radix-ui/react-icons");
var react_1 = require("react");
var fc_1 = require("react-icons/fc");
var Page = function () { return __awaiter(void 0, void 0, void 0, function () {
    var supabase, _a, user, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, server_1.createClient()];
            case 1:
                supabase = _b.sent();
                return [4 /*yield*/, supabase.auth.getUser()];
            case 2:
                _a = _b.sent(), user = _a.data, error = _a.error;
                return [2 /*return*/, (React.createElement(tracing_beam_1.TracingBeam, { className: "" },
                        React.createElement("section", { id: "guestbook", className: "flex h-full w-full max-w-sm mx-auto grow flex-col gap-y-4 md:gap-y-8 lg:gap-y-12" },
                            React.createElement(blur_in_1["default"], { className: "flex h-full w-full flex-col justify-center items-center" },
                                React.createElement("div", { className: "md:pad-x relative flex h-auto flex-col" },
                                    React.createElement("div", { className: "relative pl-12 pr-8 sm:px-0 h-full w-full grow grid grid-cols-1 items-center justify-center gap-6 py-4 md:gap-8 md:py-6 lg:py-12" },
                                        React.createElement("div", { className: "group relative z-10 flex h-fit w-fit flex-col" },
                                            React.createElement("div", { className: "w-fit mb-4" },
                                                React.createElement(sparkles_text_1["default"], { text: "Sign my guestbook", className: "max-w-48" })),
                                            React.createElement("p", { className: "w-full mb-4 mt-2 body text-sm sm:text-base text-muted-foreground" }, "Welcome my amazing guest, you can leave a message here!"),
                                            user && user.user ? (React.createElement(React.Fragment, null,
                                                React.createElement(content_form_1["default"], { user: user.user }),
                                                React.createElement("form", { onSubmit: fn_1.signOut, className: "mt-1" },
                                                    React.createElement(button_1.Button, { type: "submit", className: "flex h-fit items-center justify-start gap-2 px-0 py-0 text-sm body hover:bg-transparent", variant: "ghost" }, "Sign out")))) : (React.createElement("div", { className: "flex flex-col gap-2" },
                                                React.createElement("form", { onSubmit: fn_1.githubSignIn, className: "w-full" },
                                                    React.createElement(button_1.Button, { type: "submit", className: "flex w-full items-center gap-2", variant: "outline" },
                                                        React.createElement(react_icons_1.GitHubLogoIcon, { className: "h-4 w-4" }),
                                                        " Sign in with GitHub")),
                                                React.createElement("form", { onSubmit: fn_1.googleSignIn, className: "w-full" },
                                                    React.createElement(button_1.Button, { type: "submit", className: "flex w-full items-center gap-2", variant: "outline" },
                                                        React.createElement(fc_1.FcGoogle, { className: "h-4 w-4" }),
                                                        " Sign in with Google"))))),
                                        React.createElement(react_1.Suspense, { fallback: React.createElement(skeleton_1.GuestbookSkeleton, null) },
                                            React.createElement(guestbook_1["default"], null))))))))];
        }
    });
}); };
exports["default"] = Page;

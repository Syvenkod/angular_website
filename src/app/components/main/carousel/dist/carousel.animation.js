"use strict";
exports.__esModule = true;
exports.jackOut = exports.jackIn = exports.flipOut = exports.flipIn = exports.fadeOut = exports.fadeIn = exports.scaleOut = exports.scaleIn = exports.AnimationType = void 0;
var animations_1 = require("@angular/animations");
var AnimationType;
(function (AnimationType) {
    AnimationType["Scale"] = "scale";
    AnimationType["Fade"] = "fade";
    AnimationType["Flip"] = "flip";
    AnimationType["JackInTheBox"] = "jackInTheBox";
})(AnimationType = exports.AnimationType || (exports.AnimationType = {}));
// =========================
// Scale
// =========================
exports.scaleIn = animations_1.animation([
    animations_1.style({ opacity: 0, transform: "scale(0.5)" }),
    animations_1.animate("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", animations_1.style({ opacity: 1, transform: "scale(1)" }))
]);
exports.scaleOut = animations_1.animation([
    animations_1.animate("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", animations_1.style({ opacity: 0, transform: "scale(0.5)" }))
]);
// =========================
// Fade
// =========================
exports.fadeIn = animations_1.animation([
    animations_1.style({ opacity: 0 }),
    animations_1.animate("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", animations_1.style({ opacity: 1 }))
]);
exports.fadeOut = animations_1.animation([
    animations_1.animate("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", animations_1.style({ opacity: 0 }))
]);
// =========================
// Flip
// =========================
exports.flipIn = animations_1.animation([
    animations_1.animate("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", animations_1.keyframes([
        animations_1.style({
            opacity: 1,
            transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
            offset: 0
        }),
        animations_1.style({ transform: "perspective(400px)", offset: 1 })
    ]))
]);
exports.flipOut = animations_1.animation([]);
// =========================
// Jack in the box
// =========================
exports.jackIn = animations_1.animation([
    animations_1.animate("{{time}} ease-in", animations_1.keyframes([
        animations_1.style({
            animationFillMode: "forwards",
            transform: "scale(0.1) rotate(30deg)",
            transformOrigin: "center bottom",
            offset: 0
        }),
        animations_1.style({
            transform: "rotate(-10deg)",
            offset: 0.5
        }),
        animations_1.style({
            transform: "rotate(3deg)",
            offset: 0.7
        }),
        animations_1.style({
            transform: "perspective(400px)",
            offset: 1
        })
    ]))
]);
exports.jackOut = animations_1.animation([]);

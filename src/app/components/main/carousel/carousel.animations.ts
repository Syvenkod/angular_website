import { style, animate, animation, keyframes } from "@angular/animations";

export enum AnimationType {
  Scale = "scale",
  Fade = "fade",
  Flip = "flip",
  JackInTheBox = "jackInTheBox"
}

// =========================
// Scale
// =========================
export const scaleIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }),
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1, transform: "scale(1)" })
  )
]);

export const scaleOut = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0, transform: "scale(0.5)" })
  )
]);

// =========================
// Fade
// =========================
export const fadeIn = animation([
  style({ opacity: 0 }),
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1 })
  )
]);

export const fadeOut = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0 })
  )
]);

// =========================
// Flip
// =========================
export const flipIn = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    keyframes([
      style({
        opacity: 1,
        transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
        offset: 0
      }),
      style({ transform: "perspective(400px)", offset: 1 })
    ])
  )
]);

export const flipOut = animation([
]);

// =========================
// Jack in the box
// =========================
export const jackIn = animation([
  animate(
    "{{time}} ease-in",
    keyframes([
      style({
        animationFillMode: "forwards",
        transform: "scale(0.1) rotate(30deg)",
        transformOrigin: "center bottom",
        offset: 0
      }),
      style({
        transform: "rotate(-10deg)",
        offset: 0.5
      }),
      style({
        transform: "rotate(3deg)",
        offset: 0.7
      }),
      style({
        transform: "perspective(400px)",
        offset: 1
      })
    ])
  )
]);

export const jackOut = animation([
]);
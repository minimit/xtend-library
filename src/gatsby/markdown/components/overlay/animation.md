---
type: "Components"
category: "Interaction"
parent: "Overlay"
title: "Animation"
date: "2010-10-09"
---

Checkout out [overlay's themes](/themes/by-component/overlay) for **advanced animations**.

## Queue and Duration

When you use animations you need to **specity the duration of the animation** for proper interactions.

You can set it in the options or to **assign them also on single nodes** with `data-xt-duration="Milliseconds"`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `queue:Object|Boolean`                 | `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`     | Set instant activation and deactivation          |
| Option                  | `delay:Milliseconds|Function`                          | `false`        | Activation and Deactivation delay            |
| Option                  | `delayInitial:Boolean`                          | `true`        | Initial activation delay            |
| Option                  | `duration:Milliseconds`                          | `false`        | Activation and Deactivation duration            |

</div>

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

You can also customize `xt-backdrop` animations.

<demo>
  <demoinline src="demos/components/overlay/animation">
  </demoinline>
</demo>

## Css Animation

You can use also **css animations**, just add them with **class names** `.xt-active`, `.xt-out`, `.xt-before` and `.xt-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.xt-before`       |  Class name for before direction activation            |
| Class                  | `.xt-after`       |  Class name for after direction activation            |
</div>

<demo>
  <demoinline src="demos/components/overlay/animation-css">
  </demoinline>
</demo>

## Js Animation

You can use also **javascript animations**, just use [drop api](/components/drop/api).

<demo>
  <demoinline src="demos/components/overlay/animation-js">
  </demoinline>
</demo>

## Design Animation

Use `.xt-overlay-inner` and assign design styles to `.xt-design` when you want to **animate the design independently from the content**, use `relative` on other elements on the same level of `.xt-design` for fixing z-index issues.

<demo>
  <demoinline src="demos/components/overlay/animation-design">
  </demoinline>
</demo>
---
type: "Components"
category: "Interaction"
parent: "Overlay"
title: "Interaction"
date: "2010-10-10"
---

## Class

You can customize the **class names** used by the component. Refer to [toggle class](/components/toggle/interaction#class).

You can set initial activation by adding `xt-in` to the **elements** or **targets**.

Additionally on component initialization the class `.xt-overlay-init` gets added to the **object**.

## Event

You can specify **on** and **off** events for the overlay.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                          | `'click'`        | Activation event to attach to elements            |
| Option                  | `off:String`                          | `'click'`        | Dectivation event to attach to elements            |
| Option                  | `eventLimit:Query`                          | `'.xt-event-limit, .xt-overlay'`        | Limit on and off events within selector            |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on window `closeauto.trigger.xt` event            |
| Option                  | `closeDeep:Query`                          | `'.xt-dismiss'`        | Query Node inside to close on click also if nested Nodes            |
| Option                  | `closeInside:Query`                          | `'.xt-backdrop, .xt-overlay, .xt-overlay-container`        | Query Node inside to close on click, no nested Nodes            |
| Option                  | `closeOutside:Query`                          | `false`        | Query Node outside to close on click            |

</div>

You can have an **unclosable overlay** with `closeDeep: false` and `closeInside: false`.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/overlay/event">
  </div>
</demo>

## Class html

You can set **html classes on activation**, remember to keep default `classHtml` classes.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `classHtml:String`                          | `'xt-scrollbar-overlay`        | Add class to `html` on activation            |

</div>

<demo>
  <demoinline src="demos/components/overlay/class-html">
  </demoinline>
</demo>
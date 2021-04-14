---
type: "Components"
category: "Interaction"
parent: "Toggle"
title: "Interaction"
date: "2010-10-10"
---

## Quantity

You can specify `min` and `max` concurrent activations. The `min` option is fulfilled on initialization, the `max` options deactivates the first activated when max is reached.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `0`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |

</div>

[[notePrimary]]
| `data-xt-group` additional elements aren't counted for min and max.

<demo>
  <demoinline src="demos/components/toggle/quantity">
  </demoinline>
</demo>

## Class

You can customize the **class names** used by the component.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `on`        | Class name for active            |
| Option                  | `classIn:String`                          | `in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `out`        | Class name for out animation             |
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classBefore:String`                          | `dir-before`        | Class name for before direction activation            |
| Option                  | `classAfter:String`                          | `dir-after`        | Class name for after direction activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can set initial activation by adding `on` to the **elements** or **targets**, class activation has precedence over automatic activation of `min` and `max`.

[[notePrimary]]
| If initial activation is on a **target with multiple groups** it activates elements with **at least one of the groups** and in DOM order.

<demo>
  <demoinline src="demos/components/toggle/class">
  </demoinline>
  <demoinline src="demos/components/toggle/class-custom">
  </demoinline>
</demo>

## Hash

You can link the activation in the url hash, hash activation has precedence over class activation.

Hash attribute can be on **elements** or **targets**, also hash activates on hash location change.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hash:String`                          | `false`        | String with attribute name to test for hash            |

</div>

Try the demo [on a new page](/demos/components/toggle/hash#demo--toggle-hash).

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/toggle/hash">
  </div>
</demo>

## Event

You can specify **on** and **off** events for the toggle.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                          | `'click'`        | Activation event to attach to elements            |
| Option                  | `off:String`                          | `'click'`        | Dectivation event to attach to elements            |
| Option                  | `eventLimit:Query`                          | `'.xt-event-limit'`        | Limit on and off events within selector            |
| Option                  | `closeAuto:Boolean`                          | `false`        | Close automatically on window `closeauto.trigger.xt` event            |
| Option                  | `closeDeep:Query`                          | `false`        | Query Node inside to close on click            |
| Option                  | `closeInside:Query`                          | `false`        | Query Node inside to close on click, no nested Nodes            |
| Option                  | `closeOutside:Query`                          | `false`        | Query Node outside to close on click            |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events (second click or mouseenter)            |

</div>

<demo>
  <demoinline src="demos/components/toggle/event">
  </demoinline>
</demo>

You can have **links on elements on activation** with `preventEvent: true`, `on` event will be prevented if not already activated.

<demo>
  <demoinline src="demos/components/toggle/prevent-event">
  </demoinline>
  <demoinline src="demos/components/toggle/prevent-event-hover">
  </demoinline>
</demo>

## Auto

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |
| Option                  | `auto.pause:Query`                          | `false`        | Elements that pause automatic on mouseenter            |

</div>

[[notePrimary]]
| Auto doesn't run if the toggle is `display: none`. Start it manually when visible using [toggle events](/components/toggle/api#trigger).

<demo>
  <demoinline src="demos/components/toggle/auto">
  </demoinline>
</demo>

Use the [api](/components/slider/api#listen) and listen to events to make auto progress indicators.

<demo>
  <demoinline src="demos/components/toggle/progress">
  </demoinline>
</demo>

## Loop

Use `loop: false` to disable looping on activation.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |

</div>

## Jump

Use `jump: true` to enable clicking on a **target** to jump to them.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `jump:Boolean`                          | `false`        | Clicking on targets triggers activation            |

</div>

<demo>
  <demoinline src="demos/components/toggle/jump">
  </demoinline>
</demo>

## Navigation

You can add navigation with `navigation: '[data-xt-nav]'` option, then with `[data-xt-nav="value"]` to set the amount to add (`+1`) or remove (`-1`) to the current activation index.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `navigation:Query`                          | `false`        | Query for navigation elements             |

</div>

<demo>
  <demoinline src="demos/components/toggle/navigation">
  </demoinline>
</demo>

## Keyboard

Use `keyboard: { selector: 'object' }` or `keyboard: { selector: Query }` to enable keyboard navigation on focus.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `keyboard.selector:Boolean`                          | `false`        | Elements that triggers the events            |

</div>

<demo>
  <demoinline src="demos/components/toggle/usability-keyboard">
  </demoinline>
</demo>
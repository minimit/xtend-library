---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Scroll to"
description: "Automatically scroll to elements or anchors with automatic activation on scroll."
date: "1900-10-10"
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/scrollto'`.

Initialize with **javascript** with `new Xt.Scrollto(document.querySelector('.my-object'), {/* options */})`.

## Usage

Use this code to create a **scroll to anchor**.

Try the demo [on a new page](/demos/components/scroll/scrollto#anchor-2).

[[noteDefault]]
| This demo uses [scroll sticky](/components/scroll/sticky) see documentation for more info.

[[notePrimary]]
| Do not assign **other components** to scrollto `anchors` or it activates the other components on scrollto activation.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/scrollto">
  </div>
</demo>

It works also inside [overlay](/components/overlay) and it automatically open **overlay and all parent components** with `openauto: true`.

Try the demo [on a new page](/demos/components/scroll/scrollto-overlay#anchor-2).

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/scrollto-overlay">
  </div>
</demo>

[[noteDefault]]
| When you navigate history with browsers the scroll is instant not animated because of `history.scrollRestoration = 'auto'`.

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `anchors:Array`                          | `[href*="{hash}"]`        | Query for hash links where `{hash}` is the hash part of the link            |
| Option                    | `class:String`                          | `'on'`        | Activation class for anchors              |
| Option                    | `scrollActivation:Boolean`                          | `true`        | Activate anchors automatically on scroll             |
| Option                    | `scrollDelay:Number`                          | `150`        | Delay on scroll checks             |
| Option                    | `hash:Boolean`                          | `false`        | Update url with hash on anchors, if false you can use `[data-xt-scrollto-hash="true"]` on links to activate hash for only that link             |
| Option                    | `scrollers:Query`                          | `'.xt-overlay'`        | Query for scroll nodes besides document (ordered parent > child)             |
| Option                    | `position({ self }):Function`             | `<Function>`        | Positioning function that sets `self.position`, return `Number`             |
| Option                    | `space({ self }):Function`                          | `<Function>`        | Positioning space window top that sets `self.space`, return `Number`             |
| Option                    | `duration({ self }):Function`                          | `<Function>`        | Scroll duration depending on `self.scroll.scrollTop` and `self.position` that sets `self.duration`, return `Number`            |

</div>

Default functions as follow:

```js
position: ({ self }) => {
  const rect = self.target.getBoundingClientRect()
  let position = rect.top + self.scroller.scrollTop
  if (self.scroller !== document.scrollingElement) {
    const rectScrollElement = self.scroller.getBoundingClientRect()
    position = position - rectScrollElement.top
  }
  return position
},
space: () => {
  return 0
},
duration: () => {
  return 0
},
```

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scrollto.xt.scrollto`      | `object` | Scrolto event           |
| Event                   | `init.xt.scrollto`           | `object` | Init or reinit event             |
| Event                   | `destroy.xt.scrollto`           | `object` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM elements**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scrollto.trigger.xt.scrollto`       | `<any DOM node>` | Scroll to a Node also if not anchored              |

</div>

## Properties

Access properties by getting component object.

```js
let self = Xt.get('xt-scrollto', document.querySelector('.my-object'))
const object = self.object
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `hashchange:Boolean`       | If browser hash change activation             |
| Property                   | `position:Number`       | Current scroll position to scroll to             |
| Property                   | `target:Node`       | Current scroll target             |
| Property                   | `scrollers:Node`       | All scrolling element             |
| Property                   | `scroller:Node`       | Current scrolling element             |
| Property                   | `position:Number`       | Current scroll position             |
| Property                   | `space:Number`       | Current scroll space             |
| Property                   | `duration:Number`       | Current scroll duration             |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get('xt-scrollto', document.querySelector('.my-object'))
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
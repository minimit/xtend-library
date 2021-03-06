---
type: "Components"
category: "Interaction"
parent: "Drop"
title: "API"
date: "1980-05-05"
---

## Util

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Object                   | `let self = Xt.get({ name: 'xt-drop', el })`       | `container` `elements` `targets` | Get object self for this component class             |

</div>

## Listen

Listen to events, for listeners use [this guideline](/components/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.drop`       | `elements` `targets` | Activation event             |
| Event                   | `off.xt.drop`      | `elements` `targets` | Deactivation event            |
| Event                   | `ondone.xt.drop`           | `elements` `targets` | Activation event after delay and duration             |
| Event                   | `offdone.xt.drop`           | `elements` `targets` | Deactivation event after delay and duration             |
| Event                   | `medialoaded.xt.drop`           | `elements` `targets` | Images loaded event            |
| Event                   | `init.xt.drop`           | `container` | Init or reinit event             |
| Event                   | `status.xt.drop`           | `container` | Status event (enabled or disabled)             |
| Event                   | `restart.xt.drop`           | `container` | Restart event             |
| Event                   | `destroy.xt.drop`           | `container` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM elements**.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.trigger.xt.drop`       | `elements` `targets` | Activation event             |
| Event                   | `off.trigger.xt.drop`      | `elements` `targets` | Deactivation event            |
| Event                   | `openauto.trigger.xt`           | `Node` | Trigger the event `openauto.trigger.xt` **inside elements or targets** to automatically activate `openauto: true`             |
| Event                   | `closeauto.trigger.xt`           | `window` | Trigger the event `closeauto.trigger.xt` **on window** to automatically deactivate if `closeauto: true`             |

</div>

You can pass `e.detail` to the trigger event.

With on and off event `e.detail.force = true` will force the activation/deactivation skipping checks.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.drop', { detail: { force: true } }))
```

## Properties

Access properties by getting component object.

```js
let self = Xt.get({ name: 'xt-drop', el: document.querySelector('.my-container') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `container:Node`       | Container node             |
| Property                   | `elements:Array`       | Elements nodes             |
| Property                   | `targets:Array`       | Targets nodes            |
| Property                   | `initial:Boolean`       | If initial or reset activation            |
| Property                   | `disabled:Boolean`       | If component disabled            |
| Property                   | `direction:Number`       | Direction `1` or `-1`            |
| Property                   | `index|null:Number`       | Current activated index            |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get({ name: 'xt-drop', el: document.querySelector('.my-container') })
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getElements({ el, same = false })`                          | Get all elements from element or target, returns `Array`             |
| Method                  | `self.getTargets({ el, same = false })`                          | Get all targets from element or target, returns `Array`             |
| Method                  | `self.getElementsGroups()`                          | Get elements (one per group), returns `Array`             |
| Method                  | `self.hasCurrent({ el, same = false })`                          | Check if element or target is activated, returns `Boolean`             |
| Method                  | `self.getIndex({ el })`                          | Get activation index of from element or target, returns `Number`             |
| Method                  | `self.reinit({ save = true })`       | Reinit component and save currents as initial (default: `true`)             |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.disable()`                          | Disable component             |
| Method                  | `self.enable()`                          | Enable component             |
| Method                  | `self.destroy({ weak = false })`              | Destroy component            |

</div>

You can get activated elements or targets with `hasCurrent`.

```js
self.elements.filter(x => self.hasCurrent({ el: x }))
self.targets.filter(x => self.hasCurrent({ el: x }))
```

Index methods, they all consider `options.loop`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getNextIndex({ index = false, amount = 1, loop = null })`                          | Get next activation index, returns `Number|null`             |
| Method                  | `self.getNext({ amount = 1, loop = null })`                          | Get next element, returns `Node|null`             |
| Method                  | `self.goToNext({ amount = 1, force = false, loop = null })`                          | Activate next element, returns `Node|null`             |
| Method                  | `self.getPrevIndex({ index = false, amount = 1, loop = null })`                          | Get prev activation index, returns `Number|null`             |
| Method                  | `self.getPrev({ amount = 1, loop = null })`                          | Get previous element, returns `Node|null`             |
| Method                  | `self.goToPrev({ amount = 1, force = false, loop = null })`                          | Activate previous element, returns `Node|null`             |
| Method                  | `self.getNumIndex({ index, loop = null }`                          | Get index from number, return `Number|null`             |
| Method                  | `self.getNum({ index = 1, loop = null })`                          | Get element from index, returns `Node|null`             |
| Method                  | `self.goToNum({ index, force = false, loop = null })`                          | Activate index, returns `Node|null`             |

</div>

## API Demo

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/drop/api">
  </div>
</demo>

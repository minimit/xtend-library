---
type: "Components"
category: "Global"
parent: "Animation"
title: "Ripple"
description: "Material ripple effect on user interaction."
date: "1900-10-10"
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.ripple`.

Check [xtendui/src/ripple.css.js](https://github.com/minimit/xtendui/blob/beta/src/ripple.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/ripple'`.

Initialize with **javascript** with `new Xt.Ripple(document.querySelector('.my-object'), {/* options */})`.

## Usage

Use this code to create a **ripple**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/themes/animation/ripple-animation-v1">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `sizeInitial:Boolean`                          | `0.1`        | Initial size factor            |
| Option                    | `onlyInside:Query`                          | `'a, button, .xt-button'`        | Only if selector else query closest             |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.ripple`       | `object` | Activation event             |
| Event                   | `off.xt.ripple`      | `object` | Deactivation event            |
| Event                   | `init.xt.ripple`           | `object` | Init or reinit event             |
| Event                   | `destroy.xt.ripple`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

```js
let self = Xt.get('xt-ripple', document.querySelector('.my-object'))
const object = self.object
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `container:Node`       | Container node             |
| Property                   | `targets:Array`       | Targets nodes            |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get('xt-ripple', document.querySelector('.my-object'))
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
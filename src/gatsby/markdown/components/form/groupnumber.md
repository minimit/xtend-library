---
type: "Components"
category: "Global"
parent: "Form"
title: "Group Number"
description: "Input number with list group and javascript for and effective interaction."
date: "1900-10-10"
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.groupnumber`.

Check [xtendui/src/groupnumber.css.js](https://github.com/minimit/xtendui/blob/beta/src/groupnumber.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/groupnumber'`.

Initialize automatically **within markup** with `[data-xt-groupnumber="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Groupnumber(document.querySelector('.my-object'), {/* options */})`.

## Usage

Use this code to create a **group number**.

You can add steps with `[data-xt-step="value"]` to set the amount to add (`+1`) or remove (`-1`) to the current value.	

<demo>
  <demoinline src="demos/components/form/groupnumber">
  </demoinline>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `inputs:Query`                          | `'input[type="number"]'`        | Inputs query            |
| Option                    | `steps:Query`                          | `'[data-xt-step]'`        | Steps query            |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change`                        | `input` | Value change event             |
| Event                   | `init.xt.groupnumber`           | `object` | Init event             |
| Event                   | `destroy.xt.groupnumber`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

```js
let self = Xt.get('xt-groupnumber', document.querySelector('.my-object'))
const object = self.object
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `inputs:Nodes`       | Inputs nodes             |
| Property                   | `steps:Nodes`       | Steps node             |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get('xt-groupnumber', document.querySelector('.my-object'))
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
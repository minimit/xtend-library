---
type: "Components"
category: "Global"
parent: "Javascript"
title: "Javascript"
description: "Javascript utilities and animations usability improvements."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.javascript` see [preset customization](/components/preset#customization). Check [xtendui/src/javascript.css.js](https://github.com/xtendui/xtendui/blob/beta/src/javascript.css.js) for default styles.

## Javascript

Import the **javascript** file with `import { Xt } from 'xtendui'`.

## Usability and Seo

Activate usability logs with `import 'xtendui/src/usability'`. Xtend will sends **warning messages with website usability suggestions**.

## Listeners

There are three main methods to listen to Xtend UI vanilla javascript events.

We always check for `e.target` because **events propagate** and the event could be from a nested component of the same type.

Listen to events on a **single Node**.

```js
const node = document.querySelector('.my-node')

const on = e => {
  // check because of event propagation
  if (e.target === node) {
    // logic
  }
}

node.addEventListener('eventname.xt.componentname', on)
```

Listen to events on **multiple Nodes**.

```js
for (const node of document.querySelectorAll('.my-node')) {
  const on = e => {
    // check because of event propagation
    if (e.target === node) {
      // logic
    }
  }

  node.addEventListener('eventname.xt.componentname', on)
}
```

Listen to events delegation with **useCapture**. You listen to the event **propagating with useCapture**.

```js
const container = document.querySelector('.my-container')

let self = Xt.get({ name: 'xt-componentname', el: container })

const on = e => {
  const tr = e.target
  // check because of event propagation
  if (self.targets.includes(tr)) {
    // logic
  }
}

container.addEventListener('on.xt.componentname', on, true)
```

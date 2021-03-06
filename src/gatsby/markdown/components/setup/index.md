---
type: "Components"
category: "Introduction"
parent: "Setup"
title: "Setup"
description: "Installation instructions to get Xtend UI up and running."
date: "2050-09-10"
---

If you want we have some boilerplate projects to start a project all ready to go! Check out [xtendui-boilerplate](https://github.com/xtendui/xtendui-boilerplate).

## Installation

Install **xtendui**.

```sh
npm install xtendui@beta --save
```

## Css

Install **tailwind**, **xtendui**, **postcss import**, **postcss nested**.

```sh
npm install tailwindcss@2 xtendui --save
npm install postcss postcss-import autoprefixer cssnano --save-dev
```

Then in `postcss.config.js` set up compilation.

```jsx
module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss/nesting'), require('tailwindcss'), require('autoprefixer'), require('cssnano')],
};
```

Create a `tailwind.config.js` and add **xtendui preset**, with this purge configuration.

```jsx
module.exports = {
  mode: 'jit',
  presets: [
    require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset'),
  ],
  purge: {
    // put other purge content e.g.: './src/**/*.css', './src/**/*.js'
    content: ['./node_modules/xtendui/src/*[!.css].js'],
  },
}
```

Then you can use css with tailwind.

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "./custom.css"; /* custom css here */

@import "tailwindcss/utilities";
```

More info in Tailwind docs [tailwind postcss](https://tailwindcss.com/docs/using-with-preprocessors), [tailwind theme](https://tailwindcss.com/docs/theme).

#### Customization

You can [customize preset or theme](https://xtendui.com/components/preset#customization).

## Javascript

You can import the **components you need** as described in the demos.

```jsx
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
```

#### Gsap

This library uses [gsap](https://github.com/greensock/GSAP) for javascript animations.

```sh
npm install gsap@3 --save
```

#### Polyfill

You need to install [@babel/core](https://www.npmjs.com/package/@babel/core), [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env).

```sh
npm install @babel/core @babel/preset-env --save-dev
```

Then in the root of your project set up polyfills with [babel.config.js](https://github.com/xtendui/xtendui/blob/beta/babel.config.js) and [.browserslistrc](https://github.com/xtendui/xtendui/blob/beta/.browserslistrc).

#### Route Update

**On route update** in react or other frameworks, you need to call this code.

```jsx
import { Xt } from 'xtendui'
Xt.init()
```

## Boilerplate

Add to the `body` the class `xt-body` to setup [animations global styles](https://xtendui.com/components/animation#global-styles) and [layout global styles](https://xtendui.com/components/layout#global-styles).

Add to the `body` the class `xt-links-default` or `xt-links-inverse` to have [link global styles](https://xtendui.com/components/link#global-styles).

**If you use gsap** add [this javascript](https://xtendui.com/components/animation#javascript) to setup animations.

**If you use ScrollTrigger** add [this javascript](https://xtendui.com/components/scroll#setup) to setup scroll fixes.

## Unsupported browsers

If you want to show a warning on unsupported browser you can use [browser update](https://browser-update.org/) and target exactly [supported browsers](https://github.com/xtendui/xtendui/blob/beta/.browserslistrc).

```html
  <script>
    // put at the end of body tag https://browser-update.org/
    var $buoop = {required:{e:79,f:53,o:44,s:11,c:57},api:2021.03 };
    function $buo_f(){
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
    };
    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
```

## CDN

If you need to do a **fast installation** of css and js use [xtendui CDN](https://unpkg.com/xtendui@beta/), the css and js are inside the `dist/` folder.

The CDN `dist/` files are large because they include all components and polyfills, **it's not representative of the sizes** you see when including Xtend UI as part of your build process.

Please note that many of the features that make Xtend UI great **are not available without incorporating Xtend UI into your build process**.

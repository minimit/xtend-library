import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/scroll/scroll.js'
import 'xtend-library/src/addons/animation/propagate-interaction.js'
import gsap from 'gsap'

/**
 * smooth
 */

Xt.mount.push({
  matches: '.demo--2020-bertani-parallax',
  mount: object => {
    // init

    let self = new Xt.Smooth(object, {})

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * propagate-interaction
 */

Xt.mount.push({
  matches: '.demo--2020-bertani-parallax a, .demo--2020-bertani-parallax button',
  mount: object => {
    // init

    let self = new Xt.PropagateInteraction(object, {
      targets: '.btn',
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * .btn--line
 */

Xt.mount.push({
  matches: '.demo--2020-bertani-parallax .btn--line',
  mount: object => {
    // wrap

    if (!object.querySelector('.btn--line_text')) {
      const wrapper = Xt.createElement('<span class="btn--line_text"></span>')
      while (object.firstChild) {
        wrapper.appendChild(object.firstChild)
      }
      object.appendChild(wrapper)
    }

    // prepend

    if (!object.querySelector('.btn--line_line')) {
      object.prepend(Xt.createElement('<span class="btn--line_line"></span>'))
    }

    // vars

    const link = object.tagName === 'a' || object.tagName === 'button' ? object : object.closest('a, button')
    const imgScale = 0.03
    const lineOpacity = 0.4
    const lineX = 15
    const lineWidth = 15
    const lineWidthMax = 150

    // enter

    const eventEnter = e => {
      // img
      const img = link.querySelector('.media-container')
      gsap.to(img, { scale: 1 - imgScale, duration: Xt.vars.timeMedium, ease: 'expo.out' })
      const imgInner = link.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: Xt.vars.timeMedium, ease: 'expo.out' })
      // text
      const text = object.querySelector('.btn--line_text')
      gsap.to(text, { x: lineX, duration: Xt.vars.timeMedium, delay: Xt.vars.timeSmall, ease: 'expo.out' })
      // line
      const line = object.querySelector('.btn--line_line')
      gsap.set(line, { width: 0, x: -lineWidthMax, opacity: lineOpacity, overwrite: true })
      gsap.to(line, { width: lineWidthMax, x: -lineWidthMax + lineWidth, opacity: 1, duration: Xt.vars.timeSmall, ease: 'expo.in' })
      gsap.to(line, { width: lineWidth + lineX, x: 0, opacity: 1, duration: Xt.vars.timeMedium, delay: Xt.vars.timeSmall, ease: 'expo.out' })
    }

    console.log(link, object)

    link.addEventListener('mouseenter', eventEnter)

    // enter

    const eventLeave = e => {
      // img
      const img = link.querySelector('.media-container')
      gsap.to(img, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
      const imgInner = link.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
      // text
      const text = object.querySelector('.btn--line_text')
      gsap.to(text, { x: 0, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
      // line
      const line = object.querySelector('.btn--line_line')
      gsap.to(line, { width: lineWidth, x: 0, opacity: lineOpacity, duration: Xt.vars.timeMedium, ease: 'expo.inOut', overwrite: true })
    }

    link.addEventListener('mouseleave', eventLeave)

    // unmount

    const unmount = () => {}
    return unmount
  },
})

/**
 * .parallax_item
 */

Xt.mount.push({
  matches: '.demo--2020-bertani-parallax .parallax_item',
  mount: object => {
    // vars

    const imgY = 150

    // init

    let self = new Xt.Scroll(object, {
      distance: 0,
      trigger: '50%',
      start: '50%',
      end: '100%',
    })

    // change

    const eventChange = e => {
      const element = e.target
      // img
      const img = element.querySelector('.parallax_img_col')
      gsap.set(img, { y: imgY * (self.detail.ratio - 0.5) })
      // imgInner
      const imgInner = element.querySelector('.parallax_img_col img')
      gsap.set(imgInner, { scale: 1.1 - 0.1 * self.detail.ratio })
    }

    for (const element of self.elements) {
      element.addEventListener('change.xt', eventChange)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
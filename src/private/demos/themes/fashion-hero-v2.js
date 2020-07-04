import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/animation/propagate-interaction.js'
import gsap from 'gsap'

/**
 * PropagateInteraction
 */

Xt.mount.push({
  matches: '#iframe--fashion-hero-v2 body a, #iframe--fashion-hero-v2 body button', // add your own selector instead of body to contain the code
  mount: object => {
    new Xt.PropagateInteraction(object, {
      targets: '.btn',
    })
  },
})

/**
 * link animation
 */

Xt.mount.push({
  matches: '#iframe--fashion-hero-v2 body .slide', // add your own selector instead of body to contain the code
  mount: function(object) {
    // vars

    const links = object.tagName === 'A' || object.tagName === 'BUTTON' ? Xt.arrSingle(object) : object.querySelectorAll('a, button')
    const img = object.querySelector('.media')
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const eventEnter = e => {
      // img
      gsap.to(img, { opacity: imgOpacityIn, duration: Xt.vars.timeSmall, ease: 'quart.out' })
    }

    for (const link of links) {
      link.addEventListener('mouseenter', eventEnter)
    }

    // enter

    const eventLeave = e => {
      // img
      gsap.to(img, { opacity: imgOpacityOut, duration: Xt.vars.timeSmall, ease: 'quart.out', overwrite: true })
    }

    for (const link of links) {
      link.addEventListener('mouseleave', eventLeave)
    }
  },
})

/**
 * slider
 */

Xt.mount.push({
  matches: '#iframe--fashion-hero-v2 body .slider', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const assetCoverTimeOn = Xt.vars.timeBig + 150 // @FIX to cover skew: + 250
    const assetCoverEaseOn = 'quint.inOut'
    const assetCoverTimeOff = Xt.vars.timeBig
    const assetCoverEaseOff = 'quint.inOut'

    const assetMaskTime = Xt.vars.timeBig
    const assetMaskEase = 'quint.inOut'

    const assetZoom = 0.25
    const assetTime = Xt.vars.timeBig
    const assetDelay = Xt.vars.timeBig / 2
    const assetEase = 'expo.out'

    const contentX = 200
    const contentTime = Xt.vars.timeBig
    const contentEase = 'quint.inOut'

    // slider

    let self = new Xt.Slider(object, {
      instant: true,
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeBig,
      auto: {
        //time: 5000,
        pause: '.slide_item_content_inner',
      },
      autoHeight: false,
      groupMq: false,
      drag: {
        duration: Xt.vars.timeBig,
        overflow: false,
      },
    })

    // drag

    const eventDrag = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCover = tr.querySelector('.slide_cover')
      const skew = self.detail.dragRatio < 0.5 ? 10 * (self.detail.dragRatio * 1.5) : 10 * (self.detail.dragRatioInverse * 1.5) // * 2 would be the same as the normal skew
      gsap.set(assetCover, { x: 100 * self.detail.dragRatioInverse * self.direction + '%', skewX: skew * self.direction })
      // content
      const content = tr.querySelector('.slide_item_content')
      gsap.set(content, { x: -contentX * self.detail.dragRatio * self.direction, opacity: 1 * self.detail.dragRatioInverse })
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCover = tr.querySelector('.slide_cover')
      gsap.to(assetCover, { x: 100 * self.direction + '%', duration: assetCoverTimeOff, ease: assetCoverEaseOff })
      gsap.to(assetCover, { skew: 0, duration: assetCoverTimeOff / 2, ease: assetCoverEaseOff })
      // content
      const content = tr.querySelector('.slide_item_content')
      gsap.to(content, { x: 0, opacity: 1, duration: contentTime, ease: contentEase })
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        if (self.initial) {
          // inject
          for (const target of self.targets) {
            if (!target.querySelector('.slide_cover')) {
              const inject = Xt.createElement(`<div class="slide_cover"></div>`);
              target.querySelector('.slide-inner').prepend(inject)
            }
          }
          // cover
          const assetCover = tr.querySelector('.slide_cover')
          gsap.killTweensOf(assetCover)
          gsap.set(assetCover, { x: 100 * self.direction + '%', skewX: 0 })
          // assetMask
          const assetMask = tr.querySelector('.slide_item')
          gsap.killTweensOf(assetMask)
          gsap.set(assetMask, { x: 0 })
          const assetMaskInner = assetMask.querySelector('.slide_item_inner')
          gsap.killTweensOf(assetMaskInner)
          gsap.set(assetMaskInner, { x: 0 })
          // asset
          const asset = tr.querySelector('.slide_item_asset .media')
          gsap.killTweensOf(asset)
          gsap.set(asset, { scale: 1 })
        } else {
          // cover
          const assetCover = tr.querySelector('.slide_cover')
          gsap.set(assetCover, { x: 100 * self.direction + '%', skewX: 0 })
          gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTimeOn, ease: assetCoverEaseOn })
          gsap.to(assetCover, { skewX: 5 * self.direction, duration: assetCoverTimeOn / 2, ease: assetCoverEaseOn }).eventCallback('onComplete', () => {
            gsap.to(assetCover, { skewX: 0, duration: assetCoverTimeOn / 2, ease: assetCoverEaseOn })
          })
          // assetMask
          const assetMask = tr.querySelector('.slide_item')
          gsap.set(assetMask, { x: (self.detail.dragging ? 125 : 100) * self.direction + '%' }) // @FIX to cover skew 125%
          gsap.to(assetMask, { x: 0, duration: assetMaskTime, ease: assetMaskEase })
          const assetMaskInner = assetMask.querySelector('.slide_item_inner')
          gsap.set(assetMaskInner, { x: (self.detail.dragging ? -125 : -100) * self.direction + '%' }) // @FIX to cover skew 125%
          gsap.to(assetMaskInner, { x: 0, duration: assetMaskTime, ease: assetMaskEase })
          // asset
          const asset = tr.querySelector('.slide_item_asset .media')
          gsap.set(asset, { scale: 1 + assetZoom })
          gsap.to(asset, { scale: 1, duration: assetTime, ease: assetEase, delay: assetDelay })
          // content
          const content = tr.querySelector('.slide_item_content')
          gsap.set(content, { x: contentX * self.direction })
          gsap.to(content, { x: 0, opacity: 1, duration: contentTime, ease: contentEase })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // on

    const eventOff = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // cover
        if (self.detail.dragging) {
          const assetCover = tr.querySelector('.slide_cover')
          gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTimeOff, ease: assetCoverEaseOff })
          gsap.to(assetCover, { skewX: 10 * self.direction, duration: assetCoverTimeOff / 2, ease: assetCoverEaseOff }).eventCallback('onComplete', () => {
            gsap.to(assetCover, { skewX: 0, duration: assetCoverTimeOff / 2, ease: assetCoverEaseOff })
          })
        }
        // assetMask
        const assetMask = tr.querySelector('.slide_item')
        gsap.to(assetMask, { x: -100 * self.direction + '%', duration: assetMaskTime, ease: assetMaskEase })
        const assetMaskInner = assetMask.querySelector('.slide_item_inner')
        gsap.to(assetMaskInner, { x: 100 * self.direction + '%', duration: assetMaskTime, ease: assetMaskEase })
        // content
        const content = tr.querySelector('.slide_item_content')
        gsap.to(content, { x: -contentX * self.direction, opacity: 0, duration: contentTime, ease: contentEase })
      }
    }

    self.object.addEventListener('off.xt', eventOff, true)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
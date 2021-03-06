import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* overlay mobile */

Xt.mount({
  matches: '.gatsby_menu--button',
  mount: ({ ref }) => {
    // overlay

    new Xt.Overlay(ref, {
      targets: '#gatsby_menu--overlay',
      appendTo: '.gatsby_site-wrapper',
      disabled: true,
      duration: 500,
      closeauto: false,
      matches: {
        '(max-width: 1023px)': {
          disabled: false,
        },
      },
    })
  },
})

/* sticky header */

Xt.mount({
  matches: '.gatsby_site-header',
  mount: ({ ref }) => {
    // match media

    ScrollTrigger.matchMedia({
      '(max-width: 1023px)': () => {
        // sticky

        ScrollTrigger.create({
          trigger: ref,
          start: 'top top',
          endTrigger: 'html',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        })
      },
    })
  },
})

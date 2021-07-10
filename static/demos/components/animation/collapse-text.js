import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

Xt.mount({
  matches: '.demo--collapse-text',
  mount: ({ ref }) => {
    const unmountCollapses = mountCollapses({ ref })

    // unmount

    return () => {
      unmountCollapses()
    }
  },
})

/* mountCollapse */

const mountCollapse = ({ button }) => {
  // disable if not overflowing and not on

  const self = Xt.get({ name: 'xt-toggle', el: button })
  for (const tr of self.targets) {
    if (tr.scrollHeight <= tr.clientHeight) {
      const els = self.getElements({ el: tr }).filter(x => !self.hasCurrent({ el: x }))
      if (els.length) {
        tr.style.maxHeight = 'none'
        for (const el of els) {
          el.classList.add('hidden')
        }
      }
    }
  }
}

/* mountCollapses */

const mountCollapses = ({ ref }) => {
  // vars

  const buttons = ref.querySelectorAll('.button--collapse')

  // intersection observer
  for (const button of buttons) {
    // when button is visible
    const observer = new IntersectionObserver(
      function (entries, observer) {
        for (const entry of entries) {
          if (entry.intersectionRatio > 0) {
            // disconnect observer
            observer.disconnect()
            // mount
            mountCollapse({ button })
          }
        }
      },
      { root: null }
    )
    observer.observe(button)
  }

  // unmount

  return () => {}
}

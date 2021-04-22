import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import gsap from 'gsap'

export default function component() {
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(ref => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--loader-js-filler-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center justify-center">
        <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
          <div className="text-sm py-6 px-7">
            <div className="xt-h5">Small</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 xt-toggle opacity-0 transition in:opacity-100">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 left-1/4 right-1/4">
              <span className="absolute bg-current opacity-25 w-full h-full"></span>
              <span className="absolute bg-current h-full"></span>
            </span>
          </span>
        </div>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Lorem ipsum
          <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 xt-toggle opacity-0 transition in:opacity-100">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 left-1/4 right-1/4">
              <span className="absolute bg-current opacity-25 w-full h-full"></span>
              <span className="absolute bg-current h-full"></span>
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountLoader = mountLoader({ ref })

  // unmount

  return () => {
    unmountLoader()
  }
}

/* mountLoader */

const mountLoader = ({ ref }) => {
  // vars

  const loaders = ref.querySelectorAll('.xt-loader')
  const unmounts = []

  for (const loader of loaders) {
    // init

    const loaderTimeout = () => {
      const filler = ref.querySelectorAll('.xt-filler span:nth-child(2)')
      if (loader.dataset.loaderTimeout) {
        clearTimeout(loader.dataset.loaderTimeout)
        delete loader.dataset.loaderTimeout
        Xt.animOn(loader)
        gsap.set(filler, {
          width: 0,
        })
        gsap
          .to(filler, {
            width: '100%',
            duration: 1,
            ease: 'linear',
          })
          .eventCallback('onComplete', loaderTimeout)
      } else {
        Xt.animOff(loader)
        loader.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)
      }
    }

    loader.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)

    // unmount

    unmounts.push(() => {
      clearTimeout(loader.dataset.loaderTimeout)
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
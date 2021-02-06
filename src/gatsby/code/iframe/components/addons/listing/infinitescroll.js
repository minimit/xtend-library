import React from 'react'
import path from 'path'
const spinner = require('components/snippets/spinner').default
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="py-10" data-xt-infinitescroll="{
    get: false,
    max: 4,
    elements: {
      scrollOffset: '.infinitescroll',
      trigger: '.infinitescroll-trigger .btn',
      reset: '.infinitescroll-pre .btn',
      items: '.row',
      spaceAdditional: '.infinitescroll-pre',
      pagination: '.infinitescroll-pagination',
      item: ':scope > *',
    },
  }">
  <div class="container">

    <div class="infinitescroll-pre mb-4">
      <div class="list list-1 flex-col items-center">
        <div>
          <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
            Load previous pages
          </button>
        </div>
      </div>
    </div>

    <div class="row row-3">

      <div class="w-6/12 md:w-4/12">
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Lorem Ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12">
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
          <div class="media-container bg-gray-700 ratio-75 md:ratio-50">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Lorem Ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12">
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
          <div class="media-container bg-gray-700 ratio-75 md:ratio-50">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>

  <div class="infinitescroll mt-4">
    <div class="list list-1 flex-col items-center">

      <div class="infinitescroll-trigger">
        <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">

          <span class="infinitescroll-trigger-content">
            Show more products
          </span>

          <span class="infinitescroll-trigger-content-nomore">
            There are no more products
          </span>

          <span class="loader infinitescroll-spinner">
            <span class="spinner spinner-animated text-white">
              ${spinner({})}
            </span>
          </span>

        </button>
      </div>

      <div class="infinitescroll-pagination h6">
        Page xt-num of xt-tot
      </div>

    </div>

  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page

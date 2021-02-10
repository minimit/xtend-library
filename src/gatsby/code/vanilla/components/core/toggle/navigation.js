import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default
const iconArrowLeft = require('components/snippets/icons').iconArrowLeft
const iconArrowRight = require('components/snippets/icons').iconArrowRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-3 items-center" data-xt-toggle="{ navigation: '[data-xt-nav]' }">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 1
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 2
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 3
  </button>

  <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
    ${iconArrowLeft({ classes: 'text-xl -my-1' })}
  </button>

  <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
    ${iconArrowRight({ classes: 'text-xl -my-1' })}
  </button>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 1
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 2
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 3
  </div>

</div>
`

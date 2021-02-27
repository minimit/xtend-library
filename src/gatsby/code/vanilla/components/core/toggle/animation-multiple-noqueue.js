import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const cardToggle = require('components/snippets/classes').cardToggle

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ queue: false }">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 1
  </button>

  <div class="xt-toggle-item relative w-full">

    <div class="xt-card xt-toggle xt-toggle-absolute rounded-md ${cardToggle()} transform transition opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0" data-xt-duration="500">
      Target 0
    </div>

    <div class="xt-card xt-toggle xt-toggle-absolute rounded-md ${cardToggle()} transform transition opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0" data-xt-duration="500">
      Target 1
    </div>

  </div>

  <div class="mt-2">This text is below targets.</div>

</div>
`
import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-3 items-center">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}" data-xt-toggle>
    Toggle
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}" data-xt-toggle>
    Toggle
  </button>

</div>
`

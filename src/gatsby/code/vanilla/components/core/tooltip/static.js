import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultTooltip = require('components/snippets/classes/card-default-tooltip').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="relative py-4 px-6 bg-accent-500">

  <div data-xt-tooltip>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      static
    </button>

    <div class="tooltip tooltip-static p-0">
      <div class="card card-tooltip rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
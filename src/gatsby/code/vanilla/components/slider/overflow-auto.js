import path from 'path'
const markupSlider = require('components/snippets/components/markup-slider-overflow').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider"
    data-xt-slider="{ align: 'center', drag: { wrap: true } }">
  ${indentString(markupSlider(), 2)}
</div>
`
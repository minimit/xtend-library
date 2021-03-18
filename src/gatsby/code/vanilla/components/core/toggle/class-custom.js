import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ class: 'in demo--toggle-custom-class' }">

<button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
  Toggle 0
</button>

<button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} demo--toggle-custom-class">
  Toggle 1
</button>

<button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
  Toggle 2
</button>

<button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
  Toggle 3
</button>

<div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
  Target 0
</div>

<div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
  Target 1
</div>

<div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
  Target 2
</div>

<div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
  Target 3
</div>

</div>
`
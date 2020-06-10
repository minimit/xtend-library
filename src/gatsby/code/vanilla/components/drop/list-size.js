import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      default
    </button>
    <div class="drop drop-default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      small
    </button>
    <div class="drop drop-default drop-small">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      medium
    </button>
    <div class="drop drop-default drop-medium">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      large
    </button>
    <div class="drop drop-default drop-large">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>

</div>
`
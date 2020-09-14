import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefault = require('components/snippets/classes/card-default').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const cardDefaultDropList = require('components/snippets/classes/card-default-drop-list').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-1 items-center">
  <button type="button" class="btn btn-small ${btnPrimary()}" id="demo--drop-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-small ${btnPrimary()}" id="demo--drop-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-small ${btnPrimary()}" id="demo--drop-events-add">
    Add
  </button>
  <button type="button" class="btn btn-small ${btnPrimary()}" id="demo--drop-events-remove">
    Remove
  </button>
  <button type="button" class="btn btn-small ${btnPrimary()}" id="demo--drop-events-block">
    Block/Unblock
  </button>
  <button type="button" class="btn btn-small ${btnPrimary()}" id="demo--drop-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-small ${btnPrimary()}" id="demo--drop-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-small ${btnPrimary()}" id="demo--drop-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-small ${btnPrimary()}" id="demo--drop-events-unmount">
    Unmount
  </button>
</div>

<br/>

<div class="list list-space-2 items-center inline-flex" id="demo--drop-events">

  <div class="drop-container">

    <button type="button" class="btn btn-medium ${btnPrimary()}">
      drop
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-small ${cardDefaultDropList()}">
          <div class="card-block py-3">
            <nav class="list-block">
              <a href="#" class="btn btn-small ${btnDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container">

    <button type="button" class="btn btn-medium ${btnPrimary()}">
      drop
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-small ${cardDefaultDropList()}">
          <div class="card-block py-3">
            <nav class="list-block">
              <a href="#" class="btn btn-small ${btnDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>

<div class="card ${cardDefault()}">
  <div class="card-block card-block-small overflow-y-auto overflow-x-hidden overflow-sub max-h-64" id="demo--drop-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page

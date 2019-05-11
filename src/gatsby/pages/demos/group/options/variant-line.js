import React from "react"

import DemoIframe from "components/demo-iframe"

const demo = {
  name: 'line',
  full: false
}

class Page extends React.Component {
  componentDidMount() {
  }

  render() {
    let htmlSource = `
      <div class="group group-input">
        <span class="group_inner">
          <button type="button" class="btn btn--primary">
            <span>btn 1</span>
          </button>
        </span>
        <span class="group_inner">
          <button type="button" class="btn btn--primary-empty">
            <span>btn 2</span>
          </button>
        </span>
        <input type="text" class="form-input">
        <span class="group_inner">
          <button type="button" class="btn btn--secondary">
            <span>btn 3</span>
          </button>
        </span>
        <span class="group_inner">
          <button type="button" class="btn btn--secondary-empty">
            <span>btn 4</span>
          </button>
        </span>
      </div>
    `
    let jsSource = null
    let cssSource = null
    return (
      <DemoIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page

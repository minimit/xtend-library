import React from 'react'
import PropTypes from 'prop-types'
import SEO from 'src/gatsby/templates/seo'
import Layout from 'src/gatsby/templates/layout-demo'

export default class DemoIframe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'html',
    }
  }

  componentDidMount() {
    // currentDemos
    window.parent.currentDemos.push(this)
    // raf because initial render not switched already because of localStorage
    requestAnimationFrame(() => {
      this.refresh()
    })
  }

  switchClean() {
    // clean react conditional rendering and generated nodes
    window.parent.switchClean(null, this.src)
  }

  refresh() {
    this.setState({ mode: localStorage.getItem('mode') })
    // populate
    if (window !== window.parent) {
      if (this.state.mode === 'react') {
        window.parent.initIframe(this.src, false, `/${this.src}.jsx`, `/${this.src}.css`)
      } else {
        window.parent.initIframe(this.src, this.html, false, `/${this.src}.css`, `/${this.src}.js`)
      }
    }
  }

  render() {
    const { location } = this.props
    this.src = location.pathname.replace(/^\/|\/$/g, '') // replace leading and trailing slash if present
    const id = this.src.split('/').join('-')
    // seo
    const seo = {}
    seo.title = this.src
    seo.description = seo.title
    // iframe
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('gatsby_iframe-inside')
      require('src/gatsby/assets/scripts/shared')
      document.documentElement.setAttribute('id', id)
    }
    // vanilla
    const object = require(`static/${this.src}.html.js`).object
    this.html = object.html
    if (typeof window !== 'undefined') {
      if (object.container) {
        document.documentElement.classList.add('gatsby_iframe-container')
      }
    }
    try {
      require(`static/${this.src}.js`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    // react
    const Demo = require(`static/${this.src}.jsx`).default
    // render all
    return (
      <Layout>
        <SEO title={seo.title} description={seo.description} />
        <div id="body-outer">
          {this.state.mode === 'react' ? (
            <div id="gatsby_body-inner" className="gatsby_demo_source--from invisible relative xt-h-screen">
              <Demo />
            </div>
          ) : (
            <div
              id="gatsby_body-inner"
              className="gatsby_demo_source--from invisible relative xt-h-screen"
              dangerouslySetInnerHTML={{ __html: this.html }}
            />
          )}
        </div>
      </Layout>
    )
  }
}

DemoIframe.propTypes = {
  location: PropTypes.object.isRequired,
}

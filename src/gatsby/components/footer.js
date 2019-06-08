import React from "react"
import PropTypes from "prop-types"

class Footer extends React.Component {
  render() {
    const {site} = this.props
    return (
      <footer className="site_footer">
        <div className="site_footer_bottom">
          <div className="container full">
            <div className="row site_footer_bottom_row">
              <div>
                Site and docs licensed <a href="https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS"
                                          target="_blank" rel="noopener">CC BY 3.0</a> <br/><span
                className="separator separator--dash"></span> {site.site.siteMetadata.title} v{site.site.siteMetadata.version} licensed <a
                href="https://github.com/minimit/minimit/blob/master/LICENSE" target="_blank" rel="noopener">MIT</a><br/>
              </div>
              <div>
                © 2017 – {new Date().getFullYear()} <span>{site.site.siteMetadata.author}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  site: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Footer

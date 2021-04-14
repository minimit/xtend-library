const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--scrollto-overlay">
    <div class="xt-sticky">
      <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
        <div class="xt-list xt-list-3">
          <a
            href="#anchor-0"
            class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
            data-xt-overlay="{ targets: '#overlay--scrollto' }"
          >
            #0
          </a>
          <a
            href="#anchor-1"
            class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
            data-xt-overlay="{ targets: '#overlay--scrollto' }"
          >
            #1
          </a>
          <button
            type="button"
            class="xt-button button--custom ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
            data-xt-overlay="{ targets: '#overlay--scrollto' }"
          >
            custom
          </button>
          <a
            href="#anchor-2"
            class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
            data-xt-overlay="{ targets: '#overlay--scrollto' }"
          >
            #2
          </a>
        </div>
      </div>
    </div>

    <div class="container">
      <form class="text-sm mt-4">
        <label class="${classes.checkLabel()}">
          <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" checked />
          <span class="${classes.checkContent()}">Deactivate classes</span>
        </label>
      </form>
    </div>

    <div class="xt-overlay" id="overlay--scrollto">
      <div class="xt-backdrop bg-black opacity-25"></div>
      <div class="xt-overlay-container p-0">
        <div class="xt-overlay-inner">
          <button type="button" class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
            ${classes.iconX()}
          </button>

          <div class="xt-sticky">
            <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
              <div class="xt-list xt-list-3">
                <a href="#anchor-0" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
                  #0
                </a>
                <a href="#anchor-1" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
                  #1
                </a>
                <button
                  type="button"
                  class="xt-button button--custom ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
                >
                  custom
                </button>
                <a href="#anchor-2" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
                  #2
                </a>
              </div>
            </div>
          </div>

          <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}" id="anchor-0">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
              egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
              feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
            </p>
            <div class="xt-list xt-list-3">
              <a href="#anchor-0" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #0 </a>
              <a href="#anchor-1" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #1 </a>
              <button
                type="button"
                class="xt-button button--custom ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
              >
                custom
              </button>
              <a href="#anchor-2" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #2 </a>
            </div>
          </div>

          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />

          <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}" id="anchor-1">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
              egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
              feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
            </p>
            <div class="xt-list xt-list-3">
              <a href="#anchor-0" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #0 </a>
              <a href="#anchor-1" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #1 </a>
              <button
                type="button"
                class="xt-button button--custom ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
              >
                custom
              </button>
              <a href="#anchor-2" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #2 </a>
            </div>
          </div>

          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />

          <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}" id="custom">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
              egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
              feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
            </p>
            <div class="xt-list xt-list-3">
              <a href="#anchor-0" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #0 </a>
              <a href="#anchor-1" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #1 </a>
              <button
                type="button"
                class="xt-button button--custom ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
              >
                custom
              </button>
              <a href="#anchor-2" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #2 </a>
            </div>
          </div>

          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />

          <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}" id="anchor-2">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
              egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
              feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
            </p>
            <div class="xt-list xt-list-3">
              <a href="#anchor-0" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #0 </a>
              <a href="#anchor-1" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #1 </a>
              <button
                type="button"
                class="xt-button button--custom ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
              >
                custom
              </button>
              <a href="#anchor-2" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"> #2 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
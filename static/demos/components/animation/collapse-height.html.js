const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-toggle="{ elements: '.xt-button', targets: '.xt-toggle', collapseHeight: 'targets' }">
      <div class="xt-list xt-list-3 items-center mb-4">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
          Toggle 0
        </button>

        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
          Toggle 1
        </button>
      </div>

      <div class="xt-row xt-row-6">
        <div class="w-full md:w-6/12">
          <div class="xt-card rounded-md ${classes.cardDefault()}">
            <div class="xt-media-container bg-gray-600 rounded-md xt-ratio-37.5">
              <div
                class="absolute inset-0 rounded-inherit xt-toggle overflow-hidden transition-all"
                data-xt-duration="500"
              >
                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-6/12">
          <div class="xt-card rounded-md ${classes.cardDefault()}">
            <div class="xt-media-container bg-gray-600 rounded-md xt-ratio-37.5">
              <div
                class="absolute inset-0 rounded-inherit xt-toggle overflow-hidden transition-all"
                data-xt-duration="500"
              >
                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
              </div>
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
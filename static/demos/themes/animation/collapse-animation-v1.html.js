const classes = require('src/gatsby/components/snippets/classes').classes
const animDesign =
  'h-0 overflow-hidden transform ease-in-out-quint duration-500 -translate-y-4 group-active:translate-y-0'
const animItem =
  'transform ease-in-out-quint transition duration-500 opacity-0 -translate-y-4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0'
const animItemOpacity =
  'transition-opacity ease-in-out-quint duration-300 opacity-0 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100'
const listCollapse = 'w-0 overflow-hidden transform ease-out-quint duration-500 -translate-x-4 active:translate-x-0'

const html = /* HTML */ `
  <div>
    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">List Group</div>

    <form
      class="text-xs"
      data-xt-toggle="{ elements: '.w-full > .xt-button', targets: '.w-full > .xt-list', collapseWidth: 'targets' }"
    >
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full md:w-auto">
          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
            List group
          </button>
        </div>

        <div class="w-full md:w-auto">
          <div class="xt-list flex-nowrap max-w-sm ${listCollapse}">
            <div class="xt-list-inner flex-auto">
              <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonDefault()}">
                ${classes.iconSearch({ classes: 'text-xl -my-1' })}
              </button>
              <input
                type="text"
                class="xt-input ${classes.inputDefault()}"
                aria-label="Search"
                placeholder="Seach Catalog"
              />
            </div>

            <button type="button" class="xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonPrimary()}">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Drop</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ targetsInner: '.xt-drop-inner', collapseHeight: 'targetsInner' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          list
        </button>

        <div class="xt-drop p-4 group" data-xt-duration="700">
          <div class="xt-drop-inner rounded-md shadow-drop ${animDesign}">
            <div class="xt-card w-64 py-3.5 rounded-md ${classes.cardWhite()}">
              <nav class="xt-list flex-col rounded-md${animItem}">
                <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                  Dolor sit
                </button>
                <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                  Amet
                </button>
              </nav>
            </div>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ${animItemOpacity}"></div>
        </div>
      </div>

      <div data-xt-drop="{ targetsInner: '.xt-drop-inner', collapseHeight: 'targetsInner' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          card
        </button>

        <div class="xt-drop p-4 group" data-xt-duration="700">
          <div class="xt-drop-inner rounded-md shadow-drop ${animDesign}">
            <div class="xt-card w-64 rounded-md ${classes.cardWhite()}">
              <button
                type="button"
                class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl ${animItem}"
                aria-label="Close"
              >
                ${classes.iconX()}
              </button>
              <div class="${classes.cardSm()} rounded-md ${animItem}">
                <div class="xt-h5">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
              </div>
            </div>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ${animItemOpacity}"></div>
        </div>
      </div>
    </div>

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Tooltip</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ targetsInner: '.xt-tooltip-inner', collapseHeight: 'targetsInner' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          tooltip
        </button>

        <div class="xt-tooltip p-2 group" data-xt-duration="700">
          <div class="xt-tooltip-inner ${animDesign}">
            <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
              <div class="${animItem}">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
          <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below ${animItemOpacity}"></div>
        </div>
      </div>

      <div data-xt-tooltip="{ targetsInner: '.xt-tooltip-inner', collapseHeight: 'targetsInner' }">
        <div class="xt-tooltip-item">
          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
            list group
          </button>

          <div class="xt-tooltip p-2 group" data-xt-duration="700">
            <div class="xt-tooltip-inner rounded-md shadow-tooltip text-black bg-white ${animDesign}">
              <form class="text-sm">
                <div class="xt-list flex-nowrap max-w-sm ${animItem}">
                  <div class="xt-list-inner flex-auto">
                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonDefault()}"
                    >
                      ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                    </button>
                    <input
                      type="text"
                      class="xt-input ${classes.inputDefault()}"
                      aria-label="Search"
                      placeholder="Seach Catalog"
                    />
                  </div>

                  <button type="button" class="xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonPrimary()}">
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below ${animItemOpacity}"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Overlay</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ targetsInner: '.xt-overlay-inner', collapseHeight: 'targetsInner' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          screen full
        </button>
        <div class="xt-overlay group" data-xt-duration="700">
          <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
          <div class="xt-overlay-container p-0">
            <button
              type="button"
              class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl ${animItem}"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="xt-overlay-inner ${animDesign}">
              <div class="xt-card xt-min-h-screen items-center justify-center ${classes.cardWhite()}">
                <div class="xt-media-container bg-gray-600 xt-ratio-100 ${animItem}">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ targetsInner: '.xt-overlay-inner', collapseHeight: 'targetsInner' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          Menu
        </button>

        <div class="xt-overlay group" data-xt-duration="700">
          <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
          <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
            <div class="xt-overlay-inner ${animDesign}">
              <div class="xt-card xt-min-h-screen ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="xt-list bg-primary-500 ${animItem}">
                  <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonPrimary()}">Menu</button>
                  <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonPrimary()}">Info</button>
                  <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonPrimary()}">
                    Account
                  </button>
                </div>
                <div class="xt-media-container bg-gray-600 h-48 ${animItem}">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
                <div class="${classes.cardMd()} ${animItem}">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
                <div class="${classes.cardSm()} bg-gray-300 mt-auto ${animItem}">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ targetsInner: '.xt-overlay-inner', collapseHeight: 'targetsInner' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          contact
        </button>

        <div class="xt-overlay group" data-xt-duration="700">
          <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner rounded-md shadow-overlay ${animDesign}">
              <div class="xt-card rounded-md ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group rounded-md ${animItem}">
                  <div class="${classes.cardMd()} md:w-7/12">
                    <div class="xt-h4">Contact us</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                    <form class="text-sm">
                      <div class="xt-row xt-row-x-6 xt-row-y-4">
                        <div class="w-full md:w-6/12">
                          <label class="xt-label mb-3 ${classes.labelDefault()}"> Name </label>
                          <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Name" />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="xt-label mb-3 ${classes.labelDefault()}"> Surname </label>
                          <input
                            type="text"
                            class="xt-input rounded-md ${classes.inputDefault()}"
                            aria-label="Surname"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="xt-label mb-3 ${classes.labelDefault()}"> Email </label>
                          <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Email" />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="xt-label mb-3 ${classes.labelDefault()}"> Telephone </label>
                          <input
                            type="text"
                            class="xt-input rounded-md ${classes.inputDefault()}"
                            aria-label="Telephone"
                          />
                        </div>

                        <div class="w-full">
                          <label class="xt-label mb-3 ${classes.labelDefault()}"> Subject </label>
                          <select class="xt-input xt-select rounded-md ${classes.inputDefault()}" aria-label="Subject">
                            <option selected value="">Select an option</option>
                            <option>Test</option>
                            <option>Test</option>
                            <option>Test</option>
                          </select>
                        </div>

                        <div class="w-full">
                          <label class="xt-label mb-3 ${classes.labelDefault()}"> Message </label>
                          <textarea
                            class="xt-input xt-textarea rounded-md ${classes.inputDefault()} h-24 resize-vertical"
                            aria-label="Message"
                          ></textarea>
                        </div>

                        <div class="w-full">
                          <label class="xt-label-check">
                            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" />
                            <span class="xt-check-content">
                              I <strong>read and accept</strong> the
                              <a href="#" target="_blank" rel="noopener">sales conditions</a> and the
                              <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="md:w-5/12 flex flex-col ${animItem}">
                    <div class="xt-media-container bg-gray-600 md:rounded-tr-md h-48 md:xt-ratio-100">
                      <div class="xt-media-inner">
                        <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>
                    <div class="${classes.cardMd()} bg-gray-300 rounded-b-md md:rounded-bl-none flex-full">
                      <p class="xt-h5">Didn&apos;t find what you was looking for?</p>
                      <p>
                        Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                        <a href="mailto:info@info.com">info@info.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ targetsInner: '.xt-overlay-inner', collapseHeight: 'targetsInner' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          newsletter
        </button>

        <div class="xt-overlay group" data-xt-duration="700">
          <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner rounded-md shadow-overlay ${animDesign}">
              <div class="xt-card rounded-md ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group rounded-md ${animItem}">
                  <div class="md:w-5/12 flex flex-col">
                    <div
                      class="xt-media-container bg-gray-600 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full"
                    >
                      <div class="xt-media-inner">
                        <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>
                  </div>

                  <div class="${classes.cardMd()} md:w-7/12">
                    <div class="xt-h4">Subscribe to our newsletter</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                    <form class="text-sm">
                      <div class="xt-row xt-row-x-6 xt-row-y-4">
                        <div class="w-full">
                          <label class="xt-label mb-3 ${classes.labelDefault()}"> Email </label>
                          <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Email" />
                        </div>

                        <div class="w-full">
                          <label class="xt-label mb-3 ${classes.labelDefault()}"> Subject </label>

                          <div class="xt-row xt-row-x-8 xt-row-y-2">
                            <div class="w-full sm:w-auto">
                              <label class="xt-label-check">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
                                  name="radio-usage"
                                  checked
                                />
                                <span class="xt-check-content"> Option 1 </span>
                              </label>
                            </div>

                            <div class="w-full sm:w-auto">
                              <label class="xt-label-check">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
                                  name="radio-usage"
                                />
                                <span class="xt-check-content"> Option 2 </span>
                              </label>
                            </div>

                            <div class="w-full sm:w-auto">
                              <label class="xt-label-check">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
                                  name="radio-usage"
                                />
                                <span class="xt-check-content"> Option 3 </span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="w-full">
                          <label class="xt-label-check">
                            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" />
                            <span class="xt-check-content">
                              I <strong>read and accept</strong> the
                              <a href="#" target="_blank" rel="noopener">sales conditions</a> and the
                              <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="${classes.cardSm()} rounded-b-md bg-gray-300 ${animItem}">
                  <p>Receive <strong>free discount</strong> periodically on all our products.</p>
                </div>
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
  container: true,
}
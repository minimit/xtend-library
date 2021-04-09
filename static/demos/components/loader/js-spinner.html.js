const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--loader-js-spinner">
    <div class="xt-list xt-list-3 items-center justify-center">
      <div class="xt-card rounded-md ${classes.cardDefault()}">
        <div class="${classes.cardSm()}">
          <div class="xt-h5">Small</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
        <div
          class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 xt-toggle opacity-0 transition xt-active:opacity-100"
        >
          <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">${classes.spinner({})}</div>
        </div>
      </div>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Lorem ipsum
        <span
          class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 xt-toggle opacity-0 transition xt-active:opacity-100"
        >
          <span class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500"> ${classes.spinner({})} </span>
        </span>
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
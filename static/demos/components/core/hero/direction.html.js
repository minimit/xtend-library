const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="hero relative overflow-hidden">
      <div class="xt-media-container bg-gray-200 w-full h-full absolute">
        <div class="xt-media-inner">
          <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
        </div>
      </div>
      <div class="flex relative min-h-screen">
        <div
          class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left group"
        >
          <h2 class="xt-h1">Lorem ipsum dolor sit amet</h2>
          <h3 class="xt-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
          </h3>
          <a href="#" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"> Lorem ipsum </a>
        </div>
      </div>
    </div>

    <div class="hero relative overflow-hidden">
      <div class="xt-media-container bg-gray-200 w-full h-full absolute">
        <div class="xt-media-inner">
          <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
        </div>
      </div>
      <div class="flex relative min-h-screen">
        <div
          class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left group"
        >
          <h2 class="xt-h1">Lorem ipsum dolor sit amet</h2>
          <h3 class="xt-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
          </h3>
          <a href="#" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"> Lorem ipsum </a>
        </div>
      </div>
    </div>

    <div class="hero relative overflow-hidden">
      <div class="xt-media-container bg-gray-200 w-full h-full absolute">
        <div class="xt-media-inner">
          <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
        </div>
      </div>
      <div class="flex relative min-h-screen">
        <div
          class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:mr-0 max-w-2xl text-white xt-links-inverse text-center md:text-right group"
        >
          <h2 class="xt-h1">Lorem ipsum dolor sit amet</h2>
          <h3 class="xt-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
          </h3>
          <a href="#" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"> Lorem ipsum </a>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}

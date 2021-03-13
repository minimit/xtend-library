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
    <div class="xt-row xt-row-6">
      <div class="w-full">
        <div class="xt-card rounded-md ${classes.cardDefault()}">
          <div class="md:xt-card-group">
            <div class="${classes.cardMd()} md:w-7/12">
              <div class="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div class="border-t md:w-5/12 md:border-t-0 md:border-l border-solid border-gray-500">
              <div class="${classes.cardSm()}">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                  turpis.
                </p>
              </div>
              <div class="${classes.cardMd()} border-t border-solid border-gray-500">
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
  </div>
`

export const object = {
  html: html,
}

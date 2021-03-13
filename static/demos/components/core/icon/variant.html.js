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
    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Text</div>

    ${classes.iconSearch()}

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Primary</div>

    ${classes.iconSearch({ classes: 'text-primary-50' })} ${classes.iconSearch({ classes: 'text-primary-100' })}
    ${classes.iconSearch({ classes: 'text-primary-200' })} ${classes.iconSearch({ classes: 'text-primary-300' })}
    ${classes.iconSearch({ classes: 'text-primary-400' })} ${classes.iconSearch({ classes: 'text-primary-500' })}
    ${classes.iconSearch({ classes: 'text-primary-600' })} ${classes.iconSearch({ classes: 'text-primary-700' })}
    ${classes.iconSearch({ classes: 'text-primary-800' })} ${classes.iconSearch({ classes: 'text-primary-900' })}

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Black opacity</div>

    ${classes.iconSearch({ classes: 'text-black text-opacity-0' })}
    ${classes.iconSearch({ classes: 'text-black text-opacity-25' })}
    ${classes.iconSearch({ classes: 'text-black text-opacity-50' })}
    ${classes.iconSearch({ classes: 'text-black text-opacity-75' })}
    ${classes.iconSearch({ classes: 'text-black text-opacity-100' })}
  </div>
`

export const object = {
  html: html,
}

import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardScroll = require('components/snippets/classes/card-scroll').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="jumptocontent toggle xt-fixed">
  <a href="#jumptocontent" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
    Jump to content
  </a>
</div>

<div class="row row-6">

  <div class="w-full">
    <div class="card rounded-md ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-full">
    <div class="card rounded-md ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-full" id="jumptocontent">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>
    <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>
    <p>Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis ac at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim dui, tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam vitae condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum tincidunt at vitae ante.</p>
    <p>Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula, vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus, vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.</p>
    <p>Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula et nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In bibendum orci vel molestie vulputate.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>
    <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>
    <p>Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis ac at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim dui, tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam vitae condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum tincidunt at vitae ante.</p>
    <p>Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula, vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus, vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.</p>
    <p>Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula et nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In bibendum orci vel molestie vulputate.</p>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page

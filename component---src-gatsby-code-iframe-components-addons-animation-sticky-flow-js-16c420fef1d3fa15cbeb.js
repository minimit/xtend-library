(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2iEb":function(e,n,i){"use strict";i.r(n),n.default=function(){return"text-black links-default bg-gray-200"}},"33yf":function(e,n,i){(function(e){function i(e,n){for(var i=0,t=e.length-1;t>=0;t--){var r=e[t];"."===r?e.splice(t,1):".."===r?(e.splice(t,1),i++):i&&(e.splice(t,1),i--)}if(n)for(;i--;i)e.unshift("..");return e}function t(e,n){if(e.filter)return e.filter(n);for(var i=[],t=0;t<e.length;t++)n(e[t],t,e)&&i.push(e[t]);return i}n.resolve=function(){for(var n="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var a=s>=0?arguments[s]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,r="/"===a.charAt(0))}return(r?"/":"")+(n=i(t(n.split("/"),(function(e){return!!e})),!r).join("/"))||"."},n.normalize=function(e){var s=n.isAbsolute(e),a="/"===r(e,-1);return(e=i(t(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&a&&(e+="/"),(s?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(t(e,(function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,i){function t(e){for(var n=0;n<e.length&&""===e[n];n++);for(var i=e.length-1;i>=0&&""===e[i];i--);return n>i?[]:e.slice(n,i-n+1)}e=n.resolve(e).substr(1),i=n.resolve(i).substr(1);for(var r=t(e.split("/")),s=t(i.split("/")),a=Math.min(r.length,s.length),o=a,l=0;l<a;l++)if(r[l]!==s[l]){o=l;break}var c=[];for(l=o;l<r.length;l++)c.push("..");return(c=c.concat(s.slice(o))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var n=e.charCodeAt(0),i=47===n,t=-1,r=!0,s=e.length-1;s>=1;--s)if(47===(n=e.charCodeAt(s))){if(!r){t=s;break}}else r=!1;return-1===t?i?"/":".":i&&1===t?"/":e.slice(0,t)},n.basename=function(e,n){var i=function(e){"string"!=typeof e&&(e+="");var n,i=0,t=-1,r=!0;for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!r){i=n+1;break}}else-1===t&&(r=!1,t=n+1);return-1===t?"":e.slice(i,t)}(e);return n&&i.substr(-1*n.length)===n&&(i=i.substr(0,i.length-n.length)),i},n.extname=function(e){"string"!=typeof e&&(e+="");for(var n=-1,i=0,t=-1,r=!0,s=0,a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47!==o)-1===t&&(r=!1,t=a+1),46===o?-1===n?n=a:1!==s&&(s=1):-1!==n&&(s=-1);else if(!r){i=a+1;break}}return-1===n||-1===t||0===s||1===s&&n===t-1&&n===i+1?"":e.slice(n,t)};var r="b"==="ab".substr(-1)?function(e,n,i){return e.substr(n,i)}:function(e,n,i){return n<0&&(n=e.length+n),e.substr(n,i)}}).call(this,i("8oxB"))},IRUh:function(e,n,i){"use strict";i.d(n,"a",(function(){return c}));var t=i("dI71"),r=i("q1tI"),s=i.n(r),a=i("iyGq"),o=i("KQm4"),l=(i("IXSf"),function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.demo,t=e.children;if("undefined"!=typeof window){var r,a=i("Zz1u").Xt,l=i("a2uN").makeDocument,c="gatsby_iframe-inside";n.container&&(c+=" gatsby_iframe-container"),(r=document.documentElement.classList).add.apply(r,Object(o.a)(c.split(" "))),document.documentElement.setAttribute("id","iframe--"+n.name);a.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,n.htmlSource,n.jsxSource,n.cssSource,n.jsSource),l()}))}return s.a.createElement(s.a.Fragment,null,t)},n}(s.a.Component)),c=function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){var e=this.props.demo,n={title:"Demo",description:"Demo"};return e.path=("/demos/"+e.dirs.join("/")+"/"+e.name).replace("/iframe","").replace("src/gatsby/code/",""),e.cssSource=e.path+".css",e.jsSource=e.path+".js",s.a.createElement(l,{demo:e},s.a.createElement(a.a,{title:n.title,description:n.description}),s.a.createElement("div",{id:"body-outer"},s.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:e.htmlSource}})))},n}(s.a.Component)},KrDi:function(e,n,i){"use strict";i.r(n),function(e){i.d(n,"demo",(function(){return v}));var t=i("dI71"),r=i("q1tI"),s=i.n(r),a=i("33yf"),o=i.n(a),l=i("IRUh"),c=i("sf5o").default,u=i("2iEb").default,d=i("Yg7f").default,m=e.replace(/\\/g,"/"),f=o.a.dirname(m).split("/"),v={container:!1,name:o.a.basename(m,".js"),dirs:f};v.htmlSource='\n\n<header class="site_header">\n  <div class="card card-sm '+d()+'">\n    <div class="h4">Header</div>\n  </div>\n</header>\n\n<main class="site_main">\n\n  <div class="container">\n    <div class="row row-4 lg:row-6 items-stretch">\n\n      <div class="w-full md:w-6/12 lg:w-7/12">\n        <div class="relative pt-6 md:py-6">\n\n          <div class="list flex-col">\n\n            <div class="w-full">\n              <div class="media-container">\n                <div class="media-inner relative">\n                  <img class="media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>\n                </div>\n              </div>\n            </div>\n\n            <div class="w-full">\n              <div class="media-container">\n                <div class="media-inner relative">\n                  <img class="media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>\n                </div>\n              </div>\n            </div>\n\n            <div class="w-full">\n              <div class="media-container">\n                <div class="media-inner relative">\n                  <img class="media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>\n                </div>\n              </div>\n            </div>\n\n            <div class="w-full">\n              <div class="media-container">\n                <div class="media-inner relative">\n                  <img class="media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>\n                </div>\n              </div>\n            </div>\n\n            <div class="w-full">\n              <div class="media-container">\n                <div class="media-inner relative">\n                  <img class="media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n\n      <div class="w-full md:w-6/12 lg:w-5/12">\n        <div class="sticky-flow-filler pointer-events-none absolute md:relative"></div>\n        <div class="md:py-12 md:sticky sticky-flow">\n\n          <h1>\n            Lorem ipsum dolor sit amet\n          </h1>\n\n          <div class="h5 mb-6">\n            €&nbsp;229,00\n          </div>\n\n          <a href="#" class="btn btn-lg rounded-md mb-6 '+c()+'">\n            Add to cart\n          </a>\n\n          <div class="text-lg text-opacity-75">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>\n            <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</main>\n\n<footer class="site_footer">\n  <div class="card h-32 card-sm '+u()+'">\n    <div class="h4">Footer</div>\n  </div>\n</footer>\n\n</div>\n';var p=function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){return s.a.createElement(l.a,{demo:v})},n}(s.a.Component);n.default=p}.call(this,"src/gatsby/code/iframe/components/addons/animation/sticky-flow.js")},Yg7f:function(e,n,i){"use strict";i.r(n),n.default=function(){return"text-white links-inverse bg-accent-500"}}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-addons-animation-sticky-flow-js-16c420fef1d3fa15cbeb.js.map
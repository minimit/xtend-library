(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"33yf":function(e,n,t){(function(e){function t(e,n){for(var t=0,i=e.length-1;i>=0;i--){var s=e[i];"."===s?e.splice(i,1):".."===s?(e.splice(i,1),t++):t&&(e.splice(i,1),t--)}if(n)for(;t--;t)e.unshift("..");return e}function i(e,n){if(e.filter)return e.filter(n);for(var t=[],i=0;i<e.length;i++)n(e[i],i,e)&&t.push(e[i]);return t}n.resolve=function(){for(var n="",s=!1,r=arguments.length-1;r>=-1&&!s;r--){var a=r>=0?arguments[r]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,s="/"===a.charAt(0))}return(s?"/":"")+(n=t(i(n.split("/"),(function(e){return!!e})),!s).join("/"))||"."},n.normalize=function(e){var r=n.isAbsolute(e),a="/"===s(e,-1);return(e=t(i(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(i(e,(function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,t){function i(e){for(var n=0;n<e.length&&""===e[n];n++);for(var t=e.length-1;t>=0&&""===e[t];t--);return n>t?[]:e.slice(n,t-n+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var s=i(e.split("/")),r=i(t.split("/")),a=Math.min(s.length,r.length),l=a,o=0;o<a;o++)if(s[o]!==r[o]){l=o;break}var d=[];for(o=l;o<s.length;o++)d.push("..");return(d=d.concat(r.slice(l))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var n=e.charCodeAt(0),t=47===n,i=-1,s=!0,r=e.length-1;r>=1;--r)if(47===(n=e.charCodeAt(r))){if(!s){i=r;break}}else s=!1;return-1===i?t?"/":".":t&&1===i?"/":e.slice(0,i)},n.basename=function(e,n){var t=function(e){"string"!=typeof e&&(e+="");var n,t=0,i=-1,s=!0;for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){t=n+1;break}}else-1===i&&(s=!1,i=n+1);return-1===i?"":e.slice(t,i)}(e);return n&&t.substr(-1*n.length)===n&&(t=t.substr(0,t.length-n.length)),t},n.extname=function(e){"string"!=typeof e&&(e+="");for(var n=-1,t=0,i=-1,s=!0,r=0,a=e.length-1;a>=0;--a){var l=e.charCodeAt(a);if(47!==l)-1===i&&(s=!1,i=a+1),46===l?-1===n?n=a:1!==r&&(r=1):-1!==n&&(r=-1);else if(!s){t=a+1;break}}return-1===n||-1===i||0===r||1===r&&n===i-1&&n===t+1?"":e.slice(n,i)};var s="b"==="ab".substr(-1)?function(e,n,t){return e.substr(n,t)}:function(e,n,t){return n<0&&(n=e.length+n),e.substr(n,t)}}).call(this,t("8oxB"))},IRUh:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var i=t("q1tI"),s=t.n(i),r=t("iyGq"),a=t("KQm4");t("yLb1");class l extends s.a.Component{render(){var e=this.props,n=e.demo,i=e.children;if("undefined"!=typeof window){var r;t("RoSU");var l=t("Zz1u").Xt,o="gatsby_iframe-inside";n.container&&(o+=" gatsby_iframe-container"),(r=document.documentElement.classList).add.apply(r,Object(a.a)(o.split(" "))),document.documentElement.setAttribute("id","iframe--"+n.name);l.ready(()=>{window.self!==window.top&&window.parent.initIframe(window.name,n.htmlSource,n.jsxSource,n.cssSource,n.jsSource)})}return s.a.createElement(s.a.Fragment,null,i)}}class o extends s.a.Component{render(){var e=this.props.demo,n={title:"Demo",description:"Demo"};return e.path=("/demos/"+e.dirs.join("/")+"/"+e.name).replace("/iframe","").replace("src/gatsby/code/",""),e.cssSource=e.path+".css",e.jsSource=e.path+".js",s.a.createElement(l,{demo:e},s.a.createElement(r.a,{title:n.title,description:n.description}),s.a.createElement("div",{id:"body-outer"},s.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:e.htmlSource}})))}}},zrAe:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"demo",(function(){return m}));var i=t("q1tI"),s=t.n(i),r=t("33yf"),a=t.n(r),l=t("IRUh"),o="px-0 text-xs font-sans font-semibold leading-snug tracking-wider uppercase",d="absolute w-4 border-t border-current opacity-50",c=e.replace(/\\/g,"/"),u=a.a.dirname(c).split("/"),m={container:!1,name:a.a.basename(c,".js"),dirs:u};m.htmlSource='\n<div class="featured inline-block w-full bg-primary-900 text-white xt-links-inverse">\n\n  <a href="#" class="featured-item block my-28">\n    <div class="container">\n      <div class="xt-row items-center">\n        <div class="w-full md:w-5/12 z-0">\n          <div class="xt-media-container bg-gray-200 xt-ratio-75 overflow-hidden">\n            <div class="xt-media-inner">\n              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n            </div>\n          </div>\n        </div>\n        <div class="w-full md:w-7/12 z-10">\n          <div class="featured-content pt-16 md:pt-0 md:pl-12">\n            <div class="xt-h1 mb-6 md:-ml-32">\n              Lorem ipsum\n            </div>\n            <div class="leading-loose">\n              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n              <div class="xt-button button--line '+o+'">\n                <span class="button--line-design '+d+'"></span>\n                <span class="button--line-content pl-8">\n                  Discover\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </a>\n\n  <a href="#" class="featured-item block my-28">\n    <div class="container">\n      <div class="xt-row items-center">\n        <div class="w-full md:w-5/12 z-0 sm:order-2">\n          <div class="xt-media-container bg-gray-200 xt-ratio-75 overflow-hidden">\n            <div class="xt-media-inner">\n              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n            </div>\n          </div>\n        </div>\n        <div class="w-full md:w-7/12 z-10 sm:order-1">\n          <div class="featured-content pt-16 md:pt-0 md:pr-12">\n            <div class="xt-h1 mb-6">\n              Dolor sit amet\n            </div>\n            <div class="leading-loose md:-mr-32 md:pl-12">\n              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n              <div class="xt-button button--line '+o+'">\n                <span class="button--line-design '+d+'"></span>\n                <span class="button--line-content pl-8">\n                  Discover\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </a>\n\n  <a href="#" class="featured-item block my-28">\n    <div class="container">\n      <div class="xt-row items-center">\n        <div class="w-full md:w-5/12 z-0">\n          <div class="xt-media-container bg-gray-200 xt-ratio-75 overflow-hidden">\n            <div class="xt-media-inner">\n              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n            </div>\n          </div>\n        </div>\n        <div class="w-full md:w-7/12 z-10">\n          <div class="featured-content pt-16 md:pt-0 md:pl-12">\n            <div class="xt-h1 mb-6 md:-ml-32">\n              Consectetur adipiscing elit\n            </div>\n            <div class="leading-loose">\n              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n              <div class="xt-button button--line '+o+'">\n                <span class="button--line-design '+d+'"></span>\n                <span class="button--line-content pl-8">\n                  Discover\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </a>\n\n</div>\n\n<div class="featured inline-block w-full bg-white">\n\n  <a href="#" class="featured-item block my-28">\n    <div class="container">\n      <div class="xt-row items-center">\n        <div class="w-full md:w-5/12 z-0 sm:order-2">\n          <div class="xt-media-container bg-gray-200 xt-ratio-75 overflow-hidden">\n            <div class="xt-media-inner">\n              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n            </div>\n          </div>\n        </div>\n        <div class="w-full md:w-7/12 z-10">\n          <div class="featured-content pt-16 md:pt-0 md:pr-12 md:text-right sm:order-1">\n            <div class="xt-h1 mb-6 md:-mr-32">\n              Lorem ipsum\n            </div>\n            <div class="leading-loose">\n              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n              <div class="xt-button button--line '+o+'">\n                <span class="button--line-design '+d+'"></span>\n                <span class="button--line-content pl-8">\n                  Discover\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </a>\n\n</div>\n';class v extends s.a.Component{render(){return s.a.createElement(l.a,{demo:m})}}n.default=v}.call(this,"src/gatsby/code/iframe/themes/featured/blocks-featured-v1.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-themes-featured-blocks-featured-v-1-js-4dfb214d7bce38b1ef48.js.map
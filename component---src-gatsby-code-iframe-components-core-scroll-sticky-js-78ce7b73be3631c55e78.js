(window.webpackJsonp=window.webpackJsonp||[]).push([[40,47,48,50],{"33yf":function(t,e,i){(function(t){function i(t,e){for(var i=0,r=t.length-1;r>=0;r--){var n=t[r];"."===n?t.splice(r,1):".."===n?(t.splice(r,1),i++):i&&(t.splice(r,1),i--)}if(e)for(;i--;i)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var i=[],r=0;r<t.length;r++)e(t[r],r,t)&&i.push(t[r]);return i}e.resolve=function(){for(var e="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,n="/"===a.charAt(0))}return(n?"/":"")+(e=i(r(e.split("/"),(function(t){return!!t})),!n).join("/"))||"."},e.normalize=function(t){var o=e.isAbsolute(t),a="/"===n(t,-1);return(t=i(r(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&a&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,i){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var i=t.length-1;i>=0&&""===t[i];i--);return e>i?[]:t.slice(e,i-e+1)}t=e.resolve(t).substr(1),i=e.resolve(i).substr(1);for(var n=r(t.split("/")),o=r(i.split("/")),a=Math.min(n.length,o.length),s=a,l=0;l<a;l++)if(n[l]!==o[l]){s=l;break}var c=[];for(l=s;l<n.length;l++)c.push("..");return(c=c.concat(o.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),i=47===e,r=-1,n=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!n){r=o;break}}else n=!1;return-1===r?i?"/":".":i&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var i=function(t){"string"!=typeof t&&(t+="");var e,i=0,r=-1,n=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!n){i=e+1;break}}else-1===r&&(n=!1,r=e+1);return-1===r?"":t.slice(i,r)}(t);return e&&i.substr(-1*e.length)===e&&(i=i.substr(0,i.length-e.length)),i},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,i=0,r=-1,n=!0,o=0,a=t.length-1;a>=0;--a){var s=t.charCodeAt(a);if(47!==s)-1===r&&(n=!1,r=a+1),46===s?-1===e?e=a:1!==o&&(o=1):-1!==e&&(o=-1);else if(!n){i=a+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===i+1?"":t.slice(e,r)};var n="b"==="ab".substr(-1)?function(t,e,i){return t.substr(e,i)}:function(t,e,i){return e<0&&(e=t.length+e),t.substr(e,i)}}).call(this,i("8oxB"))},"8l/W":function(t,e,i){"use strict";i.r(e),function(t){i.d(e,"demo",(function(){return u}));var r=i("q1tI"),n=i.n(r),o=i("33yf"),a=i.n(o),s=i("IRUh"),l=i("Rj+q").classes,c=t.replace(/\\/g,"/"),d=a.a.dirname(c).split("/"),u={container:!1,name:a.a.basename(c,".js"),dirs:d};u.htmlSource='\n<div class="xt-card '+l.cardSm()+" "+l.cardDefault()+' demo--sticky-hide-content">\n  <div class="xt-h4">Lorem ipsum</div>\n  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>\n  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n</div>\n\n<div class="demo--sticky-top xt-sticky">\n  <div class="xt-card '+l.cardSm()+" "+l.cardPrimary()+'">\n    <div class="xt-h4">Top</div>\n  </div>\n</div>\n\n<div class="xt-card '+l.cardSm()+" "+l.cardDefault()+' demo--sticky-hide-content">\n  <div class="xt-h4">Lorem ipsum</div>\n  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>\n  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n</div>\n\n<br><br><br><br><br><br><br>\n<br><br><br><br><br><br><br>\n\n<div class="xt-card '+l.cardSm()+" "+l.cardDefault()+' demo--sticky-hide-content">\n  <div class="xt-h4">Lorem ipsum</div>\n  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>\n  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n</div>\n\n<div class="demo--sticky-bottom xt-sticky">\n  <div class="xt-card '+l.cardSm()+" "+l.cardPrimary()+'">\n    <div class="xt-h4">Bottom</div>\n  </div>\n</div>\n\n<div class="xt-card '+l.cardSm()+" "+l.cardDefault()+' demo--sticky-hide-content">\n  <div class="xt-h4">Lorem ipsum</div>\n  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>\n  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n</div>\n';class g extends n.a.Component{render(){return n.a.createElement(s.a,{demo:u})}}e.default=g}.call(this,"src/gatsby/code/iframe/components/core/scroll/sticky.js")},IRUh:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var r=i("q1tI"),n=i.n(r),o=i("iyGq"),a=i("KQm4");i("yLb1");class s extends n.a.Component{render(){var t=this.props,e=t.demo,r=t.children;if("undefined"!=typeof window){var o;i("RoSU");var s=i("Zz1u").Xt,l="gatsby_iframe-inside";e.container&&(l+=" gatsby_iframe-container"),(o=document.documentElement.classList).add.apply(o,Object(a.a)(l.split(" "))),document.documentElement.setAttribute("id","iframe--"+e.name);s.ready(()=>{window.self!==window.top&&window.parent.initIframe(window.name,e.htmlSource,e.jsxSource,e.cssSource,e.jsSource)})}return n.a.createElement(n.a.Fragment,null,r)}}class l extends n.a.Component{render(){var t=this.props.demo,e={title:"Demo",description:"Demo"};return t.path=("/demos/"+t.dirs.join("/")+"/"+t.name).replace("/iframe","").replace("src/gatsby/code/",""),t.cssSource=t.path+".css",t.jsSource=t.path+".js",n.a.createElement(s,{demo:t},n.a.createElement(o.a,{title:e.title,description:e.description}),n.a.createElement("div",{id:"body-outer"},n.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:t.htmlSource}})))}}},"Rj+q":function(t,e,i){"use strict";i.r(e),i.d(e,"classes",(function(){return r}));var r={badgeSm:()=>"text-3xs py-1 px-2",badgeMd:()=>"text-xs py-2 px-3.5",badgeLg:()=>"text-base py-2.5 px-4",buttonSm:()=>"text-3xs py-1.5 px-2.5",buttonMd:()=>"text-xs py-2 px-3.5",buttonLg:()=>"text-base py-2.5 px-4",tooltipSm:()=>"text-3xs py-1 px-2",tooltipMd:()=>"text-xs py-2 px-3.5",tooltipLg:()=>"text-base py-2.5 px-4",cardSm:()=>"text-sm py-6 px-7",cardMd:()=>"text-base py-8 px-9",cardLg:()=>"text-base py-8 px-9 md:text-lg md:py-9 md:px-10",badgeDefaultInteractive:()=>"text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition",badgePrimaryInteractive:()=>"text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-500 active:bg-primary-600 transition",badgeDefault:()=>"text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200",badgePrimary:()=>"text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500",buttonCloseOutside:()=>"transition md:text-white md:bg-primary-500 md:hover:bg-primary-600 md:active:bg-primary-700",buttonDefaultDrop:()=>"w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition",buttonDefaultGroup:()=>"text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 group-hover:bg-gray-300 active:bg-gray-400 group-active:bg-gray-400",buttonDefault:()=>"text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition",buttonPrimaryDrop:()=>"px-6 w-full text-white font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition",buttonPrimaryGroup:()=>"text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 group-hover:bg-primary-600 active:bg-primary-700 group-active:bg-primary-700",buttonPrimary:()=>"text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition",buttonText:()=>"font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-60 active:text-opacity-100 transition",cardBlack:()=>"font-semibold text-white xt-links-inverse bg-black",cardDefaultFullInteractive:()=>"text-black xt-links-default transform transition hover:bg-gray-200 active:bg-gray-300",cardDefaultFull:()=>"text-black xt-links-default",cardDefaultInteractive:()=>"text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400",cardDefault:()=>"text-black xt-links-default bg-gray-200",cardPrimaryFullInteractive:()=>"text-black xt-links-default transform transition hover:text-white hover:bg-primary-500 active:text-white active:bg-primary-600",cardPrimaryFull:()=>"text-primary-600",cardPrimaryInteractive:()=>"text-white xt-links-inverse transform transition bg-primary-500 hover:bg-primary-600 active:bg-primary-700",cardPrimary:()=>"text-white xt-links-inverse bg-primary-500",cardSlide:()=>"text-base p-8 text-center text-black xt-links-default bg-gray-200",cardToggle:()=>"text-sm p-6 text-black xt-links-default bg-gray-200",cardWhite:()=>"text-black xt-links-default bg-white",checkDefault:()=>"border text-primary-500 border-gray-400 bg-gray-200 transition-all",checkPrimary:()=>"border text-primary-400 border-primary-600 bg-primary-400 transition-all",radioDefault:()=>"border text-primary-500 border-gray-400 bg-gray-200 transition-all",radioPrimary:()=>"border text-primary-400 border-primary-600 bg-primary-400 transition-all",switchDefault:()=>"border text-primary-500 border-gray-400 bg-gray-200 transition-all",switchPrimary:()=>"border text-primary-400 border-primary-600 bg-primary-400 transition-all",inputDefault:()=>"py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition",inputPrimary:()=>"py-2.5 px-4 text-white placeholder-white placeholder-opacity-50 border border-primary-600 bg-primary-600 focus:bg-primary-700",inputUnderline:()=>"py-2.5 text-black placeholder-black placeholder-opacity-50 border-b-2 border-gray-200 bg-transparent focus:border-gray-300 transition",labelDefault:()=>"text-black text-opacity-75 font-semibold",labelPrimary:()=>"text-white text-opacity-75",note:()=>"text-black text-opacity-50 text-xs leading-snug",h1Display:()=>"mt-7 mb-5 xt-my-auto font-sans font-black leading-none tracking-tight normal-case text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none",h1:()=>"mt-7 mb-5 xt-my-auto font-sans font-bold leading-none tracking-tight normal-case text-3xl md:text-4xl md:leading-none lg:text-5xl lg:leading-none",h2:()=>"mt-6 mb-4 xt-my-auto font-sans font-bold leading-none tracking-tight normal-case text-2xl md:text-3xl md:leading-none lg:text-4xl lg:leading-none",h3:()=>"mt-5 mb-3 xt-my-auto font-sans font-bold leading-none tracking-tight normal-case text-xl md:text-2xl md:leading-none lg:text-3xl lg:leading-none",h4:()=>"mt-5 mb-3 xt-my-auto font-sans font-bold leading-tight tracking-tight normal-case text-xl lg:text-2xl lg:leading-tight",h5:()=>"mt-5 mb-3 xt-my-auto font-sans font-bold leading-tight tracking-tight normal-case text-xl",h6:()=>"mt-5 mb-3 xt-my-auto font-sans font-bold leading-tight tracking-tight normal-case text-lg",hBlock:()=>"my-6 xt-my-auto py-4 px-6",iconX:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'},iconSearch:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>'},iconArrowLeft:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>'},iconArrowRight:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'},iconArrowUp:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>'},iconArrowDown:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>'},iconChevronLeft:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>'},iconChevronRight:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>'},iconChevronUp:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>'},iconChevronDown:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>'},iconLocate:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'},iconTwitter:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>'},iconPackage:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'},iconGithub:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'},iconLink:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'},iconCode:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'},iconMaximize:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>'},iconExternal:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'},iconCopy:function(t){var e=(void 0===t?{}:t).classes,i=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(i=i?" "+i:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'},spinner:t=>{var e=t.classes,i=void 0===e?null:e,r=t.dimension,n=void 0===r?120:r,o=t.radius,a=void 0===o?100:o,s=t.dash,l=void 0===s?628:s;return'<svg viewBox="0 0 '+2*n+" "+2*n+'" class="absolute" preserveAspectRatio="xMinYMin meet"><circle class="stroke-current origin-center opacity-25" fill="none" stroke-width="30" cx="'+n+'" cy="'+n+'" r="'+a+'" stroke-dasharray="'+l+'" stroke-dashoffset="0" pathLength="'+l+'"/></svg><svg viewBox="0 0 '+2*n+" "+2*n+'"><circle class="stroke-current origin-center relative'+(i=i?" "+i:"")+'" fill="none" stroke-width="30" cx="'+n+'" cy="'+n+'" r="'+a+'" stroke-dasharray="'+l+'" stroke-dashoffset="'+l+'" pathLength="'+l+'"/></svg>'}}}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-core-scroll-sticky-js-78ce7b73be3631c55e78.js.map
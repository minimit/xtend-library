!function(){return function t(e,i,n){function r(a,l){if(!i[a]){if(!e[a]){var s="function"==typeof require&&require;if(!l&&s)return s(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[a]={exports:{}};e[a][0].call(u.exports,function(t){return r(e[a][1][t]||t)},u,u.exports,t,e,i,n)}return i[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)r(n[a]);return r}}()({1:[function(t,e,i){
/*! xtend v0.4.11 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */
"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.XtUtil=void 0;var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(n=(a=l.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw o}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=t("./xtend"),o={currents:{},initAll:function(){var t=!0,e=!1,i=void 0;try{for(var n,o=document.querySelectorAll("[data-xt-toggle]")[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var a=n.value;new r.XtToggle(a)}}catch(t){e=!0,i=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw i}}var l=!0,s=!1,c=void 0;try{for(var u,f=document.querySelectorAll("[data-xt-drop]")[Symbol.iterator]();!(l=(u=f.next()).done);l=!0){var d=u.value;new r.XtDrop(d)}}catch(t){s=!0,c=t}finally{try{!l&&f.return&&f.return()}finally{if(s)throw c}}var y=!0,v=!1,h=void 0;try{for(var p,m=document.querySelectorAll("[data-xt-overlay]")[Symbol.iterator]();!(y=(p=m.next()).done);y=!0){var g=p.value;new r.XtOverlay(g)}}catch(t){v=!0,h=t}finally{try{!y&&m.return&&m.return()}finally{if(v)throw h}}var x=!0,w=!1,b=void 0;try{for(var O,S=document.querySelectorAll("[data-xt-sticky]")[Symbol.iterator]();!(x=(O=S.next()).done);x=!0){var A=O.value;new r.XtSticky(A)}}catch(t){w=!0,b=t}finally{try{!x&&S.return&&S.return()}finally{if(w)throw b}}}};o.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},o.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){window.clearTimeout(id)},o.scrollbarWidth=function(){var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var i=document.createElement("div");i.style.width="100%",t.appendChild(i);var n=i.offsetWidth;return t.parentNode.removeChild(t),e-n},o.getUniqueID=function(){return o.uid=void 0!==o.uid?o.uid:0,"unique-id-"+o.uid++},o.merge=function(t){var e={},i=!0,r=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(i=(a=l.next()).done);i=!0){var s=a.value,c=!0,u=!1,f=void 0;try{for(var d,y=Object.entries(s)[Symbol.iterator]();!(c=(d=y.next()).done);c=!0){var v=n(d.value,2),h=v[0],p=v[1];e[h]=p}}catch(t){u=!0,f=t}finally{try{!c&&y.return&&y.return()}finally{if(u)throw f}}}}catch(t){r=!0,o=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw o}}return e},o.arrSingle=function(t){if(void 0===t.length){var e=new Array(1);return e[0]=t,e}return t},o.createElement=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},o.parents=function(t,e){for(var i=[];t=t.parentElement.closest(e);)i.push(t);return i},o.xtUtilOn=function(t,e,i){this.namespaces||(this.namespaces={}),this.namespaces[t]=e;var n=i||!1;return this.addEventListener(t.split(".")[0],e,n),this},o.xtUtilOff=function(t){return this.namespaces&&(this.removeEventListener(t.split(".")[0],this.namespaces[t]),delete this.namespaces[t]),this},window.xtUtilOn=Element.prototype.xtUtilOn=o.xtUtilOn,window.xtUtilOff=Element.prototype.xtUtilOff=o.xtUtilOff,window.XtUtil=o,i.XtUtil=o,function(t,e){try{t.querySelector(":scope body")}catch(o){for(var i=["querySelector","querySelectorAll"],n=function(){var n=i[r],o=e[n];e[n]=function(e){if(/(^|,)\s*:scope/.test(e)){var i=this.id;this.id="ID_"+Date.now(),e=e.replace(/((^|,)\s*):scope/g,"$1#"+this.id);var r=t[n](e);return this.id=i,r}return o.call(this,e)}},r=0;r<i.length;r++)n()}}(window.document,Element.prototype)},{"./xtend":2}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.XtSticky=i.XtOverlay=i.XtDrop=i.XtToggle=i.Xt=void 0;var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=t("./xtend-utils");function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=function(){function t(e,i,n){s(this,t),this.object=e,this.defaults=this.constructor.defaults,this.options=r.XtUtil.merge([this.defaults,i||{}]);var o=this.object.getAttribute(n);this.options=r.XtUtil.merge([this.options,o?JSON.parse(o):{}]),this.options.class&&(this.options.classes=[].concat(l(this.options.classes),l(this.options.class.split(" ")))),this.initSetup(),this.initScope()}return n(t,[{key:"initSetup",value:function(){var t=this.options;t.targets&&-1!==t.targets.indexOf("#")?(this.mode="all",this.container=document,t.max=1/0,this.namespace=t.targets.toString()+"-"+t.classes.toString()):(this.mode="unique",this.container=this.object,this.namespace=r.XtUtil.getUniqueID()),this.namespace=this.namespace.replace(/\W+/g,""),this.getCurrents()||this.setCurrents([])}},{key:"initScope",value:function(){var t=this,e=this.options;if(this.elements=[],e.elements&&(this.elements=r.XtUtil.arrSingle(this.container.querySelectorAll(e.elements))),this.elements.length||(this.elements=r.XtUtil.arrSingle(this.object),r.XtUtil.requestAnimationFrame.call(window,function(){t.elements=r.XtUtil.arrSingle(document.querySelectorAll("[data-xt-namespace="+t.namespace+"]"))})),e.targets){var i=Array.from(this.container.querySelectorAll(e.targets));i=i.filter(function(t){return!r.XtUtil.parents(t,e.targets).length}),this.targets=r.XtUtil.arrSingle(i)}if(e.appendTo){var n=document.querySelectorAll(e.appendTo);n.length&&this.targets.forEach(function(t){n[0].appendChild(t)})}var o=!0,a=!1,s=void 0;try{for(var c,u=this.elements[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){c.value.setAttribute("data-xt-namespace",t.namespace)}}catch(t){a=!0,s=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw s}}r.XtUtil.requestAnimationFrame.call(window,function(){if(t.elements.length){var i=!0,n=!1,r=void 0;try{for(var o,a=t.elements[Symbol.iterator]();!(i=(o=a.next()).done);i=!0){var s,c=o.value;(s=c.classList).contains.apply(s,l(t.defaults.classes))&&t.eventOn(c)}}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}var u=e.min-t.getCurrents().length;if(u)for(var f=0;f<u;f++)t.eventOn(t.elements[f])}})}},{key:"getElements",value:function(t){if(!this.elements||!this.elements.length)return{all:[],single:null};if("all"===this.mode)return{all:this.elements,single:this.elements[0]};if("unique"===this.mode){var e=t.getAttribute("data-group");if(e){var i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=r.XtUtil.arrSingle(i);return{all:n,single:n[0]}}var o=t;return{all:r.XtUtil.arrSingle(o),single:o}}}},{key:"getTargets",value:function(t){if(!this.targets||!this.targets.length)return[];if("all"===this.mode)return this.targets;if("unique"===this.mode){var e=t.getAttribute("data-group"),i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=Array.from(this.targets).filter(function(t){return t.getAttribute("data-group")===e});if(e){var o=n;return r.XtUtil.arrSingle(o)}var a=n[i.findIndex(function(e){return e===t})];return r.XtUtil.arrSingle(a)}}},{key:"getCurrents",value:function(){return r.XtUtil.currents[this.namespace]}},{key:"setCurrents",value:function(t){r.XtUtil.currents[this.namespace]=t}},{key:"addCurrent",value:function(t){r.XtUtil.currents[this.namespace].push(t)}},{key:"removeCurrent",value:function(t){r.XtUtil.currents[this.namespace]=r.XtUtil.currents[this.namespace].filter(function(e){return e!==t})}},{key:"eventOn",value:function(t){var e,i=this.options;if((e=t.classList).contains.apply(e,l(this.defaults.classes)))this.eventOff(t);else{var n=this.getElements(t);this.addCurrent(n.single),this.activationOn(n.all,n,"elements");var r=this.getTargets(t);this.activationOn(r,n,"targets")}var o=this.getCurrents();o.length>i.max&&this.eventOff(o[0])}},{key:"eventOff",value:function(t){var e;if(this.options.min-this.getCurrents().length&&(e=t.classList).contains.apply(e,l(this.defaults.classes))){var i=this.getElements(t);this.removeCurrent(i.single),this.activationOff(i.all,i,"elements");var n=this.getTargets(t);this.activationOff(n,i,"targets")}}},{key:"animationClear",value:function(t){clearTimeout(parseFloat(t.getAttribute("xt-activation-animation-timeout")))}},{key:"activationOn",value:function(t,e,i){var n=this.options,r=!0,o=!1,a=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u,f=s.value;(u=f.classList).add.apply(u,l(n.classes)),f.classList.remove("out"),this.activationOnAnimate(f,i),"targets"===i&&(this.specialBackdrop(f),this.specialCenterOn(f),this.specialMiddleOn(f),this.specialCollapseOn(f),this.specialCloseOn(f,e.single),this.specialScrollbarOn())}}catch(t){o=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}}},{key:"activationOnAnimate",value:function(t,e){var i=function(t,e){t.classList.contains("collapse-height")&&(t.style.height="auto"),t.classList.contains("collapse-width")&&(t.style.width="auto")},n=this.activationTiming(t);if(this.animationClear(t),n){var r=setTimeout(function(t,e){i(t)},n,t,e);t.setAttribute("xt-activation-animation-timeout",r)}else i(t)}},{key:"activationOff",value:function(t,e,i){var n=this.options,r=!0,o=!1,a=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u,f=s.value;(u=f.classList).remove.apply(u,l(n.classes)),f.classList.add("out"),this.activationOffAnimate(f,i),"targets"===i&&(this.specialCollapseOff(f),this.specialCloseOff(f))}}catch(t){o=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}}},{key:"activationOffAnimate",value:function(t,e){var i=this,n=function(t,e){t.classList.remove("out"),i.specialScrollbarOff()},r=this.activationTiming(t);if(this.animationClear(t),r){var o=setTimeout(function(t,e){n(t)},r,t,e);t.setAttribute("xt-activation-animation-timeout",o)}else n(t)}},{key:"activationTiming",value:function(t){var e=this.options.timing,i=parseFloat(getComputedStyle(t).transitionDuration)+parseFloat(getComputedStyle(t).transitionDelay),n=parseFloat(getComputedStyle(t).animationDuration)+parseFloat(getComputedStyle(t).animationDelay);return(i||n)&&(e=Math.max(i,n)),1e3*e}},{key:"specialBackdrop",value:function(t){var e=this.options;if(e.backdrop){var i=t.querySelectorAll(e.backdrop),n=!0,o=!1,a=void 0;try{for(var l,s=i[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value,u=c.querySelectorAll(".xt-backdrop");u.length||(u=r.XtUtil.createElement('<div class="xt-backdrop"></div>'),c.append(u))}}catch(t){o=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}}}},{key:"specialCenterOn",value:function(t){if(t.classList.contains("drop-center")){var e=this.object.clientWidth,i=t.clientWidth;t.style.left=(e-i)/2+"px"}}},{key:"specialMiddleOn",value:function(t){if(t.classList.contains("drop-middle")){var e=this.object.clientHeight,i=t.clientHeight;t.style.top=(e-i)/2+"px"}}},{key:"specialCollapseOn",value:function(t){if(t.classList.contains("collapse-height")){t.classList.add("no-transition"),t.style.height="auto",t.style.paddingTop="",t.style.paddingBottom="";var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n})})}if(t.classList.contains("collapse-width")){t.style.width="auto",t.style.paddingLeft="",t.style.paddingRight="";var o=t.clientHeight+"px",a=t.style.paddingLeft,l=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.width=o,t.style.paddingLeft=a,t.style.paddingRight=l})})}}},{key:"specialCollapseOff",value:function(t){if(t.classList.contains("collapse-height")){var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0"})})}if(t.classList.contains("collapse-width")){var o=t.clientWidth+"px",a=t.style.paddingLeft,l=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width=o,t.style.paddingLeft=a,t.style.paddingRight=l,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0"})})}}},{key:"specialCloseOn",value:function(t,e){var i=this,n=this.options,o=function(t,n){r.XtUtil.requestAnimationFrame.call(window,function(){var r=!0,o=!1,a=void 0;try{for(var l,s=t[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var c=l.value;c.xtUtilOff("click.xtend"),c.xtUtilOn("click.xtend",function(t){n(t,this)&&i.eventOff(e)})}}catch(t){o=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}})};if(n.closeInside){o(t.querySelectorAll(n.closeInside),function(t,e){return t.target===e})}if(n.closeOutside){o(document.documentElement.querySelectorAll(n.closeOutside),function(e){return e.target!==t&&!t.contains(e.target)})}}},{key:"specialCloseOff",value:function(t){var e=this.options;if(e.closeInside){var i=t.querySelectorAll(e.closeInside),n=!0,r=!1,o=void 0;try{for(var a,l=i[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){a.value.xtUtilOff("click.xtend")}}catch(t){r=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw o}}}if(e.closeOutside){var s=document.documentElement.querySelectorAll(e.closeOutside),c=!0,u=!1,f=void 0;try{for(var d,y=s[Symbol.iterator]();!(c=(d=y.next()).done);c=!0){d.value.xtUtilOff("click.xtend")}}catch(t){u=!0,f=t}finally{try{!c&&y.return&&y.return()}finally{if(u)throw f}}}}},{key:"specialScrollbarOn",value:function(){if(this.options.scrollbar){var t=r.XtUtil.scrollbarWidth(),e=document.documentElement;e.style.paddingRight=t+"px",e.classList.add("xt-scrollbar");var i=document.documentElement.querySelectorAll(".xt-check-fixed > *"),n=!0,o=!1,a=void 0;try{for(var l,s=i[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value;"absolute"===(p=window.getComputedStyle(c)).position||"fixed"===p.position?c.classList.add("xt-fixed"):c.classList.remove("xt-fixed")}}catch(t){o=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}i=document.documentElement.querySelectorAll(".xt-fixed");var u=!0,f=!1,d=void 0;try{for(var y,v=function(){var e=y.value;e.style.paddingRight="",p=window.getComputedStyle(e),m=p.paddingRight,g="calc("+m+" + "+t+"px)",e.classList.add("no-transition"),e.style.paddingRight=g,r.XtUtil.requestAnimationFrame.call(window,function(){e.classList.remove("no-transition")})},h=i[Symbol.iterator]();!(u=(y=h.next()).done);u=!0){var p,m,g;v()}}catch(t){f=!0,d=t}finally{try{!u&&h.return&&h.return()}finally{if(f)throw d}}i=document.documentElement.querySelectorAll(".xt-backdrop");var x=!0,w=!1,b=void 0;try{for(var O,S=i[Symbol.iterator]();!(x=(O=S.next()).done);x=!0){O.value.style.right=t+"px"}}catch(t){w=!0,b=t}finally{try{!x&&S.return&&S.return()}finally{if(w)throw b}}}}},{key:"specialScrollbarOff",value:function(){if(this.options.scrollbar){var t=document.documentElement;t.style.paddingRight="",t.classList.remove("xt-scrollbar");var e=document.documentElement.querySelectorAll(".xt-fixed"),i=!0,n=!1,o=void 0;try{for(var a,l=function(){var t=a.value;t.classList.add("no-transition"),r.XtUtil.requestAnimationFrame.call(window,function(){t.style.paddingRight="",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition")})})},s=e[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)l()}catch(t){n=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw o}}e=document.documentElement.querySelectorAll(".xt-backdrop");var c=!0,u=!1,f=void 0;try{for(var d,y=e[Symbol.iterator]();!(c=(d=y.next()).done);c=!0){d.value.style.right=""}}catch(t){u=!0,f=t}finally{try{!c&&y.return&&y.return()}finally{if(u)throw f}}}}}]),t}();c.defaults={classes:["active"]},window.Xt=c,i.Xt=c;var u=function(t){function e(t,i){s(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-toggle"));return n.initEvents(),n}return a(e,c),n(e,[{key:"initEvents",value:function(){var t=this,e=this.options,i=!0,n=!1,r=void 0;try{for(var o,a=this.elements[Symbol.iterator]();!(i=(o=a.next()).done);i=!0){var l=o.value;e.on&&(l.xtUtilOff(e.on+".xtend"),l.xtUtilOn(e.on+".xtend",function(e){t.eventOn(this)})),e.off&&(l.xtUtilOff(e.off+".xtend"),l.xtUtilOn(e.off,function(e){t.eventOff(this)}))}}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}}}]),e}();u.defaults={elements:":scope > a, :scope > button",targets:':scope > [class^="toggle-"], :scope > [class*=" toggle-"]',classes:["active"],on:"click",min:0,max:1},window.XtToggle=u,i.XtToggle=u;var f=function(t){function e(t,i){s(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-drop"));return n.initEvents(),n}return a(e,c),n(e,[{key:"initEvents",value:function(){var t=this,e=this.options,i=!0,n=!1,r=void 0;try{for(var o,a=this.elements[Symbol.iterator]();!(i=(o=a.next()).done);i=!0){var l=o.value;e.on&&(l.xtUtilOff(e.on+".xtend"),l.xtUtilOn(e.on+".xtend",function(e){t.eventOn(this)})),e.off&&(l.xtUtilOff(e.off+".xtend"),l.xtUtilOn(e.off+".xtend",function(e){t.eventOff(this)}))}}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}}}]),e}();f.defaults={elements:":scope > a, :scope > button",targets:":scope > .drop",classes:["active"],on:"click",min:0,max:1,closeOutside:"body"},window.XtDrop=f,i.XtDrop=f;var d=function(t){function e(t,i){s(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-overlay"));return n.initEvents(),n}return a(e,c),n(e,[{key:"initEvents",value:function(){var t=this,e=this.options,i=!0,n=!1,r=void 0;try{for(var o,a=this.elements[Symbol.iterator]();!(i=(o=a.next()).done);i=!0){var l=o.value;e.on&&(l.xtUtilOff(e.on+".xtend"),l.xtUtilOn(e.on+".xtend",function(e){t.eventOn(this)})),e.off&&(l.xtUtilOff(e.off+".xtend"),l.xtUtilOn(e.off,function(e){t.eventOff(this)}))}}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}}}]),e}();d.defaults={elements:":scope > a, :scope > button",targets:":scope > .overlay-outer",classes:["active"],on:"click",min:0,max:1,appendTo:"body",backdrop:":scope > .overlay",closeInside:":scope > .overlay > .xt-backdrop, :scope > .overlay > .overlay-inner > .btn-close",scrollbar:!0},window.XtOverlay=d,i.XtOverlay=d;var y=function(t){function e(t,i){s(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-sticky"));return n.initEvents(),n}return a(e,c),n(e,[{key:"initScope",value:function(){(function t(e,i,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,i);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,i,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initScope",this).call(this),this.mode="all",this.container=r.XtUtil.parents(this.object,".xt-container"),this.container.length||(this.container=r.XtUtil.createElement('<div class="xt-container xt-check-fixed"></div>'),this.object.before(this.container),this.container.append(this.object),this.container=r.XtUtil.parents(this.object,".xt-container")),this.targets=this.container[0].querySelectorAll(".xt-clone"),this.targets&&(this.targets=this.object.cloneNode(!0),this.targets.classList.add("xt-clone"),this.container[0].append(this.targets)),this.targets=r.XtUtil.arrSingle(this.targets)}},{key:"initEvents",value:function(){var t=this,e=this.options;window.xtUtilOff(e.on+".xtend"),window.xtUtilOn(e.on,function(e){t.eventScroll(t.object)})}},{key:"eventScroll",value:function(t){var e=this,i=this.options,n=document.documentElement.scrollTop;r.XtUtil.cancelAnimationFrame.call(window,this.scrollFrame),this.scrollFrame=r.XtUtil.requestAnimationFrame.call(window,function(){var r,o,a=e.container[0].getBoundingClientRect().top,s=1/0;if(isNaN(parseFloat(i.top))){var c=document.querySelectorAll(i.top);if(c.length)a=c[0].getBoundingClientRect().top+n;else if(e.targets.length){a=e.targets[0].getBoundingClientRect().top+n}}else a=i.top;if(void 0!==i.bottom)if(isNaN(parseFloat(i.bottom))){var u=document.querySelectorAll(i.bottom);if(u.length)s=u[0].getBoundingClientRect().top+n;else if(e.targets.length){s=e.targets[0].getBoundingClientRect().top+n}}else s=i.bottom;if(n>=a&&n<s){if(!(r=t.classList).contains.apply(r,l(e.defaults.classes))){e.eventOn(t);var f=e.getElements(t),d=!0,y=!1,v=void 0;try{for(var h,p=f.all[Symbol.iterator]();!(d=(h=p.next()).done);d=!0){var m=h.value;m.classList.remove("sticky-off-top","sticky-off-bottom"),m.classList.add("xt-fixed"),e.scrollTop>n?(m.classList.remove("sticky-on-top"),m.classList.add("sticky-on-bottom")):(m.classList.add("sticky-on-top"),m.classList.remove("sticky-on-bottom"))}}catch(t){y=!0,v=t}finally{try{!d&&p.return&&p.return()}finally{if(y)throw v}}}}else if((o=t.classList).contains.apply(o,l(e.defaults.classes))){e.eventOff(t);var g=e.getElements(t),x=!0,w=!1,b=void 0;try{for(var O,S=g.all[Symbol.iterator]();!(x=(O=S.next()).done);x=!0){var A=O.value;A.classList.remove("sticky-on-top","sticky-on-bottom"),e.scrollTop>n?(A.classList.remove("sticky-off-top"),A.classList.add("sticky-off-bottom")):(A.classList.add("sticky-off-top"),A.classList.remove("sticky-off-bottom"))}}catch(t){w=!0,b=t}finally{try{!x&&S.return&&S.return()}finally{if(w)throw b}}}e.scrollTop=n})}}]),e}();y.defaults={classes:["active"],on:"scroll",min:0,max:1/0},window.XtSticky=y,i.XtSticky=y},{"./xtend-utils":1}]},{},[2]);
//# sourceMappingURL=xtend.js.map

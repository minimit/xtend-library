//////////////////////
// import
//////////////////////

import {Xt} from '../xtend';
import {Core} from '../core';

//////////////////////
// Overlay
//////////////////////

export class Overlay extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor(object, optionsJs = {}) {
    super(object, optionsJs);
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init aria
   */
  initAria() {
    super.initAria();
    let self = this;
    let options = self.options;
    // aria
    if (options.aria) {
      if (self.targets.length) {
        for (let el of self.elements) {
          let ariaEls = self.getInside(el, options.ariaControls);
          let ariaEl = ariaEls.length ? ariaEls[0] : el;
          ariaEl.setAttribute('aria-haspopup', 'dialog');
        }
        for (let tr of self.targets) {
          tr.setAttribute('role', 'dialog');
          tr.setAttribute('aria-modal', 'true');
        }
      } else {
        for (let el of self.elements) {
          el.setAttribute('role', 'dialog');
          el.setAttribute('aria-modal', 'true');
        }
      }
    }
  }

}

//////////////////////
// option
//////////////////////

Overlay.componentName = 'xt-overlay';
Overlay.optionsDefault = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > .overlay_outer",
  "on": "click",
  "min": 0,
  "max": 1,
  "instant": {"elements": true},
  "autoClose": true,
  "appendTo": "body",
  "backdrop": "targets",
  "classHtml": "xt-overlay",
  "closeInside": ".overlay_dismiss, :scope > .backdrop",
  "scrollbar": true
};

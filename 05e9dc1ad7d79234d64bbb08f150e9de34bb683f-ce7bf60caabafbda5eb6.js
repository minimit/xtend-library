(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7oMN":function(t,n,a){"use strict";a.r(n),function(t){a.d(n,"demo",(function(){return x}));var e=a("q1tI"),i=a.n(e),o=a("33yf"),s=a.n(o),l=a("IRUh"),d=a("Rj+q").classes,r="overflow-hidden transform transition ease-in-out-quint duration-500 delay-200 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0",u="transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0",c="transition-opacity ease-in-out-quint duration-300 opacity-0 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100",b="transform ease-in-out-quint duration-500 opacity-0 -translate-x-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-x-0",v=t.replace(/\\/g,"/"),p=s.a.dirname(v).split("/"),x={container:!0,name:s.a.basename(v,".js"),dirs:p};x.htmlSource='\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Button\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonDefault()+'">\n    Gray\n  </button>\n\n  <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n    Primary\n  </button>\n\n  <button type="button" class="xt-button '+d.buttonMd()+" rounded-md text-black "+d.buttonText()+'">\n    Text\n  </button>\n\n  <button type="button" class="xt-button '+d.buttonMd()+' rounded-md xt-link">\n    Link\n  </button>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Drop\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <div data-xt-drop>\n\n    <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n      list\n    </button>\n\n    <div class="xt-drop p-4 group" data-xt-duration="700">\n      <div class="xt-card w-64 py-3.5 rounded-md shadow-drop '+d.cardWhite()+" "+r+'">\n        <nav class="xt-list flex-col rounded-md '+u+'">\n          <a href="#" class="xt-button text-2xs py-1.5 px-6 '+d.buttonDefaultDrop()+'">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit\n          </a>\n          <button type="button" class="xt-button text-2xs py-1.5 px-6 '+d.buttonDefaultDrop()+'">\n            Dolor sit\n          </button>\n          <button type="button" class="xt-button text-2xs py-1.5 px-6 '+d.buttonDefaultDrop()+'">\n            Amet\n          </button>\n        </nav>\n      </div>\n      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white '+c+'"></div>\n    </div>\n\n  </div>\n\n  <div data-xt-drop>\n\n    <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n      card\n    </button>\n\n    <div class="xt-drop p-4 group" data-xt-duration="700">\n      <div class="xt-card w-64 rounded-md shadow-drop '+d.cardWhite()+" "+r+'">\n        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">\n          '+d.iconX()+'\n        </button>\n        <div class="'+d.cardSm()+" rounded-md "+u+'">\n          <div class="xt-h5">Lorem ipsum</div>\n          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis.</p>\n        </div>\n      </div>\n      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white '+c+'"></div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Tooltip\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <div data-xt-tooltip>\n\n    <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n      tooltip\n    </button>\n\n    <div class="xt-tooltip p-2 group" data-xt-duration="700">\n      <div class="relative '+d.tooltipMd()+" rounded-md shadow-tooltip "+d.cardBlack()+" "+r+'">\n        <div class="'+u+'">\n          Lorem ipsum dolor sit amet\n        </div>\n      </div>\n      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below '+c+'"></div>\n    </div>\n\n  </div>\n\n  <div data-xt-tooltip>\n\n    <div class="xt-tooltip-item">\n\n      <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n        list group\n      </button>\n\n      <div class="xt-tooltip p-2 group" data-xt-duration="700">\n        <div class="rounded-md shadow-tooltip '+d.cardWhite()+" "+r+'">\n          <form class="text-sm">\n\n            <div class="xt-list flex-nowrap max-w-sm '+u+'">\n\n              <div class="xt-list-inner flex-auto">\n                <button type="button" class="xt-button '+d.buttonMd()+" rounded-l-md "+d.buttonDefault()+'">\n                  '+d.iconSearch({classes:"text-xl -my-1"})+'\n                </button>\n                <input type="text" class="xt-input '+d.inputDefault()+'" aria-label="Search" placeholder="Seach Catalog" />\n              </div>\n\n              <button type="button" class="xt-button '+d.buttonMd()+" rounded-r-md "+d.buttonPrimary()+'">\n                Search\n              </button>\n\n            </div>\n\n          </form>\n        </div>\n        <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below '+c+'"></div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Overlay\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <div data-xt-overlay>\n    <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n      screen full\n    </button>\n    <div class="xt-overlay group" data-xt-duration="700">\n      <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>\n      <div class="xt-overlay-container p-0">\n        <button type="button" class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl '+u+'" aria-label="Close">\n          '+d.iconX()+'\n        </button>\n        <div class="xt-overlay-inner">\n\n          <div class="xt-card xt-min-h-screen items-center justify-center '+d.cardWhite()+" "+r+'">\n            <div class="xt-media-container bg-gray-200 '+u+' xt-ratio-100">\n              <div class="xt-media-inner">\n                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n      Menu\n    </button>\n\n    <div class="xt-overlay group" data-xt-duration="700">\n      <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>\n      <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">\n        <div class="xt-overlay-inner">\n\n          <div class="xt-card xt-min-h-screen '+d.cardWhite()+' overflow-hidden transform ease-in-out-quint duration-500 delay-200 opacity-0 -translate-x-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-x-0">\n            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">\n              '+d.iconX()+'\n            </button>\n            <div class="xt-list bg-primary-500 '+b+'">\n              <button type="button" class="xt-button '+d.buttonMd()+" "+d.buttonPrimary()+'">\n                Menu\n              </button>\n              <button type="button" class="xt-button '+d.buttonMd()+" "+d.buttonPrimary()+'">\n                Info\n              </button>\n              <button type="button" class="xt-button '+d.buttonMd()+" "+d.buttonPrimary()+'">\n                Account\n              </button>\n            </div>\n            <div class="xt-media-container bg-gray-200 h-48 '+b+'">\n              <div class="xt-media-inner">\n                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n            <div class="'+d.cardMd()+" "+b+'">\n              <div class="xt-h4">Lorem ipsum</div>\n              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n            </div>\n            <div class="'+d.cardSm()+" bg-gray-300 mt-auto "+b+'">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n      contact\n    </button>\n\n    <div class="xt-overlay group" data-xt-duration="700">\n      <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>\n      <div class="xt-overlay-container max-w-5xl">\n        <div class="xt-overlay-inner">\n\n          <div class="xt-card rounded-md shadow-overlay '+d.cardWhite()+" "+r+'">\n            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">\n              '+d.iconX()+'\n            </button>\n\n            <div class="md:xt-card-group rounded-md '+u+'">\n\n              <div class="'+d.cardMd()+' md:w-7/12">\n                <div class="xt-h4">\n                  Contact us\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-sm">\n                  <div class="xt-row xt-row-x-6 xt-row-y-4">\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+d.labelDefault()+'">\n                        Name\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+d.inputDefault()+'" aria-label="Name">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+d.labelDefault()+'">\n                        Surname\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+d.inputDefault()+'" aria-label="Surname">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+d.labelDefault()+'">\n                        Email\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+d.inputDefault()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+d.labelDefault()+'">\n                        Telephone\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+d.inputDefault()+'" aria-label="Telephone">\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label mb-3 '+d.labelDefault()+'">\n                        Subject\n                      </label>\n                      <select class="xt-input xt-select rounded-md '+d.inputDefault()+'" aria-label="Subject">\n                        <option selected value="">Select an option</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                      </select>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label mb-3 '+d.labelDefault()+'">\n                        Message\n                      </label>\n                      <textarea class="xt-input xt-textarea rounded-md '+d.inputDefault()+' h-24 resize-vertical" aria-label="Message"></textarea>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label-check">\n                        <input type="checkbox" class="xt-check xt-checkbox rounded-md '+d.checkDefault()+'">\n                        <span class="xt-check-content">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n                        Send\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n              <div class="md:w-5/12 flex flex-col '+u+'">\n                <div class="xt-media-container bg-gray-200 h-48 md:xt-ratio-100">\n                  <div class="xt-media-inner">\n                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n                <div class="'+d.cardMd()+' bg-gray-300 rounded-b-md md:rounded-bl-none flex-full">\n                  <p class="xt-h5">\n                    Didn\'t find what you was looking for?\n                  </p>\n                  <p>\n                      Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.\n                  </p>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n      newsletter\n    </button>\n\n    <div class="xt-overlay group" data-xt-duration="700">\n      <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>\n      <div class="xt-overlay-container max-w-5xl">\n        <div class="xt-overlay-inner">\n\n          <div class="xt-card rounded-md shadow-overlay '+d.cardWhite()+" "+r+'">\n            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">\n              '+d.iconX()+'\n            </button>\n\n            <div class="md:xt-card-group rounded-md '+u+'">\n\n              <div class="md:w-5/12 flex flex-col">\n                <div class="xt-media-container bg-gray-200 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full">\n                  <div class="xt-media-inner">\n                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n              </div>\n\n              <div class="'+d.cardMd()+' md:w-7/12">\n                <div class="xt-h4">\n                  Subscribe to our newsletter\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-sm">\n                  <div class="xt-row xt-row-x-6 xt-row-y-4">\n\n                    <div class="w-full">\n                      <label class="xt-label mb-3 '+d.labelDefault()+'">\n                        Email\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+d.inputDefault()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full">\n\n                      <label class="xt-label mb-3 '+d.labelDefault()+'">\n                        Subject\n                      </label>\n\n                      <div class="xt-row xt-row-x-8 xt-row-y-2">\n\n                        <div class="w-full sm:w-auto">\n                          <label class="xt-label-check">\n                            <input type="radio" class="xt-check xt-radio rounded-full '+d.radioDefault()+'" name="radio-usage" checked>\n                            <span class="xt-check-content">\n                              Option 1\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="xt-label-check">\n                            <input type="radio" class="xt-check xt-radio rounded-full '+d.radioDefault()+'" name="radio-usage">\n                            <span class="xt-check-content">\n                              Option 2\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="xt-label-check">\n                            <input type="radio" class="xt-check xt-radio rounded-full '+d.radioDefault()+'" name="radio-usage">\n                            <span class="xt-check-content">\n                              Option 3\n                            </span>\n                          </label>\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label-check">\n                        <input type="checkbox" class="xt-check xt-checkbox rounded-md '+d.checkDefault()+'">\n                        <span class="xt-check-content">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="xt-button '+d.buttonMd()+" rounded-md "+d.buttonPrimary()+'">\n                        Subscribe\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n            </div>\n\n            <div class="'+d.cardSm()+" rounded-b-md bg-gray-300 "+u+'">\n              <p>\n                Receive <strong>free discount</strong> periodically on all our products.\n              </p>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Card\n</div>\n\n<div class="xt-row xt-row-6">\n\n  <div class="w-full md:w-6/12">\n    <a role="button" class="xt-card rounded-md '+d.cardDefaultInteractive()+'">\n      <div class="'+d.cardMd()+'">\n        <div class="xt-h4">Default</div>\n        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n      </div>\n    </a>\n  </div>\n\n  <div class="w-full md:w-6/12">\n    <a role="button" class="xt-card rounded-md '+d.cardPrimaryInteractive()+'">\n      <div class="'+d.cardMd()+'">\n        <div class="xt-h4">Primary</div>\n        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n      </div>\n    </a>\n  </div>\n\n</div>\n';class m extends i.a.Component{render(){return i.a.createElement(l.a,{demo:x})}}n.default=m}.call(this,"src/gatsby/code/iframe/themes/animation/slide-animation-v1.js")}}]);
//# sourceMappingURL=05e9dc1ad7d79234d64bbb08f150e9de34bb683f-ce7bf60caabafbda5eb6.js.map
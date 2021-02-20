module.exports = {
  component: {
    'body:not(.xt-nojs-fouc):not(.xt-ready)': {
      // instant animations on page load
      '*': {
        transitionDuration: 'initial !important',
        transitionDelay: 'initial !important',
        animationDuration: 'initial !important',
        animationDelay: 'initial !important',
        animationIterationCount: '1 !important',
      },
    },
    '@media (prefers-reduced-motion: reduce), (update: slow)': {
      // instant animations accessibility
      'body:not(.xt-nojs-prm)': {
        '*': {
          transitionDuration: 'initial !important',
          transitionDelay: 'initial !important',
          animationDuration: 'initial !important',
          animationDelay: 'initial !important',
          animationIterationCount: '1 !important',
        },
      },
    },
    '.initial': {
      // instant animations on components init and reinit
      'body:not(.xt-nojs-initial)': {
        '&, *': {
          transitionDuration: 'initial !important',
          transitionDelay: 'initial !important',
          animationDuration: 'initial !important',
          animationDelay: 'initial !important',
          animationIterationCount: '1 !important',
        },
      },
    },
    'body.xt-scrollbar': {
      paddingRight: 'var(--scrollbar-width) !important',
      overflow: 'hidden !important',
    },
    '[data-xt-pag].xt-ignore': {
      display: 'none !important',
    },
    '[data-xt-nav]': {
      cursor: 'pointer',
    },
    '.xt-instant': {
      transition: 'none !important',
    },
    '.xt-container': {
      position: 'relative',
      width: '100%',
    },
    '.xt-jump': {
      '&:not(.in)': {
        cursor: 'pointer',
      },
      '&.xt-jumps-none, .xt-jumps-none &': {
        cursor: 'inherit',
      },
    },
    '.xt-pointer-events-none': {
      pointerEvents: 'none',
    },
    '.xt-links-none': {
      'a&, a': {
        pointerEvents: 'none',
      },
    },
    '.xt-grab': {
      cursor: 'grab',
      'a, img': {
        // prevent browser drag
        '-webkit-user-drag': 'none',
        'user-drag': 'none',
        // prevent browser selection
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
      },
    },
    '.xt-calculating': {
      display: 'block !important',
      visibility: 'hidden !important',
      opacity: '0 !important',
      transitionDuration: 'initial !important',
      transitionDelay: 'initial !important',
      animationDuration: 'initial !important',
      animationDelay: 'initial !important',
      animationIterationCount: '1 !important',
    },
    '.xt-collapse-reset': {
      overflow: 'visible !important',
    },
    '[data-popper-placement^="top"]': {
      paddingTop: '0 !important',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
      '> .xt-arrow': {
        top: 'auto !important',
        marginLeft: '0 !important',
        marginRight: '0 !important',
      },
    },
    '[data-popper-placement^="bottom"]': {
      paddingBottom: '0 !important',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
      '> .xt-arrow': {
        bottom: 'auto !important',
        marginLeft: '0 !important',
        marginRight: '0 !important',
      },
    },
    '[data-popper-placement^="left"]': {
      paddingLeft: '0 !important',
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      '> .xt-arrow': {
        left: 'auto !important',
        marginTop: '0 !important',
        marginBottom: '0 !important',
      },
    },
    '[data-popper-placement^="right"]': {
      paddingRight: '0 !important',
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      '> .xt-arrow': {
        right: 'auto !important',
        marginTop: '0 !important',
        marginBottom: '0 !important',
      },
    },
  },
}

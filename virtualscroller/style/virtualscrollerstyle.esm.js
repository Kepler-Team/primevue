import BaseStyle from 'primevue/base/style';

var css = "\n@layer primevue {\n    .p-virtualscroller {\n        position: relative;\n        overflow: auto;\n        contain: strict;\n        transform: translateZ(0);\n        will-change: scroll-position;\n        outline: 0 none;\n    }\n\n    .p-virtualscroller-content {\n        position: absolute;\n        top: 0;\n        left: 0;\n        /* contain: content; */\n        min-height: 100%;\n        min-width: 100%;\n        will-change: transform;\n    }\n\n    .p-virtualscroller-spacer {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 1px;\n        width: 1px;\n        transform-origin: 0 0;\n        pointer-events: none;\n    }\n\n    .p-virtualscroller .p-virtualscroller-loader {\n        position: sticky;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-virtualscroller-loader.p-component-overlay {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .p-virtualscroller-loading-icon {\n        font-size: 2rem;\n    }\n\n    .p-virtualscroller-loading-icon.p-icon {\n        width: 2rem;\n        height: 2rem;\n    }\n\n    .p-virtualscroller-horizontal > .p-virtualscroller-content {\n        display: flex;\n    }\n\n    /* Inline */\n    .p-virtualscroller-inline .p-virtualscroller-content {\n        position: static;\n    }\n}\n";
var VirtualScrollerStyle = BaseStyle.extend({
  name: 'virtualscroller',
  css: css
});

export { VirtualScrollerStyle as default };

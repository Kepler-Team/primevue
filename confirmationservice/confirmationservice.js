this.primevue = this.primevue || {};
this.primevue.confirmationservice = (function (ConfirmationEventBus, useconfirm) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ConfirmationEventBus__default = /*#__PURE__*/_interopDefaultLegacy(ConfirmationEventBus);

    var ConfirmationService = {
      install: function install(app) {
        var ConfirmationService = {
          require: function require(options) {
            ConfirmationEventBus__default["default"].emit('confirm', options);
          },
          close: function close() {
            ConfirmationEventBus__default["default"].emit('close');
          }
        };
        app.config.globalProperties.$confirm = ConfirmationService;
        app.provide(useconfirm.PrimeVueConfirmSymbol, ConfirmationService);
      }
    };

    return ConfirmationService;

})(primevue.confirmationeventbus, primevue.useconfirm);

this.primevue = this.primevue || {};
this.primevue.dropdown = this.primevue.dropdown || {};
this.primevue.dropdown.style = (function (BaseStyle) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var BaseStyle__default = /*#__PURE__*/_interopDefaultLegacy(BaseStyle);

    var classes = {
      root: function root(_ref) {
        var instance = _ref.instance,
          props = _ref.props,
          state = _ref.state;
        return ['p-dropdown p-component p-inputwrapper', {
          'p-disabled': props.disabled,
          'p-invalid': props.invalid,
          'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
          'p-dropdown-clearable': props.showClear,
          'p-focus': state.focused,
          'p-inputwrapper-filled': instance.hasSelectedOption,
          'p-inputwrapper-focus': state.focused || state.overlayVisible,
          'p-overlay-open': state.overlayVisible
        }];
      },
      input: function input(_ref2) {
        var _instance$label;
        var instance = _ref2.instance,
          props = _ref2.props;
        return ['p-dropdown-label p-inputtext', {
          'p-placeholder': !props.editable && instance.label === props.placeholder,
          'p-dropdown-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
        }];
      },
      clearIcon: 'p-dropdown-clear-icon',
      trigger: 'p-dropdown-trigger',
      loadingicon: 'p-dropdown-trigger-icon',
      dropdownIcon: 'p-dropdown-trigger-icon',
      panel: function panel(_ref3) {
        _ref3.props;
          var instance = _ref3.instance;
        return ['p-dropdown-panel p-component', {
          'p-ripple-disabled': instance.$primevue.config.ripple === false
        }];
      },
      header: 'p-dropdown-header',
      filterContainer: 'p-dropdown-filter-container',
      filterInput: function filterInput(_ref4) {
        var props = _ref4.props,
          instance = _ref4.instance;
        return ['p-dropdown-filter p-inputtext p-component', {
          'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }];
      },
      filterIcon: 'p-dropdown-filter-icon',
      wrapper: 'p-dropdown-items-wrapper',
      list: 'p-dropdown-items',
      itemGroup: 'p-dropdown-item-group',
      itemGroupLabel: 'p-dropdown-item-group-label',
      item: function item(_ref5) {
        var instance = _ref5.instance,
          props = _ref5.props,
          state = _ref5.state,
          option = _ref5.option,
          focusedOption = _ref5.focusedOption;
        return ['p-dropdown-item', {
          'p-highlight': instance.isSelected(option) && props.highlightOnSelect,
          'p-focus': state.focusedOptionIndex === focusedOption,
          'p-disabled': instance.isOptionDisabled(option)
        }];
      },
      itemLabel: 'p-dropdown-item-label',
      checkIcon: 'p-dropdown-check-icon',
      blankIcon: 'p-dropdown-blank-icon',
      emptyMessage: 'p-dropdown-empty-message'
    };
    var DropdownStyle = BaseStyle__default["default"].extend({
      name: 'dropdown',
      classes: classes
    });

    return DropdownStyle;

})(primevue.base.style);

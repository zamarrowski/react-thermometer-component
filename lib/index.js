'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Thermometer.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thermometer = function (_Component) {
  _inherits(Thermometer, _Component);

  function Thermometer() {
    _classCallCheck(this, Thermometer);

    return _possibleConstructorReturn(this, (Thermometer.__proto__ || Object.getPrototypeOf(Thermometer)).apply(this, arguments));
  }

  _createClass(Thermometer, [{
    key: 'render',
    value: function render() {
      this.options = this._generateOptions();
      var theme = 'thermometer--theme-' + this.options.theme();
      var size = 'thermometer--' + this.options.size();
      var height = { height: this.options.height + 'px' };
      var heightPercent = { height: this.options.percent() + '%' };
      var heightBgColor = { height: 'calc(' + this.options.height + 'px - 57px)' };
      var valstr = this.options.valstr();
      this._createIntervals();
      var stepIntervals = this._createIntervalsUI(this.options.intervals);

      return _react2.default.createElement(
        'div',
        { style: height, className: 'thermometer ' + size + ' ' + theme },
        _react2.default.createElement('div', { className: 'thermometer__draw-a' }),
        _react2.default.createElement('div', { className: 'thermometer__draw-b' }),
        _react2.default.createElement(
          'div',
          { className: 'thermometer__meter' },
          _react2.default.createElement(
            'ul',
            { className: 'thermometer__statistics' },
            stepIntervals
          ),
          _react2.default.createElement(
            'div',
            { style: heightPercent, className: 'thermometer__mercury' },
            _react2.default.createElement(
              'div',
              { className: 'thermometer__percent-current' },
              valstr
            ),
            _react2.default.createElement(
              'div',
              { className: 'thermometer__mask' },
              _react2.default.createElement('div', { className: 'thermometer__bg-color', style: heightBgColor })
            )
          )
        )
      );
    }
  }, {
    key: '_generateOptions',
    value: function _generateOptions() {
      var _this2 = this;

      return {
        theme: function theme() {
          return _this2.props.theme === 'light' || _this2.props.theme === 'dark' ? _this2.props.theme : 'light';
        },
        value: this.props.value || 0, //default 0
        max: this.props.max || 100, //default 100
        steps: this.props.steps,
        format: this.props.format || '',
        size: function size() {
          return _this2.props.size === 'small' || _this2.props.size === 'normal' || _this2.props.size === 'large' ? _this2.props.size : 'normal';
        },
        height: this.props.height || 200, //default 200
        valstr: function valstr() {
          return _this2.options.value + _this2.options.format;
        },
        percent: function percent() {
          return _this2.options.value / _this2.options.max * 100;
        },
        intervals: []
      };
    }
  }, {
    key: '_createIntervals',
    value: function _createIntervals() {
      if (this.options.steps) {
        for (var step = 0; step <= this.options.steps; step++) {
          var val = (this.options.max / this.options.steps * step).toFixed(2);
          var percent = val / this.options.max * 100;
          var interval = { percent: percent, label: val + this.options.format };
          this.options.intervals.push(interval);
        }
      }
    }
  }, {
    key: '_createIntervalsUI',
    value: function _createIntervalsUI(intervals) {
      return intervals.map(function (step, i) {
        return _react2.default.createElement(
          'li',
          { key: i, style: { bottom: 'calc(' + step.percent + '% - 1px)' } },
          step.label
        );
      });
    }
  }]);

  return Thermometer;
}(_react.Component);

exports.default = Thermometer;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
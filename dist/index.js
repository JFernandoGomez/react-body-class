'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSideEffect = require('react-side-effect');

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // External dependencies


var BodyClass = function (_Component) {
	_inherits(BodyClass, _Component);

	function BodyClass() {
		_classCallCheck(this, BodyClass);

		return _possibleConstructorReturn(this, (BodyClass.__proto__ || Object.getPrototypeOf(BodyClass)).apply(this, arguments));
	}

	_createClass(BodyClass, [{
		key: 'render',
		value: function render() {
			if (this.props.children) {
				return _react.Children.only(this.props.children);
			}
			return null;
		}
	}]);

	return BodyClass;
}(_react.Component);

BodyClass.propTypes = {
	// classes is either an object { name: bool }, or list of names
	// classNames is smart enough to handle array + object combos
	classes: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)])
};

function reducePropsToState(propsList) {
	// Pull out the classes from the props objects
	var classListArr = propsList.map(function (props) {
		return props.classes;
	});
	// Mash the classes together
	var classList = (0, _flatten2.default)(classListArr);
	if (classList) {
		return classList;
	}
}

function handleStateChangeOnClient(bodyClass) {
	document.body.className = (0, _classnames2.default)(bodyClass);
}

exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(BodyClass);
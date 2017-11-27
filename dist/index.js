'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.flatten');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = require('react-side-effect');

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BodyClass(props) {
	if (props.children) {
		return _react.Children.only(props.children);
	}
	return null;
} /**
   * External dependencies
   */


BodyClass.propTypes = {
	// classes is either an object { name: bool }, or list of names
	// classNames is smart enough to handle array + object combos
	classes: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.arrayOf(_propTypes2.default.string)])
};

function reducePropsToState(propsList) {
	// Pull out the classes from the props objects
	var classListArr = propsList.map(function (props) {
		return props.classes;
	});
	// Mash the classes together
	var classList = (0, _lodash2.default)(classListArr);
	if (classList) {
		return classList;
	}
}

function handleStateChangeOnClient(bodyClass) {
	document.body.className = (0, _classnames2.default)(bodyClass);
}

exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(BodyClass);
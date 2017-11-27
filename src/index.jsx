/**
 * External dependencies
 */
import { Children } from 'react';
import classNames from 'classnames';
import flatten from 'lodash.flatten';
import PropTypes from 'prop-types';
import withSideEffect from 'react-side-effect';

function BodyClass( props ) {
	if ( props.children ) {
		return Children.only( props.children );
	}
	return null;
}

BodyClass.propTypes = {
	// classes is either an object { name: bool }, or list of names
	// classNames is smart enough to handle array + object combos
	classes: PropTypes.oneOfType( [
		PropTypes.object,
		PropTypes.arrayOf( PropTypes.string ),
	] ),
};

function reducePropsToState( propsList ) {
	// Pull out the classes from the props objects
	const classListArr = propsList.map( ( props ) => {
		return props.classes;
	} );
	// Mash the classes together
	const classList = flatten( classListArr );
	if ( classList ) {
		return classList;
	}
}

function handleStateChangeOnClient( bodyClass ) {
	document.body.className = classNames( bodyClass );
}

export default withSideEffect(
	reducePropsToState,
	handleStateChangeOnClient
)( BodyClass );

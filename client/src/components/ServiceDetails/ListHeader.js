import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import TrainIcon from './train-icon.svg';
import './ListHeader.scss';

const StationListHeader = (props) => (
	<header className="list-header list-header--closeble">
		<Link to={`/${props.from}`} title="Go Back" className="icon-close glyphicon glyphicon-remove"></Link>
		<img className="list-header__icon" src={TrainIcon} alt="Train Icon"/>
		<h2 className="list-header__title">
			<div>{props.origin}</div>
			<span className="list-header__title--gray">to </span> {props.destination}
			<small className="list-header__subtitle">Operated by {props.operator}</small>
		</h2>
	</header>
)

const stationCodeValid = (props, propName, componentName) => {
    if (!/^[A-Z]{3}/.test(props[propName])) {
		return new Error(
			`Invalid prop ${propName} supplied to ${componentName}. Validation failed. Station Code should be 3 uppercase letter`
      );
    }
}

StationListHeader.propTypes = {
	from: stationCodeValid,
	origin: PropTypes.string.isRequired,
	destination: PropTypes.string.isRequired,
	operator: PropTypes.string.isRequired
}


export default StationListHeader;
import React, {PropTypes} from 'react';
import './StationPoint.scss';
import classNames from 'classnames';


const StationPoint = (props) => {

	const stationPointModifiers = classNames({
		'station-point--departed': 	props.hasDeparted,
		'station-point--current':  	(props.hasArrived && !props.hasDeparted) || (props.isOrigin && !props.hasDeparted),
		'station-point--from': 		(props.stationCode === props.from)
	});

	const circleModifiers = classNames({
		'station-point__circle--black': props.isOrigin || props.isDestination
	});

	// If an hour format is provided, show expected at or departed at abbr
	const abbr = ((/^([01]\d|2[0-3]):?([0-5]\d)$/).test(props.estimatedAt))? 
				(props.hasDeparted)?
					<abbr title="Departed At">Dep.</abbr>:
					<abbr title="Expected At">Exp.</abbr> 
				:null

	return (
		<li className={`station-point ${stationPointModifiers}`}>
			<time className="station-point__due">{props.scheduledTime}</time>
			<div className="station-point__line">
				<span className={`station-point__name station-point__circle ${circleModifiers}`}>{props.stationName}</span>
				<span className="station-point__status">
					{abbr}
					{props.estimatedAt}
				</span>
			</div>
		</li>
	)
}


StationPoint.propTypes = {
	hasDeparted: PropTypes.bool,
	hasArrived: PropTypes.bool,
	isOrigin: PropTypes.bool,
	isDestination: PropTypes.bool,
	stationCode: PropTypes.string.isRequired,
	scheduledTime: PropTypes.string,
	stationName: PropTypes.string.isRequired,
	estimatedAt: PropTypes.string,
	from: PropTypes.string
}

export default StationPoint;
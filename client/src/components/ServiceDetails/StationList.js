import React, {PropTypes} from 'react';
import './StationList.scss';

import Stop from './StationPoint';
import Header from './ListHeader';


const StationList = ({origin, destination, operator, stops, params}) => {

	return (
		<div className="station-list">
			<Header origin={origin} destination={destination} operator={operator} from={params.departureId} />
			<ul>
				{stops.map( (station) => 
					<Stop key={station.stationName} {...station} from={params.departureId} />
				)}
			</ul>
		</div>
	)
}


StationList.propTypes = {
	origin: PropTypes.string.isRequired,
	destination: PropTypes.string.isRequired,
	operator: PropTypes.string.isRequired,
	stops: PropTypes.array.isRequired,
	params: PropTypes.objectOf(PropTypes.string).isRequired
}

export default StationList;
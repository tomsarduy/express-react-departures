import React from 'react';
import 'react-select/dist/react-select.css';
import 'react-virtualized-select/styles.css';
import {Link} from 'react-router';
import './DepartureSelect.scss';

import VirtualizedSelect from 'react-virtualized-select';

const DepartureSelect = ({selectedValue, stations, selectStation}) => (
	<div className="search-departures">
		<h2 className="search-departures__title">Select Departure</h2>

		<VirtualizedSelect 
			name="search-departures__select" 
			value={selectedValue}
			options={stations} 
			onChange={selectStation}
		/>

		{
			selectedValue &&  (<Link className="btn btn-lg btn--search-departures" to={'/'+selectedValue} >Show Departures</Link>) 
		}
	</div>
)

DepartureSelect.propTypes = {
  selectedValue: React.PropTypes.string,
  stations: React.PropTypes.array,
  selectStation: React.PropTypes.func.isRequired,
};

DepartureSelect.defaultProps = {
  selectedValue: 'WAT'
};

export default DepartureSelect;
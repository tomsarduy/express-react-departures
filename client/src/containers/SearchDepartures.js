import React, {Component} from 'react';
import DepartureSelect from '../components/DepartureSelect/DepartureSelect';
import ErrorMessage from '../components/Error/ErrorMessage';
import {LoadStations} from '../middlewares/api';
import {selectStation} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
	return {
		stations: state.DeparturesSelect.stations,
		selectedValue: state.DeparturesSelect.selected,
		showSpinner: state.DeparturesSelect.showSpinner,
		error: state.DeparturesSelect.error,
		errorMessage: state.DeparturesSelect.errorMessage
	}
}


class SearchDepartures extends Component {

	componentDidMount() {
		this.props.LoadStations();
	}

	render() {

		if(this.props.showSpinner){
			return (<div className="spinner"></div>)
		}

		if(this.props.error){
			return <ErrorMessage message={this.props.errorMessage} />
		}

		return <DepartureSelect {...this.props} />
	}
}

export default connect(
	mapStateToProps,
	{
		LoadStations,
		selectStation
	}
)(SearchDepartures);

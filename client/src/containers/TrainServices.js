import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchDepartures} from '../middlewares/api';

import ErrorMessage from '../components/Error/ErrorMessage';
import ServiceList from '../components/TrainServices/ServiceList';

const mapStateToProps = (state, props) => {
	return {
		data: state.TrainServices.data,
		error: state.TrainServices.error,
		errorMessage: state.TrainServices.errorMessage,
		showSpinner: state.TrainServices.showSpinner || Object.keys(state.TrainServices).length === 0,
	}
}

export class TrainServices extends Component {

	componentDidMount() {
		// fetch departures and trigger the refresh timer
		this.props.fetchDepartures(this.props.params.departureId);
		this.refreshDepartures();
	}

	componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentWillReceiveProps(nextProps){
    	if (this.props.params.departureId !== nextProps.params.departureId) {
    		clearInterval(this.interval);
			this.props.fetchDepartures(nextProps.params.departureId);
	    }
    }

    // Reload the departures list without refreshing the page
    // maybe better approach will be using RxJS
    refreshDepartures(){
    	this.interval = setInterval( 
    		() => this.props.fetchDepartures(this.props.params.departureId, true)
    	, 10000);
    }

	render() {

		if(this.props.error){
			return <ErrorMessage message={this.props.errorMessage} />
		}

		if(this.props.showSpinner){
			return (<div className="spinner"></div>)
		}

		return (
			<ServiceList departures={this.props.data} departureId={this.props.params.departureId} />
		)
	}
}

TrainServices.propTypes = {
  fetchDepartures: React.PropTypes.func.isRequired,
  stations: React.PropTypes.array,
  showSpinner: React.PropTypes.bool,
  error: React.PropTypes.bool,
  errorMessage: React.PropTypes.string,
};

export default connect(
	mapStateToProps,
	{
		fetchDepartures
	}
)(TrainServices);



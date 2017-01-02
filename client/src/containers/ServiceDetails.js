import React, {Component, PropTypes} from 'react';
import StationList from '../components/ServiceDetails/StationList';
import ErrorMessage from '../components/Error/ErrorMessage';
import {fetchService} from '../middlewares/api';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
	return {
		data: state.ServiceDetails.data,
		error: state.ServiceDetails.error,
		errorMessage: state.ServiceDetails.errorMessage,
		showSpinner: state.ServiceDetails.showSpinner || Object.keys(state.ServiceDetails).length === 0,
	}
}


export class ServiceDetails extends Component {


	// Refresh train status every 10s
	// RxJS would be a better aproach 
    refreshTrainStatus() {
    	this.interval = setInterval( 
    		() => this.props.fetchService(this.props.params.serviceId, this.props.params.date, true)
    	, 10000);
    }

	componentDidMount() {

		// Load services with [CALL_API] middleware
		this.props.fetchService(this.props.params.serviceId, this.props.params.date);

		// Update train position 
		this.refreshTrainStatus();
	}

	// Stop refreshing train status
	componentWillUnmount() {
        clearInterval(this.interval);
    }

	render() {

		if(this.props.error){
			return <ErrorMessage message={this.props.errorMessage} />
		}

		if(this.props.showSpinner){
			return (<div className="spinner"></div>)
		}

		return <StationList params={this.props.params} {...this.props.data} />
	}
}

ServiceDetails.propTypes = {
	data: PropTypes.object,
	showSpinner: PropTypes.bool.isRequired,
	params: PropTypes.objectOf(PropTypes.string).isRequired,
	error: PropTypes.bool,
	errorMessage: PropTypes.string
}

export default connect(
	mapStateToProps,
	{
		fetchService
	}
)(ServiceDetails);

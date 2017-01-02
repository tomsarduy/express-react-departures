import React, {PropTypes} from 'react';
import './ServiceList.scss';
import Service from './ServiceItem';

const ServiceList = ({departures, departureId}) => {

    // If there is no services
    if(!departures || !departures.length || departures.length===0){
        return <div className="alert alert-warning">No Services for {departureId}</div>
    }

    return (
        <ul className="departures-list">
            {
                departures.map ( departure => 
                    
                	<Service 
                		key={departure.serviceId}
                		from={departureId}
                		{...departure}
            		/>
                )
            }
    	</ul>
    )
}

ServiceList.propTypes = {
    departures: PropTypes.array,
    departureId: PropTypes.string
}


export default ServiceList;
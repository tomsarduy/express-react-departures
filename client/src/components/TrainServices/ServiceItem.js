import React, {PropTypes} from 'react';
import './ServiceItem.scss';
import {Link} from 'react-router';
import classNames from 'classnames';

const ServiceItem = (props) => {

	const classes = classNames({
		'service-item__status--on-time': 	props.status === 'On time',
		'service-item__status--delayed': 	props.status === 'Delayed',
		'service-item__status--cancelled': 	props.status === 'Cancelled',
	});

    return (
    	<Link 
    		to={`/${props.from}/${props.serviceId}/${props.date}`}
    		className="service-item" 
    		activeClassName="service-item--selected"
    	>
		    <li>
		    	<time className="service-item__due">{props.due}</time>
		    	<span className="service-item__title">{props.destination}</span>
		    	<span className="service-item__platform">
		    		{props.platform !=='-' && <abbr title="Platform">Plat. </abbr>}
		    		{props.platform}
			    </span>
		    	<div className="service">
			    	<span className="service-item__subtitle">{props.operator}</span>
			    	<span className={`service-item__status ${classes}`}>
				    	{ 
				    		(props.status !== 'On time' 
				    			&& props.status !== 'Cancelled' 
				    			&& props.status !== 'Delayed') 
				    			&& <abbr title="Expected At">Exp.</abbr> 
				    	}
		    			{props.status}
			    	</span>
		    	</div>
		    	<i className="service-item__arrow glyphicon glyphicon-menu-right"></i>
		    </li>
    	</Link>
    	
    )
}

ServiceItem.propTypes = {
	from: PropTypes.string.isRequired,
	serviceId: PropTypes.string.isRequired,
	platform: PropTypes.string.isRequired,
	operator: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	destination:PropTypes.string.isRequired
}

export default ServiceItem;
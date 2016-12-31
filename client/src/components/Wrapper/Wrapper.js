import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Wrapper.scss';
import Header from '../Header/Header';
import SearchDepartures from '../../containers/SearchDepartures';

const Wrapper = ({children}) => {

    return (
        <div className="app">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                        <SearchDepartures/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                        <ReactCSSTransitionGroup transitionName="route" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
                            {
                                React.Children.map(children, (child) => 
                                    React.cloneElement(child, {key: child.props.location.pathname}))
                            }
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

Wrapper.propTypes = {
  children: React.PropTypes.node
};

export default Wrapper;
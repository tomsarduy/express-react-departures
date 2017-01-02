import React from 'react';
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
                        {children}
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
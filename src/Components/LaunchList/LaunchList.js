import React from 'react';
import './LaunchList.css';
import LaunchItem from './../LaunchItem/LaunchItem';

class LaunchList extends React.Component{
    render(){
        return (
            <div className = "LaunchList">
            {
                this.props.launches.map(function(launch,i){
                    return <LaunchItem  key = {launch.flight_number}launch={launch} />;
                })
            }
            </div>
        );
    }
}

export default LaunchList;
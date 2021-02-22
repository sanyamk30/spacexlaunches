import React from 'react';
import './LaunchItem.css';

class LaunchItem extends React.Component{
    render(){
        return (
            <div className = "LaunchItem">
                <div className="image-container">
                    <img src={this.props.launch.images[0]}/>
                </div>
                <h2>Mission Name : {this.props.launch.mission_name}</h2>
                <div className="launch-information">
                    <div classNamr="launch-flight">
                        <p>Flight Number : {this.props.launch.flight_number}</p>
                    </div>
                    <div className="launch-site">
                        <p>Launch Site : {this.props.launch.launch_site}</p>
                        <p>Launch Year : {this.props.launch.launch_year}</p>
                    </div>
                    <div className="launch-details">
                        <p>Launch Details{this.props.launch.details}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LaunchItem;
import React from 'react';
import './Filters.css';


class Filters extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            year : '',
            launch : "false",
            landing : "false"
        };

        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleLaunchChange = this.handleLaunchChange.bind(this);
        this.handleLandingChange = this.handleLandingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleYearChange(event){
        this.setState({
            year: event.target.value
        });
    }

    handleLaunchChange(event){
        var value;
        if(event.target.checked == false){
            value = "true";
        }
        else{
            value = "false";
        }
        this.setState({
            launch : value
        })
    }
    handleLandingChange(event){
        var value;
        if(event.target.checked == false){
            value = "true";
        }
        else{
            value = "false";
        }
        this.setState({
            landing : value
        })
    }
    handleSubmit(event){
        this.props.searchSpaceX(this.state.year, this.state.launch, this.state.landing);
        event.preventDefault();
    }

    render(){
        return(
            <div className="Filters">
                <form onSubmit={this.handleSubmit}>
                    <label>Launch Year</label>
                    <input className="options" type="text" onChange={this.handleYearChange} />
                    <label>Successful Launch</label>
                    <input className="options" type="checkbox" onClick={this.handleLaunchChange} />
                    <label>Successful Landing</label>
                    <input className="options" type="checkbox" onClick={this.handleLandingChange}/>
                    <div className="submit">
                        <a onClick={this.handleSubmit}>Submit</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Filters;
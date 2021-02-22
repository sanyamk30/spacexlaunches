import logo from './logo.svg';
import React from 'react';
import './App.css';
import LaunchList from './Components/LaunchList/LaunchList';
import Filters from './Components/Filters/Filters';
import SpaceX from './util/SpaceX';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      'launches': []
    };

    this.searchSpaceX = this.searchSpaceX.bind(this);
  }

  searchSpaceX(year,launch,landing){
    
    SpaceX.search(year,launch,landing).then(launches => {
      this.setState({
        'launches': launches
      });
    });
  }

  render(){
    //this.searchSpaceX('',false,false);
    return (
      <div className="App">
        <h1>SpaceX Launches</h1>
        <Filters searchSpaceX={this.searchSpaceX} />
        <LaunchList launches={this.state.launches}></LaunchList>
      </div>
      
    )
  }
}

export default App;

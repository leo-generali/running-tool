import React, { Component } from 'react';
import { formatPace } from '../helpers'
import Result from './Result'
import Calc from './Calc'

class App extends Component {
  constructor(){
    super()

    this.changeDistanceType=this.changeDistanceType.bind(this);
    this.updateDistance=this.updateDistance.bind(this);
    this.updateTime=this.updateTime.bind(this);
    this.updatePace=this.updatePace.bind(this);
  
    this.state = {
      time: 20,
      distance: 5,
      pace: 4,
      paceStr: "",
      isKilometers: true
    };
  }


  updateDistance = (e) => {
    const d = Number(e.target.value);
    this.setState({
      distance: d
    }) 
  }

  updateTime = (e) => {
    const t = Number(e.target.value);
    this.setState({
      time: t
    }) 
  }

  updatePace = (e) => {
    e.preventDefault();
    const d = this.state.distance;
    const t = this.state.time;
    const pace = t/d;
    const paceStr = formatPace(t,d);

    this.setState({
      pace: pace,
      paceStr: paceStr
    })
  }

  changeDistanceType(){
    this.setState(prevState => ({
      isKilometers: !prevState.isKilometers
    }));
  }

  render() {
  
    return (
      <div>
        <Calc 
          updateDistance={this.updateDistance}
          updateTime={this.updateTime}
          updatePace={this.updatePace}
          isKilometers={this.state.isKilometers}
         />
        
        <Result 
          paceStr={this.state.paceStr}
          isKilometers={this.state.isKilometers}
        />
      </div>
    );
  }
}

export default App;
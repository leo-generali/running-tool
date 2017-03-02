import React, { Component } from 'react';
import { formatPace } from '../helpers'

class App extends Component {
  state = {
    time: 20,
    distance: 5,
    pace: 4,
    paceStr: "4:00",
    isKilometers: true
  };

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

  render() {
  
    return (
      <form onSubmit={this.updatePace}>
        <p>Distance <span id="distanceType">K</span></p>
        <input type="number" onChange={this.updateDistance}/>
        <p>Time</p>       
        <input type="number" onChange={this.updateTime} />
        <input type="submit" />
      </form>
    );
  }
}

export default App;

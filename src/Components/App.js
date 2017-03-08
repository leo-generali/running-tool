import React, { Component } from "react";
import { formatPace, formatTime, decimalRound } from "../helpers";
import Result from "./Result";
import Calc from "./Calc";

class App extends Component {
  constructor(){
    super()

    this.changeDistanceType=this.changeDistanceType.bind(this);
    this.updateDistance=this.updateDistance.bind(this);
    this.updateTime=this.updateTime.bind(this);
    this.updatePace=this.updatePace.bind(this);
  
    this.state = {
      time: 300,
      distance: 1,
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
    const t = e.target.value;
    console.log(formatTime(t));
    this.setState({
      time: formatTime(t) 
    }) 
  }

  updatePace = (e) => {
    e.preventDefault();

    const d = this.state.distance;
    const t = this.state.time;
    //if there is not a number, in the distance form. String will not be updated 
    if(!d){return}
    const pace = t/d;
    const paceStr = formatPace(t,d);

    this.setState({
      pace: pace,
      paceStr: paceStr
    })
  }

  changeDistanceType = (e) => {

    if(e.nativeEvent.detail > 0){
      let distance = Number(document.getElementById("distance").value);
      if(this.state.isKilometers){
        distance = decimalRound((distance * 0.621371), 1);
        document.getElementById("distance").value = distance;
      }else{
        distance = decimalRound((distance * 1.60934), 1);
        document.getElementById("distance").value = distance;
      }
      this.setState(prevState => ({
        isKilometers: !prevState.isKilometers,
        distance: distance
      })); 
    }

  }

  render() {
  
    return (
      <div className="calc-card">
        <Calc 
          updateDistance={this.updateDistance}
          updateTime={this.updateTime}
          updatePace={this.updatePace}
          isKilometers={this.state.isKilometers}
          changeDistanceType={this.changeDistanceType}
          time={this.state.time}
          distance={this.state.distance}
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
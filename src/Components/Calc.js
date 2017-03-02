import React, { Component } from 'react';

class Calc extends Component{
  render(){
    return(
      
      <div>
        <button onClick={this.props.changeDistanceType}>{this.props.isKilometers ? "K" : "M"}</button>
        <form onSubmit={this.props.updatePace}>
          <p>Distance</p>
          <input
            type="number" 
            onChange={this.props.updateDistance}
            placeholder={this.props.distance}
            step="any"
          />
          <p>Time</p>       
          <input 
            type="number" 
            onChange={this.props.updateTime} 
            placeholder={this.props.time}
            step="any"
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Calc
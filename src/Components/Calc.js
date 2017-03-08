import React, { Component } from "react";

class Calc extends Component{
  render() {
    return(
      <form onSubmit={this.props.updatePace} className="calc-form">
        <h2 className="header">Distance</h2>
        <input
          type="number" 
          onChange={this.props.updateDistance}
          placeholder={this.props.distance}
          step="any"
          id="distance"
          className="input-form input-form--distance"
        />
        <button onClick={this.props.changeDistanceType} className="input-button input-button--dis">
          {
            this.props.isKilometers ? "Km" : "Mi"
          }
        </button>
        <h2 className="header">Time</h2>       
        <input 
          type="string" 
          onChange={this.props.updateTime} 
          placeholder='(HH:)MM:SS'
          className="input-form input-form--time"
        />
        <input 
          type="submit" 
          className="input-button input-button--go" 
          value=">" 
        />
      </form>
    )
  }
}

export default Calc
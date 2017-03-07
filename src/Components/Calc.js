import React, { Component } from 'react';

class Calc extends Component{
  render() {
    return(
      <div>
        <form onSubmit={this.props.updatePace}>
          <p>Distance</p>
          <input
            type="number" 
            onChange={this.props.updateDistance}
            placeholder={this.props.distance}
            step="any"
          />
          <button onClick={this.props.changeDistanceType}>
            {
              this.props.isKilometers ? "Km" : "Mi"
            }
          </button>
          <p>Time</p>       
          <input 
            type="string" 
            onChange={this.props.updateTime} 
            placeholder='HH:MM:SS or MM:SS'
            step="any"
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Calc
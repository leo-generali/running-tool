import React, { Component } from 'react';

class Result extends Component {
  render() {
    const test = this.props.isKilometers ? "Kilometer" : "Mile"
    
    return(
      <p>
        {this.props.paceStr + "/" + test}
      </p>
    )
  }
}

export default Result;
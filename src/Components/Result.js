import React, { Component } from 'react';

class Result extends Component {
  render() {
    const test = this.props.isKilometers ? "kilometer" : "mile";
    
    return(
      <p>
        {this.props.paceStr + "/" + test}
      </p>
    )
  }
}

export default Result;
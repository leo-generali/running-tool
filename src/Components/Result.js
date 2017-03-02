import React, { Component } from 'react';

class Result extends Component {
  render() {
        
    return(
      <p>
      {this.props.paceStr}
      </p>
    )
  }
}

export default Result;
import React, { Component } from "react";

class Result extends Component {
  render() {
    const test = this.props.isKilometers ? "kilometer" : "mile";
    
    return(
      <div>
        <h2 className="header">Pace</h2>   
        <p className="result">
          {this.props.paceStr + "/" + test}
        </p>
      </div>
    )
  }
}

export default Result;
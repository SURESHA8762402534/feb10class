import React, { Component } from "react";

export default class ChildTwo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       
      <div className="appheader">
      
          <span>{this.props.first_name}</span>
          <span>{this.props.last_name}</span>
          <br></br>
          <img src={this.props.img} /><br></br>
          <span><p>{this.props.email}</p></span>
          
      </div>
      
    );
  }
}
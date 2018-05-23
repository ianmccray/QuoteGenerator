import React, { Component } from "react";

export default class QuoteDisplay extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      changeQuote: 0
    }
  }
  
  onChange(index){
    if(this.state.changeQuote >= this.props.name.length-1){
      this.setState({
        changeQuote: index = 0
      })
    }
    else{
      this.setState({
        changeQuote: index += 1
      })
  }
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.name[this.state.changeQuote]}</h1>
        <button onClick={() => this.onChange(this.state.changeQuote)}> Change Quote </button>
      </div>
    )
  }
}


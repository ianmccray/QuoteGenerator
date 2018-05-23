import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteDisplay from './QuoteDisplay';


class App extends Component {
  
  render() {
    
    const quotes = ["In the middle of every difficulty lies opportunity.", 
    "It is not the mountain we conquer but ourselves."]
    
    return (
      <QuoteDisplay name={quotes}/>
    );
  }
}


export default App;

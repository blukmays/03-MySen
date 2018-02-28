import React, { Component } from 'react';
// import MyData from './data/index.js'
import * as TestData from './data/index.js'



class App extends Component {

  exe1(){
    console.log("Hello from Exe1")
    console.log(TestData.mytest)
      return (
          <h2> My info is: { TestData.mytest() }</h2>
      )
  }

  render() {

    return (
      <div>
        <h1>Hello from here 1</h1>
          { this.exe1() }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title:"Title from home",
         des:"Description from home"
      }
    }
    
  render() {
    return (
      <>
        <br></br>
        <h1>{this.state.title}</h1> 
        <h2>{this.state.des}</h2>
      </>
    )
  }
}

export default Home

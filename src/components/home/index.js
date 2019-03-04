import React, { Component } from 'react'

class Home extends Component{
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <p>this is home page</p>
      </div>
    )
  }
}

export default Home
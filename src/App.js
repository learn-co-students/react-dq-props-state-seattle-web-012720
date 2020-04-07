import React, { Component } from 'react'
import MasterHog from './MasterHog'
import './App.css'
import OffSpring from './db.js'

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MasterHog offSpring={OffSpring}/>
      </div>
    )
  }

}

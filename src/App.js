import React, { Component } from 'react';
import logo from './lukelogo.png';
import axios from 'axios'
import './App.css';

import Animaladd from './components/Animaladd'
import Animal from './components/Animal'

const expressURL = 'http://localhost:3032/api/animals'

class App extends Component {
  constructor() {
    super()

    this.state = {
      frontArray: []
    }
  }

  componentDidMount = () => {
    axios.get(expressURL).then(res => {
      this.setState({ frontArray: res.data })
    }).catch(error => {
      console.error(error)
    })
  }

  addAnimal = (name, url) => {
    axios.post(expressURL, {name: name, imageUrl: url}).then(res => {
      this.setState({ frontArray: res.data })
    }).catch(error => {
      console.log(error)
    })
  }

  updateArrayState = (data) => {
    this.setState({ frontArray: data })
  }

  removeAnimal = (id) => {
    axios.delete(expressURL+'/'+id).then(res => {
      this.setState({ frontArray: res.data })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Luke's Animal Sanctuary</h1>
          <p className="App-Subtitle">Because shelter sounds worse.</p>
        </header>
        <div className="body-container">
          <Animal frontArray={this.state.frontArray} updateArrayState={this.updateArrayState} removeAnimal={this.removeAnimal}/>
          <Animaladd addAnimal={this.addAnimal}/>
        </div>
      </div>
    );
  }
}

export default App;

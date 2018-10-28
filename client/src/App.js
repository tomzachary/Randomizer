import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

class App extends Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      username: '',
      rarityEnum: ''
    }
  }

  handleClick() {
    var requestURL = '/src/config/items.json';
    var request = new XMLHttpRequest();
    request.onload = function() {
      console.log(request.response);
    };
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    // axios.get('http://96.42.71.31:3000/createItem')
    // .then(response => this.setState({username: JSON.stringify(response.data)}))
  }

  render() {
    return (
      <div className='button_container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.username}</p>
      </div>
    );
  }
}

export default App;


// {
//   "_id": "5bd4cb4d3ddf2c42a0f612cf",
//   "name": "Magic Fists",
//   "description": "Some random weapon",
//   "property": "finesse",
//   "damage": "1d6 piercing",
//   "weight": "5 lbs",
//   "modifier": 2,
//   "powerPoints": 1,
//   "__v": 0
// }
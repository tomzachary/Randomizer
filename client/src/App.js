import React, { Component } from 'react';
import './App.css';
import Data from './config/items.json'

import axios from 'axios'

class App extends Component {

    constructor () {
      super();
      this.handleClick = this.handleClick.bind(this);

      this.state = {
        items: [],
        selectedItem: '',
        createdItem: ''
      }
    }

  componentDidMount() {
      let items = Data.rarity.map(item => { 
          console.log(JSON.stringify(item));
          return {value: item.value, display: item.display} 
      });
      this.setState({ items: [{value: '', display: '(Select any rarities)'}].concat(items) });
  }

  handleClick() {
    this.setState({username: JSON.stringify(Data)})
    axios.get('http://96.42.71.31:3000/createItem?' + this.state.selectedItem.toLocaleLowerCase())
    .then(response => this.setState({createdItem: JSON.stringify(response.data)}))
  
  }

  render() {
    return (
      <div>
        <div className='button_container'>
          <button className='button' onClick={this.handleClick}>Click Me</button>
          <p>{this.state.createdItem}</p>
        </div>
        <div>
          <select value={this.state.selectedItem} 
                  onChange={(e) => this.setState({selectedItem: e.target.value})}>
            {this.state.items.map((item) => <option key={item.value} value={item.value}>{item.display}</option>)}
          </select>
        </div>
      </div>
    )
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
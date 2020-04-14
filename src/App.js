import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';
import { SearchBox } from './components/search-box/search-box';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchQuery: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // handleChange = e => this.setState({ searchQuery: e.target.value })
  handleChange(e) {
    this.setState({ searchQuery: e.target.value })
  }

  render() {
    const { monsters, searchQuery } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
      <div className="App">
        <h1>Pets Rolodex</h1>
        <SearchBox
          placeholder='search pets'
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

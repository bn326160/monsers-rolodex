import React, {Component} from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

import {CardList} from './components/card-list/card-list.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this); // Set context in JavaScript to pass the context
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  /*handleChange(e) {
    this.setState({searchField: e.target.value})
  }*/

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }; // Bind not required for arrow function, as they get lexical scoping = bind to context where they were defined

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monster' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

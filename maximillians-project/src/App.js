import React, { Component, setState } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "marjorie", age: 18 },
      { name: 'nat', age: 29 }
    ],
  }

  switchNameHandle = () => {
    console.log('cliquei')
    //DON'T DO THIS : this.state.persons[0].name = 'Suelen'
    this.setState({
      persons: [
        { name: "nala", age: 25 },
        { name: 'nat', age: 29 }
      ],
    })
  }

  nameChangeHandle = (event) => {
    this.setState({
      persons: [
        { name: "ellen", age: 25 },
        { name: event.target.value, age: 22 }
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button onClick={() => this.switchNameHandle.bind(this, 'Marjorie')}>Click me</button>
        </div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.switchNameHandle.bind(this, 'Marj')}
          onchange={this.nameChangeHandle}></Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;

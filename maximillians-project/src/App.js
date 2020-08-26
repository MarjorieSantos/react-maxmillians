import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'aaafaf', name: "marjorie", age: 18 },
      { id: 'asafdf', name: 'nat', age: 29 }
    ],
    showPersons: false
  }

  switchNameHandle = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: newName, age: 29 }
      ],
    })
  }

  nameChangeHandle = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person
    //outra forma 
    // const person = Object.assign({}, this.state.persons[personIndex])

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons.slice()];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgroungColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              onchange={(event) => this.nameChangeHandle(event, person.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>testando botões e inputs</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Names</button>
        {persons}
      </div>
    );
  }
}

export default App;

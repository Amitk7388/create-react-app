import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 37 },
      { name: "Manu", age: 29 },
      { name: "stephnie", age: 37 },
    ],
    showPerson: false
  }

  swithcNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Manu", age: 29 },
        { name: "stephnie", age: 37 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "max", age: 25 },
        { name: event.target.value, age: 29 },
        { name: "stephnie", age: 37 },
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid black",
      padding: "8px",
      corsor: "pointer"
    }

    let persons = null
    if (this.state.showPerson) {
      console.log("if condition")
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              console.log("here is ther persons", person)
              return <Person 
              name = {person.name} 
              age = {person.age}
              />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi I am Amit kumar sahu Lecture 4.6</h1>
        <p>My name is amit kumar sahu "clas no 07"</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }

}

export default App;

import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from "radium"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {id: 1, name: "Max", age: 37 },
      {id: 2, name: "Manu", age: 29 },
      {id: 3,  name: "stephnie", age: 37 },
    ],
    showPerson: false
  }

  
  deletePersonHandler = (personIndex) => {
    console.log("deletePerson handler calling")
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({persons: persons})

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    console.log("PersonIndex", personIndex)

    const person = {
      ...this.state.persons[personIndex]
    }
    console.log("person", person)

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person
    console.log("newPersons", persons)

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid black",
      padding: "8px",
      corsor: "pointer",
      ":hover":{
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    let persons = null
    if (this.state.showPerson) {
      console.log("if condition")
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              console.log("here is ther persons", person)
              return <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name} 
              age = {person.age}
              onChanged = {(event) => {this.nameChangeHandler(event, person.id)}}
              />
            })
          }
        </div>
      )
      style.backgroundColor = "red"
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      }
    }

    const classes = []
    if(this.state.persons.length <= 2){
      classes.push("red")
    }
    if(this.state.persons.length <= 1){
      classes.push("bold")
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi I am Amit kumar sahu Lecture 4.6</h1>
        <p className = {classes.join(" ")}>My name is amit kumar sahu "clas no 07"</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }

}

export default Radium(App);

import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component { 
  state = {
    persons : [
      {name : "Max", age : 37},
      {name : "Manu", age : 29},
      {name : "stephnie", age : 37},
    ]
  }

  swithcNameHandler = (newName) => {
    this.setState({
      persons : [
        {name : newName, age : 25},
        {name : "Manu", age : 29},
        {name : "stephnie", age : 37},
      ] 
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name : "max", age : 25},
        {name : event.target.value, age : 29},
        {name : "stephnie", age : 37},
      ] 
    })
  }

  render() {
    const style = {
      backgroundColor : "white",
      font: "inherit",
      border: "1px solid black",
      padding: "8px",
      corsor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hi I am Amit kumar sahu</h1>
        <p>My name is amit kumar sahu "clas no 07"</p>
        <button style= {style} onClick ={ () => this.swithcNameHandler("Kushboo") }>Switch Name</button>
        <Person
         name = {this.state.persons[0].name} 
         age = {this.state.persons[0].age} >
         </Person>
        <Person
         name = {this.state.persons[1].name} 
         age = {this.state.persons[1].age} 
         onlcick = {this.swithcNameHandler.bind(this, "Max")}
         onChanged = {this.nameChangeHandler} >My Hobbies: Racing
         
         </Person>
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age} >

        </Person>
      </div>
    );
  }
  
}

export default App;

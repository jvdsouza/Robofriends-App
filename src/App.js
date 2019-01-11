import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import { robots } from './robots'; //obtain the robots.js file to pass into
                                  //CardList.js

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots, //initial values for state
      searchfield: '' //initial value for searchfield in state
    } //end state
  } //end constructor

  //anytime you make a method in a component, dont use methodName(parameters) {}
  //instead use methodName = (parameters) => {} in react
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //setState comes with React
    //always use setState when changing state properties. only use
    //this.state.property if you're only accessing the property
    // console.log(event.target.value);
    // console.log(filteredRobots)
  }

  render() {
        const filteredRobots = this.state.robots.filter(robot => {
          return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });

      return(
      <div className="tc">
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/> {/* give to CardList the robots.js file as robots from the state as above in the constructor */}
        {/*was <CardList robots={this.state.robots}/>*/}
      </div>
    );

  } //end render
} //end App class

export default App;

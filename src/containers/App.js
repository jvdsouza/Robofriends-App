import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
// import { robots } from './robots'; //obtain the robots.js file to pass into
                                  //CardList.js

class App extends Component {
  constructor() {
    super()
    this.state = { //having a state creates smart components
      robots: [], //initial values for state
      searchfield: '' //initial value for searchfield in state
    } //end state
  } //end constructor

  componentDidMount() { //part of react so dont use arrow notation
    fetch('https://jsonplaceholder.typicode.com/users') //obtain json data
      .then(response => {
         return response.json();
      })
      .then(users => {
        this.setState({ robots: users }) //filter the users from json data into the robots state value
    });

  }
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
    const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      if(!robots.length){ //if the browser is still loading the users from the api
        return <h1>Loading</h1>
      } else{
        return(
        <div className="tc">
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll> {/*having CardList as a child for the Scroll tag automatically passes in all the props of CardList into scroll via props.children or parameterInput.children*/}
            <CardList robots={filteredRobots}/> {/* give to CardList the robots.js file as robots from the state as above in the constructor */}
            {/*was <CardList robots={this.state.robots}/>*/}
          </Scroll>
        </div>
    );
  }

  } //end render
} //end App class

export default App;

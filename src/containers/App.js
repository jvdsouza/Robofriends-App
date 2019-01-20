import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
// import { robots } from './robots'; //obtain the robots.js file to pass into
                                  //CardList.js

import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => { //what piece of state do i need to listen to and dispatch it to props
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
    //what needs to be brought here to be used
  }
}

const mapDispatchToProps = (dispatch) => { //tell what props dispatch should listen to that are actions that need to get dispatched
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots()(dispatch)
  } //send it to the actions then the reducers
}

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = { //having a state creates smart components
  //     robots: [], //initial values for state
  //     //searchfield: '' //initial value for searchfield in state
  //   } //end state
  // } //end constructor

  componentDidMount() { //part of react so dont use arrow notation
    // fetch('https://jsonplaceholder.typicode.com/users') //obtain json data
    //   .then(response => {
    //      return response.json();
    //   })
    //   .then(users => {
    //     this.setState({ robots: users }) //filter the users from json data into the robots state value
    // });
    this.props.onRequestRobots();
  }
  //anytime you make a method in a component, dont use methodName(parameters) {}
  //instead use methodName = (parameters) => {} in react
  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value }); //setState comes with React
  //   //always use setState when changing state properties. only use
  //   //this.state.property if you're only accessing the property
  //   // console.log(event.target.value);
  //   // console.log(filteredRobots)
  // }

  render() {
    // const { robots /*, searchfield*/ } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })
      if(isPending){ //if the browser is still loading the users from the api
        return <h1>Loading</h1>
      } else{
        return(
        <div className="tc">
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll> {/*having CardList as a child for the Scroll tag automatically passes in all the props of CardList into scroll via props.children or parameterInput.children*/}
            <ErrorBoundary>
              <CardList robots={filteredRobots}/> {/* give to CardList the robots.js file as robots from the state as above in the constructor */}
            {/*was <CardList robots={this.state.robots}/>*/}
            </ErrorBoundary>
          </Scroll>
        </div>
    );
  }

  } //end render
} //end App class

export default connect(mapStateToProps, mapDispatchToProps)(App);

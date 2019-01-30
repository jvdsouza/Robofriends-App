import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
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
    onRequestRobots: () => dispatch(requestRobots())
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
    return(
      <MainPage {...this.props}/>
    );
  } //end render
} //end App class

export default connect(mapStateToProps, mapDispatchToProps)(App);

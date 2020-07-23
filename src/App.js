import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// filters out the changes relevant to a particular component:
// in mapStateToProps() we specify exactly which slice of the state we want to provide to our component
const mapStateToProps = (state) => {
  return { items: state.items };
};

// CONNECT: a function that listens to every change in the store
// it is synced up to our store
// When a change occurs, it calls a function that we write called mapStateToProps()
export default connect(mapStateToProps)(App);


// we have to say which component in our app we are providing this data to:
// connect(mapStateToProps)(App)

//this entire connect() method returns a new App component (with the correct data)

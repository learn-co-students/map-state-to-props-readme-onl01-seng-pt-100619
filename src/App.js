import React, { Component } from 'react';
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

const mapStateToProps = (state) => {
  return { items: state.items };
}; //specify which slice of the state to provide to component
// (state.items) and allow component to have access to them through a prop called items
 
export default connect(mapStateToProps)(App); //synced up to our store, listening to each change in the state that occurs. 

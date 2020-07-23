import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ReactDOM.render(
//   <App store={store}/>,
//   document.getElementById('root')
// );


// Provider is a component, does 2 main things:
// 1. it will alert our Redux app when there has been a change in state, and this will re-render our React app.
// We passed our store instance into Provider as a prop,
// making it available to all of our other components.

// WRAPPING OUR APP IN PROVIDER:
// we gave our components the ability to be connected to the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, /* code change */
  document.getElementById('root')
);

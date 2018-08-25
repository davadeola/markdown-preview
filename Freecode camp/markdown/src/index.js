import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import contentReducer from './reducers/content-reducer.js';
import markedUpContent from './actions/markedUpContent.js';
import clearMarkUp from './actions/clearMarkUp.js'

//declare the store
const store = createStore(contentReducer);

//define mapStateToProps which returns my state as a prop marked
const mapStateToProps = (state) => {
  return {marked: state}
}

//Define the actions that I want to dispatch to all my components
const mapDispatchToProps = (dispatch) => {
  return {
    markedUpContent: (content) => {
      dispatch(markedUpContent(content));
    },

    clearMarkUp: ()=>{
      dispatch(clearMarkUp());
    }
  }
}

//Container returns a connected App component which connects my App component to the Redux store
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<Provider store={store}>
  <Container/>
</Provider>, document.getElementById('root'));
registerServiceWorker();

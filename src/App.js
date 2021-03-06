import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Form from './components/form';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Header/>
        <Form/>
      </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import SearchBar from './rentapp/project/search/SearchBar';


class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default App;

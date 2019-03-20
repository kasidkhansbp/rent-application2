import React, { Component } from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import SearchBar from './rentapp/project/views/search/SearchBar';
import SearchResultComponent from './rentapp/project/views/search/SearchResultComponent';


class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />

          <SearchResultComponent />
        </header>
      </div>
    );
  }
}

export default App;

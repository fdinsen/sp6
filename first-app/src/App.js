import logo from './logo.svg';
import './App.css';
import NamesTable from './NamesTable';
import React, { Component } from 'react';

const names = [{ 'fname': 'Anders', 'lname': 'Henriksen' }, { 'fname': 'Britta', 'lname': 'Albertsen' }, { 'fname': 'Kalle', 'lname': 'Fredborg' }, { 'fname': 'Frederik', 'lname': 'Dinsen' }];

function App() {
  return (
    <div className="App">
      <NamesTable names={names}/>
    </div>
  );
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default App;

import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchAny from './util';

function App() {
  return (
    <div className="App">
      <Parent/>
      <GetBooks/>
    </div>
  );
}

function GetBooks() {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetchAny("http://localhost:4000/books", setBooks);
  }, []);
  return (
    <DisplayBooks books={books}/>
  );
}

function DisplayBooks(props) {
  function createList(books) {
    return books.map(e => {
      return <tr key={e.id}><td>{e.title}</td><td>{e.author}</td><td>{e.rating}</td><td>{e.year_published}</td></tr>
    });
  }
  return (
    <table>
      <thead><tr><th>Title</th><th>Author</th><th>Rating</th><th>Year Published</th></tr></thead>
      <tbody>
        {createList(props.books)}
      </tbody>
    </table>
  )

}

function Parent() {
  const [degreesF, setDegreesF] = useState(0);
  const update = (event) => {
    const degrees = event.target.value;
    setDegreesF(degrees);
  } 
  return (
    <div>
      <ChildTextField update={update}/>
      <ChildDisplayDegrees degrees={degreesF}/>
    </div>
  )
}

function ChildTextField(props) {
  return (
    <div>
      <input type="text" onChange={props.update} placeholder="Enter degrees in F"/>
    </div>
  )
}

function ChildDisplayDegrees(props) {
  const degreesF = props.degrees;
  const degreesC = (degreesF - 32) *5/9;
  return (
    <div>
      <p>{degreesF}F is {degreesC}C</p>
    </div>
  )
}

export default App;

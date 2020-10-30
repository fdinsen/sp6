import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <StateExample />
      <InputList />
      <LoadFromAPI />
    </div>
  );
}

export default App;

function InputList() {
  const [myValue, setMyValue] = useState("");
  const [list, setList] = useState([]);
  const listOfInputs = list.map(e => {
    return <li key={e}>{e}</li>
  })

  return (
    <div>
      <form>
        <input type="text" id="myInput" placeholder="Write something" value={myValue} onChange={(event) => setMyValue(event.target.value)}></input>
        <input type="submit" onClick={saveInput} value="Save"></input>
        <button onClick={(e) => { e.preventDefault(); setList([]) }}>Clear</button>
      </form>
      <ul>
        {listOfInputs}
        <li>{myValue}</li>
      </ul>
    </div>
  );

  function saveInput(e) {
    e.preventDefault();
    console.log(myValue.length);
    if (myValue.length <= 0 || list.indexOf(myValue) != -1) {
      console.log("Skipped");
    } else {
      list.push(myValue);
      setMyValue("");
    }
  }
}

function LoadFromAPI() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json()).then(data => {
      setList(data);
    })
  }, []);

  const table = list.map(elem => {
    console.log("hi");
    return <tr key={elem.id}><td>{elem.id}</td><td>{elem.userId}</td><td>{elem.title}</td></tr>
  })

  return (
    <div>
      <table>
        <thead><tr><th>ID</th><th>User ID</th><th>Title</th></tr></thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  )
}

//State hook to persist data within an otherwise stateless component
function StateExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <p>You clicked the button {count} times</p>
    </div>
  )
}

//Same as above, but for classes. Quite a bit more complicated, so deprecated
class StateExampleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Me!</button>
        <p>You clicked the button {this.state.count} times</p>
      </div>
    )
  }
}

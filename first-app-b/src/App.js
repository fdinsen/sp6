import logo from './logo.svg';
import './App.css';
import NamesTable from './NamesTable';
import NamesTableClass from './NamesTableClass';

const names = [{ 'fname': 'Anders', 'lname': 'Henriksen' }, { 'fname': 'Britta', 'lname': 'Albertsen' }, { 'fname': 'Kalle', 'lname': 'Fredborg' }, { 'fname': 'Frederik', 'lname': 'Dinsen' }];


function App() {
  return (
    <div className="App">
      <NamesTable names={names}/>
      <NamesTableClass names={names}/>

    </div>
  );
}



export default App;

import logo from './logo.svg';
import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person, {males, females} from "./file2";
import MultiWelcome from './file3';
 
const {firstName, email} = person;
console.log(...males, ...females);
console.log(...males, "Kurt", "Helle", ...females, "Tina");

const personV2 = {...person, phone: 123456, friends: [...males, ...females]};
console.log(personV2);

function App() {
  return (
    <div className="App">
      <h2>Ex 1</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <h2>Ex 2</h2>
      <p>First Name: {firstName}</p>
      <p>Email: {email}</p>
      <h2>Ex 3</h2>
      <MultiWelcome/>
    </div>
  );
}

export default App;

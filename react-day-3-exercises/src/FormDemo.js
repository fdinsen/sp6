import React, {useState} from "react";
const NameForm = () => {
  const [name,setName] = useState("");
  function handleChange(event) {
      setName(event.target.value);
  }
  function handleSubmit(event) {
    alert(`A name was submitted: ${name}`);
    event.preventDefault();
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}

import persons from './file2';

function Welcomes(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default function() {
    return (
        <div>
            <Welcomes name="Sara" />
            <Welcomes name="Cahal" />
            <Welcomes name="Edith" />
            <WelcomePerson person={persons}/>
        </div>
    );
}

function WelcomePerson(props) {
    return (
        <div> 
            <p>{props.person.firstName}</p>
            <p>{props.person.lastName}</p>
            <p>{props.person.email}</p>
        </div>
    );
}
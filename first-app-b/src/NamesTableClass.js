import React, { Component } from 'react';

class NamesTableClass extends React.Component {
    render() {
      return (<table>
        <thead><tr><th>First Name</th><th>Last Name</th></tr></thead>
        <tbody>
            {this.props.names.map(name => {
                return (<tr><td>{name.fname}</td>
                <td>{name.lname}</td></tr>);
            })}
        </tbody>
      </table>);
    }
  }

export default NamesTableClass;
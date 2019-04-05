import React, { Component } from 'react'

export default class People extends Component {
  render() {
    const { people } = this.props

    return (
      <ul>
        {
          Array.from(people || []).map((person) => (
            <li key={person.documentNumber}>
              First name: { person.firstname }
              {' - '}
              Last name: { person.lastname }
              {' - '}
              {person.documentType}: { person.documentNumber }
              {' - '}
              email: { person.email }
            </li>
          ))
        }
      </ul>
    )
  }
}
import React, { Component } from 'react'

export class Person extends Component {
  render() {
    const { name, surname } = this.props

    return (
      <div>
        { name } { surname }
      </div>
    )
  }
}

export const Profile = () => <Person name='Tincho' surname='Brecito' />

export default {
  Person,
  Profile,
}
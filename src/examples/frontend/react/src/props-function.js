import React from 'react'

export const Person = props => (
  <div>
    { props.name } { props.surname }
  </div>
)

export const Profile = () => (
  <Person name='Tincho' surname='Brecito' />
)

export default {
  Person,
  Profile,
}

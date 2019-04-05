import React, { Component, Fragment } from 'react'

class Title extends Component {
  render() {
    const { children, title } = this.props

    return (
      <Fragment>
        <h1>
          { title }
        </h1>
        { children }
      </Fragment>
    )
  }
}

export default class Person extends Component {
  render() {

    return (
      <Title title='Persona'>
        <h2>
          Lucas
        </h2>
      </Title>
    )
  }
}
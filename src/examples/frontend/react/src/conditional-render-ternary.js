import React, { Component, Fragment } from 'react'

export default class Conditional extends Component {
  constructor(props) {
    super(props)

    this.displayName = 'Conditional'
  }

  render() {
    const { error } = this.props

    return (
      error ? (
        <Fragment>
          <h1>
            Error in component '{ this.displayName }'
          </h1>
          <p>
            { error }
          </p>
        </Fragment>
      ) : (
        <h1>
          Everithing it's ok
        </h1>
      )
    )
  }
}

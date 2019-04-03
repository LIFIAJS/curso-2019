import React, { Component } from 'react'

export default class Conditional extends Component {
  render() {
    const { hasError } = this.props

    if (hasError()) {
      return (
        <h1>
          Error in component { this.displayName }
        </h1>
      )
    }

    /**
     * Logica de renderizado de la componente
     */

    return (
      <h1>
        Everithing it's ok
      </h1>
    )
  }
}
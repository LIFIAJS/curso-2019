class Conditional extends Component {
  render() {
    const { error } = this.props

    return (
      error ? (
        <h1>
          Error in component { this.displayName }
        </h1>
      ) : (
        <h1>
          Everithing it's ok
        </h1>
      )
    )
  }
}
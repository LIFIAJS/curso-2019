class Conditional extends Component {
  render() {
    const { show } = this.props

    return (
      show && (
        <h1>
          Show is true
        </h1>
      )
    )
  }
}
import React from 'react'
import ReactDOM from 'react-dom'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState(() => ({
      text: e.target.value
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
    
    const {
      text,
    } = this.state

    if (!text.length) {
      return
    }

    const newItem = {
      text,
      id: Date.now()
    }

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }

  render() {
    const {
      items,
      text,
    } = this.state

    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={text}
          />
          <button>
            Add #{items.length + 1}
          </button>
        </form>
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    const {
      items,
    } = this.props

    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
)
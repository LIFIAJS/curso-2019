import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {
      elements,
      onShow,
      onUpdate,
      onDelete
    } = this.props;

    return (
      <ul>
        {Array.from(elements || []).map((elem, key) => (
          <li key={`${elem.name}-${key}`}>
            {elem.name}
            {' '}
            <button onClick={onShow}>show</button>
            <button onClick={onUpdate}>update</button>
            <button onClick={onDelete}>delete</button>
            <button onClick={() => console.log(elements[key])}>console</button>
          </li>
        ))}
      </ul>
    );
  }
}

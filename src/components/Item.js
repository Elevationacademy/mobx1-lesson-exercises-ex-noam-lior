import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    const newLocation = prompt("Please enter item's new location", "");
    this.props.store.editItem(e.target.name, newLocation)
  }
  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" value={item.name} />{item.location}
        <button className="editButton" onClick={this.editItem}></button>
        <button onClick={this.deleteItem}></button>
      </div>)
  }
}

export default Item
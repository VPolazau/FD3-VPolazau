import React, { Component } from 'react'
import EditForm from '../edit-form/edit-form'

import Item from '../item'
import ViewInfo from '../view-info'

import './item-list.css'

export default class ItemList extends Component {
  state = {
    selectedItem: this.props.selectedItem,
    newItem: this.props.newItem,
    blockItems: false,
    workMode: 1,
  }

  nodes = () => {
    const { items, onItemDeleted } = this.props
    return items.map(item => (
      <Item
        body={item.body}
        selected={item.selected}
        itemId={item.id}
        key={item.id}
        onItemSelected={this.onItemSelected}
        onItemDeleted={onItemDeleted}
        onEdit={this.onEdit}
        blockItems={this.state.blockItems}
      />
    ))
  }

  onEdit = id => {
    this.setState({ workMode: 2 })
    return this.props.onEdit(id)
  }

  onItemSelected = id => {
    if (this.state.blockItems) return
    this.setState({ workMode: 1 })
    return this.props.onItemSelected(id)
  }

  componentDidUpdate(oldProps, oldState) {
    const { selectedItem, newItem } = this.props
    if (oldProps.selectedItem !== this.props.selectedItem) this.setState({ selectedItem })
    if (oldProps.newItem !== this.props.newItem) this.setState({ newItem })
  }

  fildChanged = isNewItem => {
    if (isNewItem) this.setState({ workMode: 3, blockItems: true })
    else this.setState({ workMode: 2, blockItems: true })
    return this.props.fildChanged()
  }

  onFormSave = (body, id) => {
    this.setState({
      workMode: 1,
      blockItems: false,
    })
    return this.props.onFormSave(body, id)
  }

  onAddNewItem = () => {
    this.setState({ workMode: 3, blockItems: true })
    return this.props.onAddNewItem()
  }

  disabled = () => {
    return this.state.blockItems ? 'disabled' : ''
  }

  render() {
    const { selectedItem, workMode, newItem } = this.state

    return (
      <div className='item-list table'>
        <div className='row'>
          <span className='key'>Online Store</span>
        </div>
        <div className='div__btn'>
          <button
            className='btn-new'
            onClick={this.onAddNewItem}
            disabled={this.disabled()}
          >
            New Item
          </button>
        </div>
        {workMode === 1 && selectedItem && <ViewInfo body={selectedItem.body} />}
        {workMode === 2 && selectedItem && (
          <EditForm
            body={selectedItem.body}
            id={selectedItem.id}
            onFormSave={this.onFormSave}
            fildChanged={this.fildChanged}
            isNewItem={false}
          />
        )}
        {workMode === 3 && newItem.body && (
          <EditForm
            body={newItem.body}
            id={newItem.id}
            onFormSave={this.onFormSave}
            fildChanged={this.fildChanged}
            isNewItem={true}
          />
        )}
        <div className='container'>{this.nodes()}</div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './edit-form.css'

export default class EditForm extends Component {
  text = 'Please, fill the field. Value must be a '
  state = {
    body: {},
    id: null,
  }

  onStopPropagation = event => {
    event.stopPropagation()
  }

  //дописать проверку на валидность
  // ------------------------------------------
  onChangeField = (event, fieldName) => {
    this.setState(({ body }) => {
      const newBody = { ...body, [fieldName]: event.target.value }
      return { body: newBody }
    })
  }

  componentDidMount() {
    this.setState({ body: this.props.body, id: this.props.id })
  }

  render() {
    const { onFormSave, id } = this.props
    const { title, imageUrl, price, quantity } = this.state.body
    return (
      <React.Fragment>
        <div className='edit_info' onClick={this.onStopPropagation}>
          <div className='edit_imageUrl'></div>
          Image(url) : {!imageUrl && <span className='ban'>{this.text} string!</span>}
          <input
            type='text'
            className='edit_input'
            defaultValue={imageUrl}
            onChange={e => this.onChangeField(e, 'imageUrl')}
          ></input>
          <div className='edit_title'></div>
          Title : {!title && <span className='ban'>{this.text} string!</span>}
          <input
            type='text'
            className='edit_input'
            defaultValue={title}
            onChange={e => this.onChangeField(e, 'title')}
          ></input>
          <div className='edit_price'></div>
          Price : {!price && <span className='ban'>{this.text} number!</span>}
          <input
            type='text'
            className='edit_input'
            defaultValue={price}
            onChange={e => this.onChangeField(e, 'price')}
          ></input>
          <div className='edit_quantity'></div>
          Stock : {!quantity && <span className='ban'>{this.text} number!</span>}
          <input
            type='text'
            className='edit_input'
            defaultValue={quantity}
            onChange={e => this.onChangeField(e, 'quantity')}
          ></input>
        </div>
        <br></br>
        <div className='buttons_edit'>
          <button className='save form-btns' onClick={() => onFormSave(this.state.body, id)}>save</button>
          <button className='close form-btns'>close</button>
        </div>
      </React.Fragment>
    )
  }
}


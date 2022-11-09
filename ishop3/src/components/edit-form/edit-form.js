import React, { Component } from 'react'
import './edit-form.css'

export default class EditForm extends Component {
  errorTxt = 'Please, fill the field. Value must be a'
  state = {
    body: {},
    id: null,
    isNewItem: this.props.isNewItem,
    ban: false,
    banImg: '',
    banTitle: '',
    banPrice: '',
    banQuantity: '',
  }

  onChangeField = (event, fieldName) => {
    this.props.fildChanged(this.state.isNewItem)
    this.setState(({ body }) => {
      const newBody = { ...body, [fieldName]: event.target.value }
      return { body: newBody }
    }, this.validAll)
  }

  validAll = () => {
    const { body } = this.state

    const banImg = body.imageUrl.length ? '' : `${this.errorTxt} string!`
    const banTitle = body.title.length ? '' : `${this.errorTxt} string!`
    const banPrice = (body.price.length == 0 || isNaN(body.price)) ? `${this.errorTxt} number!` : ''
    const banQuantity = (body.quantity.length == 0 || isNaN(body.quantity)) ? `${this.errorTxt} number!` : ''

    this.setState({ banImg, banTitle, banPrice, banQuantity })
    if (banImg.length || banTitle.length || banPrice.length || banQuantity.length) {
      this.setState({ ban: true })
    } else {
      this.setState({ ban: false })
    }
  }

  disabled = () => {
    return this.state.ban ? 'disabled' : ''
  }

  componentDidMount() {
    if (this.props.isNewItem) {
      this.setState({
        isNewItem: true,
        ban: true,
        banImg: `${this.errorTxt} string!`,
        banTitle: `${this.errorTxt} string!`,
        banPrice: `${this.errorTxt} number!`,
        banQuantity: `${this.errorTxt} number!`,
      })
    }
    this.setState({ body: this.props.body, id: this.props.id })
  }

  componentDidUpdate(oldProps, oldState) {
    const { body, isNewItem } = this.props
    if (oldProps.body !== body) this.setState({ body, id: body.id })
    if (oldProps.isNewItem !== isNewItem)
      this.setState({
        isNewItem,
        ban: true,
        banImg: `${this.errorTxt} string!`,
        banTitle: `${this.errorTxt} string!`,
        banPrice: `${this.errorTxt} number!`,
        banQuantity: `${this.errorTxt} number!`,
      })
  }

  render() {
    const { onFormSave, id, onFormClose } = this.props
    const { body, banImg, banTitle, banPrice, banQuantity, isNewItem } = this.state
    const { title, imageUrl, price, quantity } = body
    return (
      <div className='edit-form'>
        <div className='edit_info'>
          <div className='info'>
            <div className='imageUrl'></div>
            Image(url) :<div className='title'></div>
            Title :<div className='price'></div>
            Price :<div className='quantity'></div>
            Stock :
          </div>
          <div className='inputs'>
            <input
              type='text'
              className='input_imageUrl'
              defaultValue={imageUrl}
              onChange={e => this.onChangeField(e, 'imageUrl')}
            ></input>
            <input
              type='text'
              className='input_title'
              defaultValue={title}
              onChange={e => this.onChangeField(e, 'title')}
            ></input>
            <input
              type='text'
              className='input_price'
              defaultValue={price}
              onChange={e => this.onChangeField(e, 'price')}
            ></input>
            <input
              type='text'
              className='input_quantity'
              defaultValue={quantity}
              onChange={e => this.onChangeField(e, 'quantity')}
            ></input>
          </div>
          <div className='errors'>
            <span className='ban img'>{banImg}</span>
            <span className='ban title'>{banTitle}</span>
            <span className='ban price'>{banPrice}</span>
            <span className='ban quantity'>{banQuantity}</span>
          </div>
        </div>
        <div className='buttons_edit'>
          <button
            className='save btn'
            onClick={() => onFormSave(body, id)}
            disabled={this.disabled()}
          >
            {isNewItem ? 'add' : 'save'}
          </button>
          <button className='close btn' onClick={onFormClose}>close</button>
        </div>
      </div>
    )
  }
}

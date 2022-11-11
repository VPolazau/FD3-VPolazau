import React from 'react'
import PropTypes from 'prop-types'

import './VotesQuestion.css'

class VotesQuestion extends React.Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
  }

  state = {
    question: this.props.question,
  }

  // Динамическая переменная
  newTextRef = null

  // в атрибуте ref нужного тега будем указывать ФУНКЦИЮ
  setRef = ref => {
    this.newTextRef = ref
  }

  setNewText = () => {
    if (this.newTextRef) {
      // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
      let newText = this.newTextRef.value
      this.setState({ question: newText })
    }
  }

  render() {
    return (
      <div>
        {/* в инпуте нет onClick={} и defaultValue поэтому оставляем ссылку ref и прокидываем в неё функцию */}
        <input type='text' defaultValue='новый текст вопроса' ref={this.setRef} />
        {/* на кнопке теперь будет ссылка на прошлый импут, у которого можна взять .value */}
        <input type='button' value='задать' onClick={this.setNewText} />
        <div className='VotesQuestion'>{this.state.question}</div>
      </div>
    )
  }
}

export default VotesQuestion

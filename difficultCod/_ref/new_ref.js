import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
  };
  
  // в атрибуте ref нужного тега будем указывать вот эту переменную-ссылку
  setRef = React.createRef();

  state = {
    question: this.props.question,
  };

  // аналогично со ссылкой
  setNewText = () => {
    if ( this.setRef.current ) {
      let newText=this.setRef.current.value;
      this.setState({question:newText});
    }
  };

  render() {
    return (
      <div>
        {/* в этом случае мы присваиваем не функцию а объект React.createRef() */}
        <input type="text" defaultValue="новый текст вопроса" ref={this.setRef} />
        {/* это работает так же */}
        <input type="button" value="задать" onClick={this.setNewText} />
        <div className='VotesQuestion'>{this.state.question}</div>
      </div>
    );
  }

}

export default VotesQuestion;

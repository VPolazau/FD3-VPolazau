import React, { Component } from 'react'
import FilterInput from '../filter-input'
import Output from '../output'
import './app.css'

export default class App extends Component {
  state = {
    mas: [
      'california',
      'everything',
      'aboveboard',
      'washington',
      'basketball',
      'weathering',
      'characters',
      'literature',
      'contraband',
      'appreciate',
    ],
    term: '',
    check: false,
  }

  onSearchChange = term => {
    this.setState({ term })
  }

  onCheckChange = () => {
    this.setState(({ check }) => {
      return { check: !check }
    })
  }

  reset = () => {
    this.setState({term: '', check: false})
  }

  search = (mas, term) => {
    if (term.length === 0) return mas
    return mas.filter(item => {
      return item.indexOf(term) > -1
    })
  }

  ABCfilter = (mas, check) => {
    if (!check) return mas
    const newMas = JSON.parse(JSON.stringify(mas))
    return newMas.sort()
  }

  render() {
    const { mas, term, check } = this.state

    const visibleText = this.ABCfilter(this.search(mas, term), check)

    return (
      <div className='app container'>
        <FilterInput
          resetInfo={{checked: check, inputText: term}}
          onSearchChange={this.onSearchChange}
          onCheckChange={this.onCheckChange}
          onResetChange={this.reset}
        />
        <Output mas={visibleText} />
      </div>
    )
  }
}

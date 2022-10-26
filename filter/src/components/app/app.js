import React, { Component } from 'react'
import FilterInput from '../filter-input'
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
    this.setState({ term: '', check: false })
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

  visibleText = () => {
    const { mas, term, check } = this.state
    const filteredMas = this.ABCfilter(this.search(mas, term), check)
    return filteredMas.join('\n')
  }

  render() {
    const { term, check } = this.state

    return (
      <div className='app container'>
        <FilterInput
          resetInfo={{ checked: check, inputText: term }}
          onSearchChange={this.onSearchChange}
          onCheckChange={this.onCheckChange}
          onResetChange={this.reset}
        />
        <textarea className='output' value={this.visibleText()} readOnly/>
      </div>
    )
  }
}

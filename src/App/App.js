import React, { Component } from 'react'

import Template from '../components/Template/Template'

import styles from './app.scss'

export default class App extends Component {
  state = {
    greeting: 'Hello World'
  }

  render() {
    return(
      <div className={styles.app}>
        <h1>React Starter</h1>
        <Template greeting={this.state.greeting} />
      </div>
    )
  }
}

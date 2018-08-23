import React, { Component, Fragment } from 'react'
import { Header, Footer } from './layout'
import Exercises from './exercises/Exercises'

class App extends Component {
  render() {
    return (
      <Fragment>
      	<Header />

      	<Exercises />
        
        <Footer />
      </Fragment>
    );
  }
}

export default App
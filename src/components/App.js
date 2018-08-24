import React, { Component, Fragment } from 'react'
import { Header, Footer } from './layout'
import Exercises from './exercises/Exercises'
import { muscles, exercises} from '../store'

class App extends Component {
  render() {
    return (
      <Fragment>
      	<Header />

      	<Exercises />
        
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App
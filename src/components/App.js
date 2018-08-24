import React, { Component, Fragment } from 'react'
import { Header, Footer } from './layout'
import Exercises from './exercises/Exercises'
import { muscles, exercises} from '../store'

console.log('muscles ', muscles)
console.log('exercises ', exercises)

class App extends Component {
	state = {
		exercises
	}

	
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
    }

  render() {
  	console.log('SHOW ', this.getExercisesByMuscles())

  	const exercises = this.getExercisesByMuscles()
    return (
      <Fragment>
      	<Header />

      	<Exercises exercises={exercises} />
        
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App
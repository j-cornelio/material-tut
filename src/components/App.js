import React, { Component, Fragment } from 'react'
import { Header, Footer } from './layout'
import Exercises from './exercises/Exercises'
import { muscles, exercises} from '../store'

console.log('muscles ', muscles)
console.log('exercises ', exercises)

class App extends Component {
	state = {
		exercises,
		category: 'legs'
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

	handleCategorySelected = category => {
		this.setState(({
			category
		}))
	}

  render() {
  	const exercises = this.getExercisesByMuscles(),
  	{ category } = this.state;

    return (
      <Fragment>
      	<Header />

      	<Exercises
      		category={category}
      		exercises={exercises} />
        
        <Footer 
        	category={category}
        	onSelect={this.handleCategorySelected}
        	muscles={muscles} />
      </Fragment>
    );
  }
}

export default App
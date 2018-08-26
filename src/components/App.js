import React, { Component, Fragment } from 'react'
import { Header, Footer } from './layout'
import Exercises from './exercises/Exercises'
import { muscles, exercises} from '../store'

// console.log('muscles ', muscles)
// console.log('exercises ', exercises)

class App extends Component {
	state = {
		exercises,
		category: 'legs',
		exercise: {}
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

	handleExerciseSelected = id => {
		this.setState( prevState  => ({ 
			exercise: prevState.exercises.find(ex => ex.id === id) 
		}))
	}
	

  render() {
  	const exercises = this.getExercisesByMuscles(),
  	{ category, exercise } = this.state;

    return (
      <Fragment>
      	<Header />

      	<Exercises
      		exercise={exercise}
      		category={category}
      		exercises={exercises}
      		onSelect={this.handleExerciseSelected} />
        
        <Footer 
        	category={category}
        	onSelect={this.handleCategorySelected}
        	muscles={muscles} />
      </Fragment>
    );
  }
}

export default App
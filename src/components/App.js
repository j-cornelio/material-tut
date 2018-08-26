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

	handleCategorySelect = category => {
		this.setState(({
			category
		}))
	}

	handleExerciseSelect = id => {
		this.setState( prevState  => ({ 
			exercise: prevState.exercises.find(ex => ex.id === id) 
		}))
	}
	
	handleExerciseCreate = exercise => {
		console.log('exercise ', exercise)
		this.setState(() => ({
			exercises: [
				...exercises,
				exercise
			]
		}))
	}

  render() {
  	const 
  		exercises = this.getExercisesByMuscles(),
  		{ category, exercise } = this.state;

    return (
      <Fragment>
      	<Header 
      		onExerciseCreate={this.handleExerciseCreate}
      		muscles={muscles} />

      	<Exercises
      		exercise={exercise}
      		category={category}
      		exercises={exercises}
      		onSelect={this.handleExerciseSelect} />
        
        <Footer 
        	category={category}
        	onSelect={this.handleCategorySelect}
        	muscles={muscles} />
      </Fragment>
    );
  }
}

export default App
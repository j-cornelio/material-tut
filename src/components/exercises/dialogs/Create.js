import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	FormControl: {
		width: 500
	} 
})

export default withStyles(styles) (class extends Component {
	state = {
		open: false,
		exercise: {
			title: '',
			description: '',
			muscles: ''
		}
	}

	handleToggle = () => {
		this.setState( prevState => ({
			open: !prevState.open
		}))
	}

	handleChange = name => ({ target: { value } })  => {
		this.setState( prevState => ({
			exercise: {
				...this.state.exercise,
				[name]: value
			}
		}))
	}

	handleSubmit = () => {
		const { exercise } = this.state

		this.props.onCreate({
			...exercise,
			id: exercise.title.toLowerCase().replace(/ /g, '-' )
		})

		this.setState({
			open: false,	
			exercise: {
				title: '',
				description: '',
				muscles: ''
			}
		})
	}

	render(){
		const { open, exercise: { title, description, muscles } } = this.state,
			{ classes, muscles: categories } = this.props;

		return (
			<Fragment>
				<Button variant="fab" onClick={this.handleToggle} mini>
					<AddIcon />
				</Button>

				<Dialog
		          open={open}
		          onClose={this.handleToggle}
		        >
		          <DialogTitle id="form-dialog-title">
		          	Create a new exercise
		          </DialogTitle>
		          <DialogContent>
		            <DialogContentText>
		            	Please fill the form below
		            </DialogContentText>
		            <form>
		            	<TextField
				          label="Title"
				          value={title}
				          onChange={this.handleChange('title')}
				          margin="normal"
				          className={classes.FormControl}
				        />
				        <br />
				        <FormControl className={classes.FormControl}>
				          <InputLabel htmlFor="muscles">
				          	muscles
				          </InputLabel>
				          <Select
				            value={muscles}
				            onChange={this.handleChange('muscles')}
				          >
				          	{categories.map( category => 
								<MenuItem key={category} value={category}>
									{category}
								</MenuItem>
				          	)}
				          </Select>
				        </FormControl>

				        <br />
		            	<TextField
		            	  multiline
		            	  rows="4"
				          label="Description"
				          value={description}
				          onChange={this.handleChange('description')}
				          margin="normal"
				          className={classes.FormControl}
				        />
		            </form>
		          </DialogContent>
		          <DialogActions>

		            <Button 
		            	color="primary" 
		            	onClick={this.handleSubmit} 
		            	variant="raised">	
		              Create
		            </Button>
		          </DialogActions>
		        </Dialog>
			</Fragment>
		)
	}
})
import React, { Fragment } from 'react'
import { 
    Grid, 
    Paper, 
    Typography, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemSecondaryAction,
    IconButton 
}                           from '@material-ui/core'
import { Delete } from '@material-ui/icons'

const styles = {
  Paper: { 
  	padding: 20, 
  	marginTop: 10, 
  	marginBottom: 10, 
  	height: 500, 
  	overflowY: 'auto' }
};

export default ({ 
    exercises, 
    category, 
    onSelect,
    onDelete,
    exercise: { 
        id, 
        title = 'Welcome!', 
        description = 'Please select an exercise from the left'
      } 
    }) => 
        <Grid container>
        	<Grid item md>
    			<Paper style={styles.Paper}>
					{exercises.map(([group, exercises]) => 
                        !category || category === group
                            ? <Fragment key={group}>
                                <Typography variant="headline" style={{textTransform: 'capitalize'}}>
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ id, title }) => 
                                        <ListItem button key={id}>
                                          <ListItemText 
                                            primary={title}
                                            onClick={() => onSelect(id)} />
                                           <ListItemSecondaryAction>
                                             <IconButton onClick={() => {
                                                onDelete(id)
                                             }}>
                                                <Delete />
                                             </IconButton>
                                                
                                           </ListItemSecondaryAction> 
                                        </ListItem>
                                    )}
                                  </List>
                              </Fragment>
                            : null
					)}
				</Paper>
        	</Grid>
        	<Grid item md>
    			<Paper style={styles.Paper}>
					<Typography variant="display1">
						{title}
					</Typography>
					<Typography 
						variant="subheading"
						style={{marginTop: 20}}
					>
						{description}
					</Typography>
				</Paper>
        	</Grid>
        </Grid>
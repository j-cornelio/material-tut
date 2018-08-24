import React from 'react'
import { Paper, Tabs  } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';



export default ({ muscles }) => 
  <Paper>
    <Tabs
    	value={2}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      {muscles.map( group => 
        <Tab label={group} />
      )}
    </Tabs>
  </Paper>
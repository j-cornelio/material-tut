import React from 'react'
import { Paper, Tabs  } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';



export default ({ muscles, category, onSelect }) => {
  const index = category 
      ? muscles.findIndex(group => group === category) + 1 : 0;

  return <Paper>
    <Tabs
      value={ index }
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />

      {muscles.map( group => 
        <Tab label={group} key={group} />
      )}
    </Tabs>
  </Paper>  
}

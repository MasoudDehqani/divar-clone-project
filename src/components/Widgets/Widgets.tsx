import { Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { DivarContext } from '../context/divarContext'
import ScrolledWidgets from './ScrolledWidgets'
import Widget from './Widget'

const Widgets = () => {

  const { data } = useContext(DivarContext)

  return (
    <Grid spacing={2} direction="row" container style={{width: "70vw", height: "2376px", marginTop: "20px"}}>
      {data.widget_list?.map((widget: any) =>
        <Grid key={widget.data.title} item>
          <Widget widgetData={widget.data} />
        </Grid>
      )}
      <ScrolledWidgets />
    </Grid>
  )
}

export default Widgets

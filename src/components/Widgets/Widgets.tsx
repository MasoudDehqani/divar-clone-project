import { Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { DivarContext } from '../context/divarContext'
import ScrolledWidgets from './ScrolledWidgets'
import Widget from './Widget'

const Widgets = () => {

  const { data } = useContext(DivarContext)

  return (
    <Grid spacing={2} direction="row" container style={{width: "calc(100vw - 280px)", height: "2000px", marginTop: "20px"}}>
      {data.widget_list?.map((widget: any) =>
        <Grid key={widget.data.token} item>
          <Widget widgetData={widget.data} />
        </Grid>
      )}
      <ScrolledWidgets />
    </Grid>
  )
}

export default Widgets

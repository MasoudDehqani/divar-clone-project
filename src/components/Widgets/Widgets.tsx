import { Box, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { DivarContext } from '../context/divarContext'
import Widget from './Widget'

const Widgets = () => {

  const { data } = useContext(DivarContext)

  return (
    <Grid spacing={2} direction="row" container style={{width: "70vw", marginTop: "20px"}}>
      {data.widget_list?.map((widget: any) =>
        <Grid item>
          <Widget widgetData={widget.data} />
        </Grid>
      )}
    </Grid>
  )
}

export default Widgets

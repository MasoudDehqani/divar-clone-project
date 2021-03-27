import { Grid, Link, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import { allCities } from '../Sidebar/dataStructured'
import CitySelectionButton from './CitySelectionButton'
import {Link as RouterLink} from "react-router-dom"
import CitySelectionModal from './CitySelectionModal'

const CitySelectionPage = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <CitySelectionModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Navbar />
      <Paper>
      <h3>شهرهای پر بازدید</h3>
      <Grid container spacing={2}>
        {allCities.topCities.map((city: any) => 
          <Grid item>
            <Link component={RouterLink} to={`/${city.url}`}>
              <CitySelectionButton onClick={handleClose} text={city.title} />  
            </Link>
          </Grid>
        )}

      </Grid>
      </Paper>
    </div>
  )
}

export default CitySelectionPage

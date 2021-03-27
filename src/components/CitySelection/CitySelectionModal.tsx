import React, { useContext } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Box, Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import { Close, Search } from '@material-ui/icons';
//@ts-ignore
import { allCities } from "../Sidebar/dataStructured"
import CitySelectionButton from '../CitySelection/CitySelectionButton';
import Link from "@material-ui/core/Link"
import {Link as RouterLink} from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: "scroll"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2),
      height: "fit-content",
      width: "60%",
    },
    searchInput: {
      width: "100%",
      fontFamily: "Vazir",
      marginBottom: "40px"
    }
  }),
);

const CitySelectionModal = ({ modalOpen, setModalOpen } : {modalOpen: boolean, setModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const classes = useStyles();

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Modal
      // disablePortal={true}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <div className={classes.paper}>

            <Box display="flex" justifyContent="space-between" mb="60px">
              <span>انتخاب شهر</span>
              <Close style={{cursor: "pointer"}} onClick={() => setModalOpen(false)} />
            </Box>

            <TextField
              className={classes.searchInput}
              variant="outlined"
              id="input-with-icon-textfield"
              InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              }}
            />

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

            {/* <h3>همه شهرها</h3>
            <Grid container spacing={2}>
              {//@ts-ignore
              allCities.compressedData.map(city =>
                //@ts-ignore
                <Grid item><CitySelectionButton text={city[1]} />
                </Grid>
              )}
            </Grid> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default CitySelectionModal

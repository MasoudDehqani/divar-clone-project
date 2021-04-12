import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Box, Grid, InputAdornment, TextField } from '@material-ui/core';
import { Close, Search } from '@material-ui/icons';
import { allCities } from "../Sidebar/dataStructured"
import CitySelectionButton from '../CitySelection/CitySelectionButton';

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

interface PropsType {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CitySelectionModal = ({ modalOpen, setModalOpen } : PropsType) => {

  const classes = useStyles();

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleCitySelection = (cityUrl: string) => {
    localStorage.setItem("city", cityUrl)
  }

  return (
      <Modal
        className={classes.modal}
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 5,
        }}
      >
        <Fade in={modalOpen}>
          <div className={classes.paper}>

            <Box display="flex" justifyContent="space-between" mb="60px">
              <span style={{fontWeight: "bold", fontSize: "1.3rem"}}>انتخاب شهر</span>
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
              {allCities.topCities.map(({title, url}) => 
                <Grid key={url} item onClick={() => handleCitySelection(url)}>
                  <CitySelectionButton to={`/${url}`} onClick={handleClose} text={title} />  
                </Grid>
              )}

            </Grid>

            <h3>همه شهرها</h3>
            <Grid container spacing={2}>
              {allCities.compressedData.map( ([id, cityName, cityUrl] : (number | string | any)[]) =>
                <Grid key={id} item>
                  <CitySelectionButton text={cityName} to={`/${cityUrl}`} onClick={handleClose} />
                </Grid>
              )}
            </Grid>
          </div>
        </Fade>
      </Modal>
  );
}

export default CitySelectionModal

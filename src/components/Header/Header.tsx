import React, { useState } from 'react'
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import { makeStyles } from '@material-ui/core/styles';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ClickAwayListener, TextField } from '@material-ui/core';
import MenuItemsPaper from './MenuItemsPaper';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    height: 40,
    width: 200
  },
}));

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const classes = useStyles();

  return (
    <Box width="100%" height="fit-content" mt={13}>
      <Button
        onClick={() => setMenuOpen(!menuOpen)}
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<ExpandMore />}
      >
        همه آگهی‌ها
      </Button>
      <TextField style={{width: "500px"}} id="outlined-basic" label="Outlined" variant="outlined" />
      {menuOpen && 
        <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
          <div onClick={() => setMenuOpen(false)}>
            <MenuItemsPaper />
          </div>
        </ClickAwayListener>}
    </Box>
  )
}

export default Header
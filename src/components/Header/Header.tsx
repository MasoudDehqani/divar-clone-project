import React, { useContext, useEffect, useState } from 'react'
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import { makeStyles } from '@material-ui/core/styles';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ClickAwayListener, TextField } from '@material-ui/core';
import MenuItemsPaper from './MenuItemsPaper';
import SuggestionBar from './SuggestionBar';
import { DivarContext } from '../context/divarContext';
import { useHistory, useLocation } from 'react-router';
import useQuery from "../Hooks/useQuery"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    height: 40,
    width: 200
  },
}));

export const Header = () => {

  const history = useHistory()
  const { pathname } = useLocation()
  const query = useQuery()

  const [menuOpen, setMenuOpen] = useState(false)
  const [textFieldValue, setTextFieldValue] = useState(query.get("q"))
  const [registeredTextFieldValue, setRegisteredTextFieldValue] = useState('')

  const { data } = useContext(DivarContext)

  function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter") {
      console.log(registeredTextFieldValue)
      //@ts-ignore
      setRegisteredTextFieldValue(textFieldValue)
      if (textFieldValue) {
        history.push(`${pathname}?q=${textFieldValue}`)
      }
    }
  }

  useEffect(() => {
    console.log(!!registeredTextFieldValue)
    if (registeredTextFieldValue && pathname !== "/" && textFieldValue) {
      history.push(`${pathname}?q=${registeredTextFieldValue}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, pathname])


  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" width="100%" height="fit-content" mt={13}>
      <Box>
        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          variant="contained"
          color="secondary"
          className={classes.button}
          endIcon={<ExpandMore />}
        >
          {data.title}
        </Button>
        <TextField onKeyDown={(e) => handleKeyPress(e)} value={textFieldValue} placeholder={`جستجو در ${data?.title}`} onChange={(e) => setTextFieldValue(e.target.value)} style={{width: "500px", fontFamily: "Vazir"}} id="outlined-basic" variant="outlined" />
        {menuOpen && 
          <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
            <div onClick={() => setMenuOpen(false)}>
              <MenuItemsPaper />
            </div>
          </ClickAwayListener>}
        </Box>
        <Box>
          <SuggestionBar />
        </Box>
      
    </Box>
  )
}

export default Header
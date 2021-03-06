import React from 'react'
import { AppBar, Toolbar, List, ListItem, Button, Box, Container, createMuiTheme, ThemeProvider, Popover, Paper } from "@material-ui/core"
import { LocationOnRounded } from "@material-ui/icons"
import makeStyles from "@material-ui/core/styles/makeStyles"
//@ts-ignore
import image2 from  './images/Capture2.JPG';
import Hidden from "@material-ui/core/Hidden"
import MenuIcon from "@material-ui/icons/Menu"
import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem';
import Link from "@material-ui/core/Link"
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const theme = createMuiTheme({
  overrides: {
    MuiPopover: {
      paper: {
        marginTop: '40px',
        width: '180px'
      }
    }
  }
})

const useStyles = makeStyles({
  root: {
    '& paper': {
      color: 'white'
    }
  }
})

function Header() {

  const [menuState, setMenuState] = React.useState(false);

  const handleClick = (event: any) => {
    setMenuState(!menuState);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const classes = useStyles()

  return (
    <Container>
      <AppBar style={{backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
        
          
        
        <Toolbar>
          <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
            <Box>
              <img style={{width: '50px', marginLeft: '20px', verticalAlign: 'middle'}} src={image2} alt='logo' />
              <LocationOnRounded style={{color: "rgba(0,0,0,0.4)", verticalAlign: 'middle'}} />
              <span style={{color: 'rgba(0,0,0,0.4)', fontWeight: 'bold', verticalAlign: 'middle'}}>تهران</span>
            </Box>

            <Box display="flex" alignItems="center">
              <Hidden smDown>
                <List style={{display: 'flex', marginLeft: "20px", marginRight: 'auto'}}>
                  <Link underline='none' href="#" >
                    <ListItem style={{width: 'fit-content', color: 'black'}}>دیوار من</ListItem>
                  </Link>
                  <Link underline='none' href="#" >
                    <ListItem style={{width: 'fit-content', color: 'black'}}>چت</ListItem>
                  </Link>
                  <Link underline='none' href="#" >
                    <ListItem style={{width: 'fit-content', color: 'black'}}>درباره دیوار</ListItem>
                  </Link>
                  <Link underline='none' href="#" >
                    <ListItem style={{width: 'fit-content', color: 'black'}}>بلاگ</ListItem>
                  </Link>
                  <Link underline='none' href="#" >
                    <ListItem style={{width: 'fit-content', color: 'black'}}>پشتیبانی</ListItem>
                  </Link>
                </List>
              </Hidden>
              <Button onClick={() => console.log('123')} style={{fontFamily: 'inherit', boxShadow: 'none', width: '95px', height: '41px', color: 'white', fontWeight: 'bold', backgroundColor: '#a12727', fontSize: '15px'}} variant="contained">ثبت آگهی</Button>
              
              <Hidden mdUp>
                
                {/* <ThemeProvider theme={theme}> */}
                {/* <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  transitionDuration={0}
                  // PopoverClasses={{className: ''}}
                > */}
                  {/* <Popover elevation={3} anchorPosition={{left: 10, top: 900}} transitionDuration={0} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}> */}
                  <ClickAwayListener onClickAway={ () => setMenuState(false)}>
                    <>
                    <MenuIcon style={{color: 'black', marginRight: '20px', cursor: 'pointer'}} onClick={handleClick} />
                    <Paper style={{display: menuState ? 'block' : 'none', width: '170px', position: 'absolute', top: '60px', left: '10px'}} elevation={3} >
                      <Link color='inherit' underline='none' href="#">
                        <MenuItem style={{fontFamily: 'inherit'}} >دیوار من</MenuItem>
                      </Link>
                      <Link color='inherit' underline='none' href="#">
                        <MenuItem style={{fontFamily: 'inherit'}} >چت</MenuItem>
                      </Link>
                      <Link color='inherit' underline='none' href="#">
                        <MenuItem style={{fontFamily: 'inherit'}} >درباره دیوار</MenuItem>
                      </Link>
                      <Link color='inherit' underline='none' href="#">
                        <MenuItem style={{fontFamily: 'inherit'}} >بلاگ</MenuItem>
                      </Link>
                      <Link color='inherit' underline='none' href="#">
                        <MenuItem style={{fontFamily: 'inherit'}} >پشتیبانی</MenuItem>
                      </Link>
                    </Paper>
                    </>
                  </ClickAwayListener>

                  {/* </Popover> */}
                {/* </Menu> */}
                {/* </ThemeProvider> */}
                
              </Hidden>
            </Box>
          </Box>
          
          
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header

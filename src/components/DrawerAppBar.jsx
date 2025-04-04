import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
// const navItems = ['Home', 'About','Skills', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Portfolio
      </Typography>
      <Divider />
      <List>
       
          <ListItem  disablePadding>
         
            <ListItemButton sx={{textAlign:"center"}} href='/'>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
         
         <ListItemButton sx={{textAlign:"center"}} href='/About'>
           <ListItemText primary="About"/>
         </ListItemButton>
       </ListItem>
       <ListItem  disablePadding>
         
         <ListItemButton sx={{textAlign:"center"}} href='/Skills'>
           <ListItemText primary="skills"/>
         </ListItemButton>
       </ListItem>
       <ListItem  disablePadding>
         
         <ListItemButton sx={{textAlign:"center"}} href='/Contact'>
           <ListItemText primary="Contact"/>
         </ListItemButton>
       </ListItem>
       
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar  sx={{backgroundColor:"black"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' ,fontFamily:"cursive"} }}
          >
            My portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => ( */}
              <Button  href='/'sx={{ color: '#fff'}}>
                Home
              </Button>
              <Button  href='/About'sx={{ color: '#fff'}}>
                About
              </Button>
              <Button  href='/Skills'sx={{ color: '#fff'}}>
                Skills
              </Button>
              <Button  href='/Contact'sx={{ color: '#fff'}}>
                Contact
              </Button>
            {/* ))} */}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
    
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme,alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItems from '../../layouts/listItems';
import Logo from '../../assets/images/Icon.svg'
import Text from '../../assets/images/Text.png'


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '10.5px 20px 10.5px 45px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    backgroundColor:'transparent',
    border: '1px solid rgba(255, 255, 255, 0.23)',
    borderRadius:'8px',
    fontFamily: 'Public Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px'
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({pageContent}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} sx={{ backgroundImage:"unset",boxShadow:"unset",  padding:"30px 0px 20px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{  display:{xs: 'none',md: 'none', lg: 'flex'},flexDirection:'column'}}>
            <Typography
                variant="h3"
                noWrap
                component="h3"
            >
                Dashboard Analysis
            </Typography>
            <Typography
                variant="subtitle1"
                noWrap
                color={(theme) => theme.palette.textG.light}
            >
            With all of the styling tool options available in today's market
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display:"flex" , gap:{xs:'20px',md:'30px'} ,alignItems:'center'  }}>
          <IconButton size="large" aria-label="search" color="inherit" sx={{ display:{ xs: 'block',md:'none'} }}>
            <SearchIcon />
          </IconButton>
            <Search sx={{
              display:{xs: 'none',md:"block"},
              '&:hover':{
                background:"transparent",
              }
              }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"

            >
              <Badge variant="dot" color='activeColor' >
                
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <ListItemAvatar sx={{ display: {xs: 'flex', md: 'flex',lg:'none' } ,justifyContent: 'end' }}>
              <Avatar alt="Profile Picture" src={require('../../assets/images/Avatar.jpg')} />
            </ListItemAvatar>
            <Button sx={{ display: { xs: 'none', md: 'none',lg:'block' } }} color="textLight" variant="text">
                <ListItem sx={{ cursor:'pointer' }}  >
                    <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={require('../../assets/images/Avatar.jpg')} />
                    </ListItemAvatar>
                    <Box>
                      <Box>
                        <Typography variant="subtitle1" color={(theme) => theme.palette.secondry.light}>Allie Grater</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color={(theme) => theme.palette.textG.light}>Admin</Typography>
                      </Box>
                    </Box>
                    <KeyboardArrowDownIcon color="#000" sx={{ marginLeft:"30px" }} />
                </ListItem>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display:"flex", alignItems:"center", justifyContent:"space-between",marginTop:"35px" }}>
          <Box>
            <ListItemButton component={Link} to='/dashboard'>
              <ListItemIcon  sx={{ color: "#fff", display:"flex",alignItems:"center",gap:"10px" }}>
                <img src={Logo} alt=''></img>
                <img src={Text} alt=''></img>
              </ListItemIcon>
            </ListItemButton>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
         
        </DrawerHeader>
        <List sx={{ padding:"35px 0" }}>
          <MainListItems />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 , padding:'121px 24px 120px'}}>
          {pageContent}
      </Box>
    </Box>
  );
}
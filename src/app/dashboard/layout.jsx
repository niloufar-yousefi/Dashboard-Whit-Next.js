"use client"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { FaAlignJustify } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa6";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import HomeIcon from '@mui/icons-material/Home';
import LaptopIcon from '@mui/icons-material/Laptop';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CategoryIcon from '@mui/icons-material/Category';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';




export default function RootLayout({ children }) {

  // on mob N btn
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // on desktop ,when click on list item
  const [color, setColor] = React.useState([
    { id: 1, status: true },
    { id: 2, status: false },
    { id: 3, status: false }
  ])
  function liColorAndBg(event) {
    let targetStatus = event.currentTarget.getAttribute('data-status')
    let targetId = event.currentTarget.getAttribute('data-id')
    color.map(item => {
      if (item.id == targetId) {
        item.status = !(item.status)
      } else {
        item.status = false
      }
    })
    setColor([...color])
  }

  // on desktop , headder list on top of the horizantal list
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // modal on mobile
  const [open1, setOpen1] = React.useState(false);

  const toggleDrawer1 = (newOpen) => () => {
    setOpen1(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer1(false)}>
      <List>
        {['Dashboard', 'Administration', 'Customers', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={`/${text === 'Dashboard' ? '' : text}`} passHref style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemButton>
                <ListItemIcon>
                  {text === 'Dashboard' && <HomeIcon />}
                  {text === 'Customers' && <PersonIcon />}
                  {text === 'Administration' && <LaptopIcon />}.                 
                  {text === 'Logout' && <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <html>
      <Head>
        <title>Your Page Title</title> {/* عنوان صفحه را تنظیم کنید */}
      </Head>
      <body>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container >

            {/* mobile start*/}
            <Grid item sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', flexWrap: 'wrap' }}>

              {/* mobile header start */}
              <div className='w-full py-10 px-6 flex  justify-between '>

                {/* mobile part1 */}
                <div className='w-2/12 flex items-center'>
                  <div>
                    <Button onClick={toggleDrawer1(true)}>
                      <FaAlignJustify className='text-2xl text-slate-600  cursor-pointer' />
                    </Button>
                    <Drawer open={open1} onClose={toggleDrawer1(false)}>
                      {DrawerList}
                    </Drawer>
                  </div>

                </div>

                {/* mobile part2 */}
                <div className='w-5/12 flex  items-center'>
                  <div className="w-4/12 ">
                    <FaBookOpen className='text-2xl text-slate-600 cursor-pointer' />
                  </div>
                  <div className="w-4/12 ">
                    <FaUser className='text-2xl text-slate-600 cursor-pointer' />
                  </div>
                  <div className="w-4/12 ">
                    <FaUnlock className='text-2xl text-slate-600 cursor-pointer' />
                  </div>
                </div>

                {/* mobile part3 */}
                <div className='w-5/12 '>
                  <React.Fragment>
                    <Box className='pl-4 justify-end items-center' sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                      <Typography className='text-slate-600 text-xs md:text-xl  text-end' sx={{ minWidth: 100 }}>Contact</Typography>
                      <Typography className='text-slate-600 text-xs md:text-xl  ' sx={{ minWidth: 100 }}>Profile</Typography>
                      <Tooltip title="Account settings">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? 'account-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}>N</Avatar>
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      slotProps={{
                        paper: {
                          elevation: 0,
                          sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            '&::before': {
                              content: '""',
                              display: 'block',
                              position: 'absolute',
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: 'background.paper',
                              transform: 'translateY(-50%) rotate(45deg)',
                              zIndex: 0,
                            },
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                </div>

              </div>
              {/* mobile header end */}

              {/* main part in mob start *****/}
              <div className='w-full  px-10'>{children}</div>
              {/* main part in mob end *****/}
              
              {/* mobile footer start */}
              <Grid className=' w-full' item sx={{ display: { xs: 'flex ', md: 'none' }, width: '100%' }}>
                <div className='w-full text-slate-400  font-mono text-center py-5  text-sm'> Developed By <span className='text-slate-500'>Niloofar Yoosefi</span></div>
              </Grid>
              {/* mobile footer end */}

            </Grid>

            {/* mobile end*/}

            {/* desktop start*/}
            {/* desktop side bar start*/}
            <Grid className='fixed top-0 left-0 ' item sx={{ display: { xs: 'none ', md: 'flex' }, width: '25%' }}>
              <div className='w-full py-12  flex justify-center '>
                <div className="w-full pl-10 ">

                  {/* part1-vertical -logo */}
                  <div className='w-full flex'>
                    <div className='w-[20%]  '>
                      <Image
                        src='/logo.svg'
                        alt="توضیحات تصویر"
                        width={100}
                        height={24}
                        priority
                        style={{
                          width: 'auto',
                          height: 'auto'
                        }}
                      />
                    </div>
                    <p className='text-lg w-[80%] lg:text-2xl font-extrabold  ml-2 flex items-end uppercase'>dmin panel</p>
                  </div>

                  {/* part2-vertica -list start */}
                  <List className=' mt-10' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                    {/* link 1 */}
                    <Link className='flex items-center' href="/dashboard" passHref>
                      <ListItem data-status='on' data-id='1' onClick={(e) => liColorAndBg(e)} className={`py-3 px-5 my-5 cursor-pointer  rounded-xl duration-300 hover:bg-[rgba(77,111,235,0.26)] group ${color[0].status ? 'bg-[rgba(77,111,235,0.16)]' : ''}`} >

                        <ListItemAvatar>
                          <Avatar className='bg-[rgb(77,112,235)]'>
                            <HomeIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={`${color[0].status ? 'text-[rgb(77,112,235)]' : 'text-slate-600'} group-hover:text-slate-600 duration-300`} primary="Dashboard" />
                      </ListItem>
                    </Link>

                    {/* link 2 */}
                    <Link className='flex items-center' href="/dashboard/Administration" passHref>
                      <ListItem data-status='off' data-id='2' onClick={(e) => liColorAndBg(e)} className={`py-3 px-5 my-5 cursor-pointer  rounded-xl duration-300 hover:bg-[rgba(77,111,235,0.26)] group ${color[1].status ? 'bg-[rgba(77,111,235,0.16)]' : ''}`}>
                        <ListItemAvatar >
                          <Avatar className='bg-[rgb(77,112,235)]'>
                            <LaptopIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={`${color[1].status ? 'text-[rgb(77,112,235)]' : 'text-slate-600'} group-hover:text-slate-600 duration-300`} primary="Administration" />
                      </ListItem>
                    </Link>

                    {/* link 3 */}
                    <Link className='flex items-center' href="/dashboard/Customers" passHref>
                      <ListItem data-status='off' data-id='3' onClick={(e) => liColorAndBg(e)} className={`py-3 px-5 my-5 cursor-pointer  rounded-xl duration-300 hover:bg-[rgba(77,111,235,0.26)] group ${color[2].status ? 'bg-[rgba(77,111,235,0.16)]' : ''}`}>
                        <ListItemAvatar>
                          <Avatar className='bg-[rgb(77,112,235)]'>
                            <PersonIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={`${color[2].status ? 'text-[rgb(77,112,235)]' : 'text-slate-600'} group-hover:text-slate-600 duration-300`} primary="Customers" />
                      </ListItem>
                    </Link>


                    {/* logout */}
                    <Link className='flex items-center' href="./" passHref>
                      <ListItem className='py-3 px-5 my-20 cursor-pointer  rounded-xl duration-300 hover:bg-slate-100 hover:translate-y-[-2px] '>
                        <ListItemAvatar>
                          <Avatar className='bg-slate-500'>
                            <LogoutIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText className='text-slate-600   ' primary="Logout" />
                      </ListItem>
                    </Link>

                  </List>
                  {/* part2-vertica -list end */}
                </div>

              </div>
            </Grid>
            {/* desktop side bar end*/}

            {/* desktop main start*/}
            <Grid item sx={{ display: { xs: 'none ', md: 'flex' }, width: '70%', marginLeft: '30%' }}>

              {/* desktop main part start */}
              <div className='w-full  p-10  *:w-full'>

                {/* desktop main header */}
                <div className='h-[20vh]  flex flex-wrap'>

                  {/* desktop main part1-header */}
                  <div className='md:w-[100%] lg:w-[70%]  '>
                    <BottomNavigation value={value} onChange={handleChange}>
                      <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon className={value === 'recents' ? 'text-[rgb(77,112,235)]' : 'text-slate-600 '} />}
                      />
                      <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon className={value === 'favorites' ? 'text-[rgb(77,112,235)]' : 'text-slate-600'} />}
                      />
                      <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<LocationOnIcon className={value === 'nearby' ? 'text-[rgb(77,112,235)]' : 'text-slate-600'} />}
                      />
                      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon className={value === 'folder' ? 'text-[rgb(77,112,235)]' : 'text-slate-600'} />} />
                      <BottomNavigationAction
                        label="Products"
                        value="products"
                        icon={<ShoppingBagIcon className={value === 'products' ? 'text-[rgb(77,112,235)]' : 'text-slate-600'} />}
                      />
                      <BottomNavigationAction
                        label="Categories"
                        value="categories"
                        icon={<CategoryIcon className={value === 'categories' ? 'text-[rgb(77,112,235)]' : 'text-slate-600'} />}
                      />
                      <BottomNavigationAction
                        label='analytics'
                        value="analytics"
                        icon={<AnalyticsIcon className={value === 'analytics' ? 'text-[rgb(77,112,235)]' : 'text-slate-600'} />}
                      />
                    </BottomNavigation>
                  </div>

                  {/* desktop main part2-header */}
                  <div className="w-[30%] md:hidden lg:flex ">
                    <React.Fragment>
                      <Box className='pl-10 items-start pt-3 justify-end' sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                        <Tooltip className='w-[20%]' title="Account settings">
                          <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                          >
                            <Avatar sx={{ width: 32, height: 32 }}>N</Avatar>
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                              },
                            },
                          },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <MenuItem onClick={handleClose}>
                          <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Avatar /> My account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <PersonAdd fontSize="small" />
                          </ListItemIcon>
                          Add another account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <Settings fontSize="small" />
                          </ListItemIcon>
                          Settings
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  </div>
                </div>

                {/* desktop main part1-body */}
                <div className=" ">{children}</div>

                {/* desktop main part1-footer */}
                <div className='h-[10vh] mt-28 flex items-center justify-center'>
                  <p className='text-sm font-serif text-slate-700  '>Developed By Niloofar Yoosefi</p>
                </div>

              </div>
              {/* desktop main part end */}

            </Grid>
            {/* desktop main start*/}
            {/* desktop end*/}

          </Grid>
        </Box>
      </body>
    </html>
  );
}

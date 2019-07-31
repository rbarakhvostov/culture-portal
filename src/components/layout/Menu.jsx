import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideBar from './Sidebar';

const Menu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  return (
    <>
      <IconButton
        aria-label="Menu"
        color="inherit"
        onClick={() => toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SideBar open={drawerOpen} onClose={(value) => toggleDrawer(value)} />
    </>
  );
};

export default Menu;

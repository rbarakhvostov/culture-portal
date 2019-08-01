import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideBar from './Sidebar';

const Menu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        aria-label="Menu"
        color="inherit"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SideBar open={isDrawerOpen} onClose={setDrawerOpen} />
    </>
  );
};

export default Menu;

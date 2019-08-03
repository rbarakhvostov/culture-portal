import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from './Sidebar';

const useStyles = makeStyles({
  button: {
    marginLeft: 'auto',
  },
});

const Menu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const styles = useStyles();

  return (
    <>
      <IconButton
        className={styles.button}
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

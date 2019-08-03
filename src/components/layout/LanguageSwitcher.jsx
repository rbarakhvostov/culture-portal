import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import getLanguage from '../../utils/i18n';

const useStyles = makeStyles({
  button: {
    fontSize: '14px',
    color: '#ffffff',
    backgroundColor: '#607d8b',
    '&:hover': {
      backgroundColor: '#607d8b',
    },
  },
  listItem: {
    width: 64,
    justifyContent: 'center',
  },
});

const LanguageSwitcher = () => {
  const options = ['en', 'ru', 'by'];
  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation('layout');
  const language = getLanguage();
  const styles = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, reason, lang) => {
    if (lang) {
      i18n.changeLanguage(lang);
    }

    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className={styles.button}
        onClick={handleClick}
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        {language}
      </Button>
      <Menu
        id="simple-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
        keepMounted
      >
        {options.map((lang) => (
          <MenuItem
            className={styles.listItem}
            onClick={() => handleClose(null, null, lang)}
            key={uniqid()}
          >
            {lang.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;

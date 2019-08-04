import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#34515e',
  },
  title: {
    margin: '0 4vw',
    color: '#ffffff',
    ['@media only screen and (max-width: 520px)']: {
      fontSize: '1rem',
    },
  },
  toolBar: {
    position: 'relative',
  },
});

const Header = ({ children }) => {
  const { t } = useTranslation('layout');
  const styles = useStyles();

  return (
    <div>
      <AppBar className={styles.appBar} position="fixed">
        <Toolbar className={styles.toolBar}>
          <LanguageSwitcher />
          <Typography variant="h5" className={styles.title}>
            {t('title_header')}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
      <Navigation />
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.element,
};

Header.defaultProps = {
  children: null,
};

export default Header;

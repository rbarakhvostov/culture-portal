import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '10vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    margin: '0 5vw',
  },
});

const Navigation = () => {
  const { t } = useTranslation('layout');
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/">
        <Button className={styles.button} size="large">
          {t('link_main-page')}
        </Button>
      </Link>
      <Link className={styles.link} to="/search/">
        <Button className={styles.button} size="large">
          {t('link_search')}
        </Button>
      </Link>
    </div>
  );
};

export default Navigation;

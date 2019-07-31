import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import StartIcon from '@material-ui/icons/ArrowUpward';
import WorksIcon from '@material-ui/icons/ViewList';
import FaceIcon from '@material-ui/icons/Face';
import PhotoIcon from '@material-ui/icons/PhotoLibrary';
import VideoIcon from '@material-ui/icons/Videocam';
import DateIcon from '@material-ui/icons/DateRange';
import MapIcon from '@material-ui/icons/Place';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import uniqid from 'uniqid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

const Sidebar = ({ open, onClose }) => {
  const { t } = useTranslation('layout');

  const handleDrawerClose = () => {
    onClose(false);
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      // offset: -80,
    });
  };

  const styles = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={styles.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      onClose={() => onClose(false)}
      styles={{
        paper: styles.drawerPaper,
      }}
    >
      <div className={styles.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List component="nav">
        <ListItem
          button
          key={uniqid()}
          onClick={() => scrollToElement('start')}
        >
          <ListItemIcon>
            <StartIcon />
          </ListItemIcon>
          <ListItemText primary={t('director_start')} />
        </ListItem>

        <ListItem
          button
          key={uniqid()}
          onClick={() => scrollToElement('overview')}
        >
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary={t('director_overview')} />
        </ListItem>

        <ListItem
          button
          key={uniqid()}
          onClick={() => scrollToElement('biography')}
        >
          <ListItemIcon>
            <DateIcon />
          </ListItemIcon>
          <ListItemText primary={t('director_biography')} />
        </ListItem>

        <ListItem
          button
          key={uniqid()}
          onClick={() => scrollToElement('workslist')}
        >
          <ListItemIcon>
            <WorksIcon />
          </ListItemIcon>
          <ListItemText primary={t('director_workslist')} />
        </ListItem>

        <ListItem
          button
          key={uniqid()}
          onClick={() => scrollToElement('gallery')}
        >
          <ListItemIcon>
            <PhotoIcon />
          </ListItemIcon>
          <ListItemText primary={t('director_gallery')} />
        </ListItem>

        <ListItem
          button
          key={uniqid()}
          onClick={() => scrollToElement('video')}
        >
          <ListItemIcon>
            <VideoIcon />
          </ListItemIcon>
          <ListItemText primary={t('director_video')} />
        </ListItem>

        <ListItem button key={uniqid()} onClick={() => scrollToElement('map')}>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary={t('director_map')} />
        </ListItem>
      </List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;

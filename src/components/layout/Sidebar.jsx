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

const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 1500,
    delay: 100,
    smooth: true,
  });
};

const mapNameIcon = {
  start: <StartIcon />,
  overview: <FaceIcon />,
  biography: <DateIcon />,
  workslist: <WorksIcon />,
  gallery: <PhotoIcon />,
  video: <VideoIcon />,
  map: <MapIcon />,
};

const getListItems = (data, t) => {
  return Object.keys(data).map((item) => (
    <ListItem button key={uniqid()} onClick={() => scrollToElement(`${item}`)}>
      <ListItemIcon>{data[`${item}`]}</ListItemIcon>
      <ListItemText primary={t(`director_${item}`)} />
    </ListItem>
  ));
};

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
      <List component="nav">{getListItems(mapNameIcon, t)}</List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;

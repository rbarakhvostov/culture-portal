import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import IconGitHub from './images/icon-github.svg';
import IconWorklog from './images/icon-worklog.svg';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    width: '15vw',
    margin: '0 0.5vw',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: '15vw',
  },
  actions: {
    justifyContent: 'center',
  },
  name: {
    fontSize: '3vh',
  },
});

const Developer = ({ id }) => {
  const github = `http://github.com/${id}`;
  const worklog = `http://vld-m.github.io/culture-portal/worklogs/${id}.md`;
  const avatar = `${github}.png`;
  const { t } = useTranslation('team');
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={avatar}
          title="Developer avatar"
        />
        <CardContent>
          <Typography className={styles.name} component="p" align="center">
            {t(`${id}`)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.actions}>
        <Button size="small" href={github} target="_blank">
          <img src={IconGitHub} alt="github icon" />
        </Button>
        <Button size="small" href={worklog} target="_blank">
          <img src={IconWorklog} alt="worklog icon" />
        </Button>
      </CardActions>
    </Card>
  );
};

Developer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Developer;

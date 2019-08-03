import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const Searchbox = ({ value, onChange }) => {
  const input = useRef(null);
  const { t } = useTranslation('layout');

  const useStyles = makeStyles({
    searchArea: {
      margin: '0 35%',
      width: '30%',
    },
  });

  const handleChange = (event) => onChange(event.target.value);
  const classes = useStyles();

  return (
    <TextField
      className={classes.searchArea}
      label={t('search-label')}
      type="search"
      margin="normal"
      onChange={handleChange}
      value={value}
      ref={input}
    />
  );
};

Searchbox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbox;

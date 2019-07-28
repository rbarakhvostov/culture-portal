import React from 'react';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(date, work, role) {
  return { date, work, role };
}

function getRows(data) {
  return data.map((item) =>
    createData(
      item.date,
      `"${item.product.title}" (${item.product.author})`,
      item.role
    )
  );
}

const useStyles = makeStyles({
  root: {
    width: '30%',
    margin: '20px auto',
    overflowX: 'auto',
  },
  table: {
    minWidth: 350,
  },
  head: {
    background:
      'linear-gradient(45deg, rgb(116, 99, 99) 30%, rgb(10, 7, 7) 90%)',
  },
  font: {
    color: '#ffffff',
    fontSize: '1.5rem',
  },
});

const WorksList = ({ director }) => {
  const { t } = useTranslation([director, 'layout']);
  const rows = getRows(t(`${director}:work`));
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.head}>
            <TableCell align="center" className={classes.font}>
              {t('layout:table_column_data')}
            </TableCell>
            <TableCell align="center" className={classes.font}>
              {t('layout:table_column_works')}
            </TableCell>
            <TableCell align="center" className={classes.font}>
              {t('layout:table_column_role')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={uniqid()}>
              <TableCell component="th" scope="row" align="center">
                {row.date}
              </TableCell>
              <TableCell align="left">{row.work}</TableCell>
              <TableCell align="center">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

WorksList.propTypes = {
  director: PropTypes.string.isRequired,
};

export default WorksList;

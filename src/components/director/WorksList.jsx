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

const createData = (date, work, role) => ({ date, work, role });

const getRows = (data) =>
  data.map((item) =>
    createData(
      item.date,
      `"${item.product.title}" (${item.product.author})`,
      item.role
    )
  );

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

const WorksList = ({ work }) => {
  const { t } = useTranslation('layout');
  const rows = getRows(work);
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow className={styles.head}>
            <TableCell align="center" className={styles.font}>
              {t('layout:table_column_data')}
            </TableCell>
            <TableCell align="center" className={styles.font}>
              {t('layout:table_column_works')}
            </TableCell>
            <TableCell align="center" className={styles.font}>
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
  work: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WorksList;

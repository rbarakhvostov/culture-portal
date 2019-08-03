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
    width: '70%',
    margin: '20px auto',
    overflowX: 'auto',
  },
  table: {
    minWidth: 350,
  },
  head: {
    background: 'linear-gradient(45deg, #607d8b 30%, #1e2a30 90%)',
  },
  fontHeader: {
    color: '#ffffff',
    fontSize: '0.7em',
  },
  fontContent: {
    color: '#1e2a30',
    fontSize: '0.5em',
  },
});

const WorksList = ({ director }) => {
  const { t } = useTranslation([director, 'layout']);
  const rows = getRows(t(`${director}:work`));
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow className={styles.head}>
            <TableCell align="center" className={styles.fontHeader}>
              {t('layout:table_column_data')}
            </TableCell>
            <TableCell align="center" className={styles.fontHeader}>
              {t('layout:table_column_works')}
            </TableCell>
            <TableCell align="center" className={styles.fontHeader}>
              {t('layout:table_column_role')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={uniqid()}>
              <TableCell
                component="th"
                scope="row"
                align="center"
                className={styles.fontContent}
              >
                {row.date}
              </TableCell>
              <TableCell align="left" className={styles.fontContent}>
                {row.work}
              </TableCell>
              <TableCell align="left" className={styles.fontContent}>
                {row.role}
              </TableCell>
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

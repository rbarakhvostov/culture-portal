import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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
    width: '80%',
    margin: '20px auto',
    overflowX: 'auto',
    boxShadow: '0 2.5px 5px 2.5px #00000040',
    borderRadius: '5px',
    ['@media only screen and (max-width: 1024px)']: {
      width: '100%',
    },
  },

  head: {
    backgroundColor: '#607d8b',
  },
  fontHeader: {
    fontSize: '24px',
    fontWeight: 400,
    color: '#ffffff',
    ['@media only screen and (max-width: 768px)']: {
      fontSize: '16px',
    },
    ['@media only screen and (max-width: 390px)']: {
      fontSize: '14px',
    },
    ['@media only screen and (max-width: 360px)']: {
      fontSize: '12px',
    },
    ['@media only screen and (max-width: 330px)']: {
      fontSize: '10px',
    },
  },
  fontContent: {
    color: '#1e2a30',
    fontSize: '16px',
    ['@media only screen and (max-width: 768px)']: {
      fontSize: '12px',
    },
    ['@media only screen and (max-width: 390px)']: {
      fontSize: '10px',
    },
    ['@media only screen and (max-width: 360px)']: {
      fontSize: '8px',
    },
  },
});

const WorksList = ({ works }) => {
  const { t } = useTranslation('layout');
  const rows = getRows(works);
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
              <TableCell align="center" className={styles.fontContent}>
                {row.work}
              </TableCell>
              <TableCell align="center" className={styles.fontContent}>
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
  works: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default WorksList;

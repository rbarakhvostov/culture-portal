import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { getLanguage } from '../../../utils/i18n';
import OverviewStyles from './overview.module.css';

const axios = require('axios');

const Overview = ({ d }) => {
  const l = getLanguage();

  const query = `query OverviewQuery($lng: String!, $director: String!) {
        allContentfulDirector(filter: {lng: {eq: $lng}, path: {eq: $director}}) {
          nodes {
            directorData {
              name
              description
              date
            }
          }
        }
        contentfulAsset(title: {eq: $director}, description: {eq: "main"}) {
          file {
            url
          }
        }
      }`;

  const variables = {
    director: d,
    lng: l,
  };

  const body = JSON.stringify(query, variables);
  console.log(body);
  axios({
    url: '/graphql',
    method: 'post',
    data: body,
  }).then((res) => console.log(res.data));

  return (
    <div id="overview" className={OverviewStyles.overviewWrapper}>
      <img className={OverviewStyles.img} src={data.name} alt="" />
      <div className={OverviewStyles.info}>
        <h1 className={OverviewStyles.name}>{data.name}</h1>
        <span className={OverviewStyles.date}>{data.name}</span>
        <span className={OverviewStyles.description}>{data.name}</span>
      </div>
    </div>
  );
};

Overview.propTypes = {
  d: PropTypes.string.isRequired,
};

export default Overview;

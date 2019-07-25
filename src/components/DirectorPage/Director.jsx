import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import generateOverview from './Overview';
import generateBio from './Bio';
import generateWork from './Work';
import generateImages from './Images';

const DirectorPage = () => (
  <StaticQuery
    query={graphql`
      query DirectorPageQuery {
        engJson {
          name
          video
          img
          images
          description
          city
          date
          bio {
            date
            description
          }
          work {
            role
            product {
              author
              title
            }
            date
          }
        }
      }
    `}
    render={(data) => (
      <>
        <div>Director</div>
        {generateOverview(
          data.engJson.name,
          data.engJson.date,
          data.engJson.city,
          data.engJson.description,
          data.engJson.img
        )}
        {generateBio(data.engJson.bio)}
        {generateWork(data.engJson.work)}
        {generateImages(data.engJson.images)}
      </>
    )}
  />
);

export default DirectorPage;

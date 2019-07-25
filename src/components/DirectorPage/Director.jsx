import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

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
        <div>{data.engJson.name}</div>
      </>
    )}
  />
);

export default DirectorPage;

import { useStaticQuery, graphql } from 'gatsby';
import getLanguage from './i18n';

const getDirectorId = (director) => {
  const {
    allContentfulDirector: { group },
  } = useStaticQuery(
    graphql`
      query getDirectorsId {
        allContentfulDirector {
          group(field: path) {
            nodes {
              lng
              contentful_id
            }
            fieldValue
          }
        }
      }
    `
  );

  const directors = {};

  group.forEach((item) => {
    directors[item.fieldValue] = {};

    item.nodes.forEach((prop) => {
      directors[item.fieldValue][prop.lng] = prop.contentful_id;
    });
  });

  const lng = getLanguage();

  return directors[director][lng];
};

export default getDirectorId;

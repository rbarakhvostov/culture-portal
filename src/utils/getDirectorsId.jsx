import { useStaticQuery, graphql } from 'gatsby';

const getDirectorsId = () => {
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

  console.log(directors);

  return directors;
};

export default getDirectorsId;

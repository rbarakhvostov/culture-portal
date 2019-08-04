import { useStaticQuery, graphql } from 'gatsby';

const useDirectorsNamespaces = () => {
  const {
    allContentfulDirector: { group },
  } = useStaticQuery(
    graphql`
      query NameSpaces {
        allContentfulDirector {
          group(field: path) {
            fieldValue
            nodes {
              lng
              directorData {
                name
                city
              }
            }
          }
        }
      }
    `
  );

  const directors = {};

  group.forEach((obj) => {
    const director = {
      [obj.fieldValue]: {},
    };

    obj.nodes.forEach((item) => {
      director[obj.fieldValue][
        item.lng
      ] = `${item.directorData.name} ${item.directorData.city}`;
    });

    Object.assign(directors, director);
  });

  return directors;
};

export default useDirectorsNamespaces;

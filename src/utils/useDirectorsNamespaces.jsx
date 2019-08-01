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
              }
            }
          }
        }
      }
    `
  );

  const namespaces = {};

  group.forEach((item) => {
    namespaces[item.fieldValue] = {};
    item.nodes.forEach((prop) => {
      namespaces[item.fieldValue][prop.lng] = prop.directorData.name;
    });
  });

  return namespaces;
};

export default useDirectorsNamespaces;

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

  const namespaces = [];

  group.forEach((item) => {
    namespaces.push({
      [item.fieldValue]: {
        item.nodes.forEach((prop) => {
        prop.lng = prop.directorData.name;
      }
    }),
    });
  });

  console.log(namespaces);

  return namespaces;
};

export default useDirectorsNamespaces;

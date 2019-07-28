import { useStaticQuery, graphql } from 'gatsby';

const useDirectorsNamespaces = () => {
  const {
    allEnJson: { edges },
  } = useStaticQuery(
    graphql`
      query Namespaces {
        allEnJson(filter: { lng: { ne: null } }) {
          edges {
            node {
              path
            }
          }
        }
      }
    `
  );

  return edges.map((item) => item.node.path.slice(1));
};

export default useDirectorsNamespaces;

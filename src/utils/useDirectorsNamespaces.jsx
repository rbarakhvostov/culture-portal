import { useStaticQuery, graphql } from 'gatsby';

const useDirectorsNamespaces = () => {
  const {
    allContentfulDirector: { nodes },
  } = useStaticQuery(
    graphql`
      query NameSpaces {
        allContentfulDirector(filter: { lng: { eq: "en" } }) {
          nodes {
            path
          }
        }
      }
    `
  );

  return nodes.map((item) => item.path);
};

export default useDirectorsNamespaces;

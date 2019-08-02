import { useStaticQuery, graphql } from 'gatsby';

const getDirectorImages = () => {
  const {
    allContentfulAsset: { group },
  } = useStaticQuery(
    graphql`
      query DirectorsImagesQuery {
        allContentfulAsset {
          group(field: title) {
            nodes {
              description
              fluid {
                src
              }
            }
            fieldValue
          }
        }
      }
    `
  );

  const images = {};

  group.forEach((item) => {
    images[item.fieldValue] = {
      gallery: [],
      main: null,
    };

    item.nodes.forEach((prop) => {
      const { src } = prop.fluid;
      if (prop.description === 'gallery') {
        images[item.fieldValue].gallery.push(src);
      } else images[item.fieldValue].main = src;
    });
  });

  return images;
};

export default getDirectorImages;

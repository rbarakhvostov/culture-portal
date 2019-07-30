const chooseDirector = (directorNamespaces) => {
  const day = new Date();
  const director = directorNamespaces[day.getDay()];
  if (director) return director;
  return directorNamespaces[
    Math.floor(Math.random() * directorNamespaces.length)
  ];
};

export default chooseDirector;

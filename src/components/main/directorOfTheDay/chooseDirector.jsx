const chooseDirector = (directorNamespaces) => {
  const day = new Date().getDate();
  let index = Math.floor(Math.random() * directorNamespaces.length);
  let director = directorNamespaces[index];

  if (day === +localStorage.getItem('day')) {
    return localStorage.getItem('director');
  }

  while (director === localStorage.getItem('director')) {
    index = Math.floor(Math.random() * directorNamespaces.length);
    director = directorNamespaces[index];
  }

  localStorage.setItem('director', director);
  localStorage.setItem('day', day);

  return director;
};

export default chooseDirector;

const chooseDirector = (directorNamespaces) => {
  const day = new Date();
  const shortDay = `${day}`.slice(4, 15);
  const directorNum = Math.floor(Math.random() * directorNamespaces.length);
  // const director = directorNamespaces[day.getDay()];
  // if (director) return director;
  if (shortDay === localStorage.getItem('shortDay')) {
    return directorNamespaces[localStorage.getItem('directorNum')];
  }
  localStorage.setItem('directorNum', directorNum);
  localStorage.setItem('shortDay', shortDay);
  return directorNamespaces[directorNum];
};

export default chooseDirector;

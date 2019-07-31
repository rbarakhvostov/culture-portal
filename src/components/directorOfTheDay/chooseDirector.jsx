const chooseDirector = (directorNamespaces) => {
  const day = new Date();
  const shortDay = `${day}`.slice(4, 15);
  let directorNum = Math.floor(Math.random() * directorNamespaces.length);
  if (shortDay === localStorage.getItem('shortDay')) {
    return directorNamespaces[localStorage.getItem('directorNum')];
  }
  while (directorNum === localStorage.getItem('directorNum')) {
    directorNum = Math.floor(Math.random() * directorNamespaces.length);
  }
  localStorage.setItem('directorNum', directorNum);
  localStorage.setItem('shortDay', shortDay);
  return directorNamespaces[directorNum];
};

export default chooseDirector;

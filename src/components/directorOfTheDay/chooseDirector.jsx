const chooseDirector = (directorNamespaces) => {
  const day = new Date().getDate();
  let directorNum = Math.floor(Math.random() * directorNamespaces.length);
  if (`${day}` === localStorage.getItem('day')) {
    return directorNamespaces[localStorage.getItem('directorNum')];
  }
  while (`${directorNum}` === localStorage.getItem('directorNum')) {
    directorNum = Math.floor(Math.random() * directorNamespaces.length);
  }
  localStorage.setItem('directorNum', directorNum);
  localStorage.setItem('day', day);
  return directorNamespaces[directorNum];
};

export default chooseDirector;

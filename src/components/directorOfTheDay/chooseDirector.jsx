const chooseDirector = (directorNamespaces) => {
  let director;
  const day = new Date();

  switch (day.getDay()) {
    case 1:
    case 4:
      [director] = [directorNamespaces[0]];
      break;
    case 2:
    case 6:
      [director] = [directorNamespaces[1]];
      break;
    case 3:
      [director] = [directorNamespaces[0]];
      break;
    case 5:
      [director] = [directorNamespaces[0]];
      break;
    case 0:
      [director] = [directorNamespaces[0]];
      break;
    default:
      [director] = [directorNamespaces[0]];
  }

  return director;
};

export default chooseDirector;

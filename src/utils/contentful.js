const contentful = require('contentful');

const client = contentful.createClient({
  space: 'gwm80bq77yih',
  accessToken: 'JfAKlnv_lv7iKnQg35R952YX0DNu5TWxzDvEx4kW7Os',
});

const getData = (id) =>
  client.getEntry(id).then((entry) => entry.fields.directorData);

export default getData;

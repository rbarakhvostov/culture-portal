const contentful = require('contentful');

const client = contentful.createClient({
  space: 'gwm80bq77yih',
  accessToken: 'JfAKlnv_lv7iKnQg35R952YX0DNu5TWxzDvEx4kW7Os',
});

const foo = () => {
  client.getEntry('7rZee2IU1DUnEpHnPFvu0b').then((entry) => {
    console.log(entry);
    console.log(entry.sys);
    console.log(entry.fields.productName);
  });
};

foo();

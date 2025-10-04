const url = 'https://www.npmjs.com/package/url-metadata';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

urlMetadata(proxyUrl + url)
  .then((metadata) => {
    console.log(metadata);
  })
  .catch((error) => {
    console.error(error);
  });
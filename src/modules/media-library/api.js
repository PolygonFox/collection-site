import Config from 'Config';
import axios from 'axios';

function handleError(err) {
  // eslint-disable-next-line
  console.log(err);
}

export const getMedia = page =>
  new Promise((resolve, reject) => {
    axios.get(`${Config.api}/media/${page}`).then((res) => {
      resolve(res.data.media);
    }).catch((err) => {
      handleError(err);
      reject();
    });
  });

export default getMedia;

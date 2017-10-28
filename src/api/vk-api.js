import axios from 'axios';
const jsonp = require('jsonp');
import fetchJsonp from 'fetch-jsonp';

const API_URL = 'https://api.vk.com';

// В jsonp можно работать только с callback'ами, поэтому и сделал такую обертку
function jsonpPromise(url) {
  return new Promise((resolve, reject) => {
    jsonp(url, null, (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(data);
      }
    });
  })
}


export default {
  getUserPhotos: function(userId, access_token) {
    const requestUrl = `${API_URL}/method/photos.getAll?owner_id=${userId}&access_token=${access_token}`;
    return jsonpPromise(requestUrl).then((data) => {
      return data.response;
    });
  }
}

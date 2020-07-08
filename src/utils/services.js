import { checkInternetConnection } from 'react-native-offline';

const API_URL = 'https://api.reddit.com/r/pics/';

/**
 * postData, action to send data using the POST method
 * 
 * @param {string} url - url to concatenate to the base url
 * @param {object} data - data entry
 * @param {boolean} isAuth - check if the request needs an authorization
 */

export const postData = async (url, data, isAuth = false) => {
  const token = null; // por si se trabaja con token
  await checkConnection();
  return waitTimeOut(
    fetch(`${API_URL}${url}`, {
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Accept-Language': 'en',
        'Content-Type': 'application/json',
        Authorization: isAuth ? `Bearer ${token}` : '',
      },
      method: 'POST',
    }),
  )
    .then(checkStatus)
    .then(res => res)
    .catch(err => Promise.reject(err));
};

/**
 * getData, action to bring information by the GET method
 * 
 * @param {string} url - url to concatenate to the base url
 * @param {boolean} isAuth - check if the request needs an authorization
 */

export const getData = async (url, isAuth = false) => {
  const token = null; // por si se trabaja con token
  await checkConnection(); // chequear conexión a internet
  const headers = {
    Accept: 'application/json',
    'Accept-Language': 'en',
    'Content-Type': 'application/json',
    Authorization: isAuth ? `Bearer ${token}` : '',
  };
  return waitTimeOut(
    fetch(`${API_URL}${url}`, {
      headers,
      method: 'GET',
    }),
  )
    .then(checkStatus)
    .then(res => res)
    .catch(err => Promise.reject(err));
};

/**
 * checkStatus, incoming response is checked
 * 
 * @param {*} response - response entry
 * @returns {Promise} promise
 */

const checkStatus = response => {
  console.log('request ', response);

  if (response && response.ok) {
    if (response.status === 204) {
      return { status: 'No content response' };
    }
    return response.json().then(res => {
      res.statusCode = response.status;
      return Promise.resolve(res);
    });
  }
  return response.json().then(err => {
    err.statusCode = response.status;
    return Promise.reject(err);
  });
};

/**
 * checkConnection, verify internet connection for each request
 * 
 */
const checkConnection = async () => {
  const isConnected = await checkInternetConnection();

  if (!isConnected) {
    throw { statusCode: 1000, message: 'Check your internet connection' };
  }
};


/**
 * checkConnection, verify internet connection for each request
 *
 * @param {Promise} promise - sdasd
 * @param {number} ms - seconds to wait
 * @returns {Promise} promise
 */
const waitTimeOut = (promise, ms = 2500) => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      promise.then(resolve, reject);
    }, ms);
  });
};

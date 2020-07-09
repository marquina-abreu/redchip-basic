import { Alert } from 'react-native';
/**
 * wait time out
 *
 * @param {string} timeout - param number
 * @returns {Promise} - promise setTmeout
 */
export const waitTimeOut = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

/**
 * Alert react native
 *
 * @param {string} title - title param alert
 * @param {string} content - content param alert
 */
export const handleAlert = (title, content) => {
  Alert.alert(title, content, [
    {
      text: 'Ok',
    },
  ]);
};

export const URL_REDDIT = 'https://www.reddit.com';

export const listTypeImg = ['jpg', 'png', 'jpeg'];

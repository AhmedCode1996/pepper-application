import axios from 'axios';
const url =
  'https://pepper-application-default-rtdb.firebaseio.com/contactInformation.json';

export function sendData(contactInfo) {
  axios.post(url, contactInfo);
}

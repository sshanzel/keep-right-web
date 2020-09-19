export default {
  isProduction: process.env.NODE_ENV === 'production',
  apiUrl: process.env.REACT_APP_API_URL,
  firebase: {
    apiKey: process.env.REACT_APP_AUTH_API_KEY,
    authDomain: 'keepright.firebaseapp.com',
    databaseURL: 'https://keepright.firebaseio.com',
    projectId: 'keepright',
    storageBucket: 'keepright.appspot.com',
    messagingSenderId: '554810325841',
    appId: '1:554810325841:web:cbf356215d292f834bf170',
    measurementId: 'G-61GYH5CG0T',
  },
  sendEmailVerification: process.env.REACT_APP_SEND_EMAIL_VERIFICATION,
};

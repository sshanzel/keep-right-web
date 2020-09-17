import firebase from 'firebase';
import config from 'src/config';

export interface Credentials {
  email: string;
  password: string;
}

const KEEP_RIGHT = 'KEEP_RIGHT';

export interface KeepRight extends firebase.app.App {}

export const initializeFirebaseApp = (): KeepRight => {
  var firebaseConfig = {
    apiKey: config.authApiKey,
    authDomain: 'jovial-trilogy-268111.firebaseapp.com',
    databaseURL: 'https://jovial-trilogy-268111.firebaseio.com',
    projectId: 'jovial-trilogy-268111',
    storageBucket: 'jovial-trilogy-268111.appspot.com',
    messagingSenderId: '1012674128649',
    appId: '1:1012674128649:web:6ffcf0b8ddba81106701d8',
  };

  const keepRight = firebase.initializeApp(firebaseConfig, KEEP_RIGHT);

  return keepRight;
};

export const getApp = (appName: string) => firebase.app(appName);

export const authenticate = async ({email, password}: Credentials) => {
  const keepRight = getApp(KEEP_RIGHT);

  await keepRight.auth().setPersistence('session');

  try {
    await keepRight.auth().signInWithEmailAndPassword(email, password);
  } catch (ex) {
    return ex;
  }
};

export const observeStateChanges = (callback: (user: firebase.User | null) => void) => {
  const keepRight = getApp(KEEP_RIGHT);

  keepRight.auth().onAuthStateChanged(callback);
};

export const logout = () => {
  const keepRight = getApp(KEEP_RIGHT);

  keepRight.auth().signOut();
};

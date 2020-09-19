import firebase from 'firebase';
import config from 'src/config';
import {postUser} from './user.service';

export interface Credentials {
  email: string;
  password: string;
}

const KEEP_RIGHT = 'KEEP_RIGHT';

export interface KeepRight extends firebase.app.App {}

export const initializeFirebaseApp = (): KeepRight => {
  const keepRight = firebase.initializeApp(config.firebase, KEEP_RIGHT);

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

export const registerUser = async (email: string, password: string, name: string) => {
  const keepRight = getApp(KEEP_RIGHT);

  try {
    const userCredential = await keepRight.auth().createUserWithEmailAndPassword(email, password);

    if (config.sendEmailVerification) userCredential.user?.sendEmailVerification();

    await postUser(name);

    window.location.reload();
  } catch (ex) {
    return ex.message;
  }
};

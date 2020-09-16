import firebase from 'firebase';

export default interface User {
  id: string;

  firebaseUser: firebase.User;
}

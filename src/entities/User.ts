import firebase from 'firebase';

export default interface User {
  id: string;
  name: string;

  firebaseUser: firebase.User;
}

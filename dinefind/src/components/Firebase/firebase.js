import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAqEFmVsDH5PmYM2MGng6bLUJh5CHsS9pU",
    authDomain: "dinefind-e3e7c.firebaseapp.com",
    databaseURL: "https://dinefind-e3e7c.firebaseio.com",
    projectId: "dinefind-e3e7c",
    storageBucket: "dinefind-e3e7c.appspot.com",
    messagingSenderId: "581549145018",
    appId: "1:581549145018:web:396803831332dbe9c27b83"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;

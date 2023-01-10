import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'


//config

const config = {
    apiKey: "AIzaSyCha4HOcgD_nVkf7HThP84sDDERunDUsWQ",
    authDomain: "netlix-app.firebaseapp.com",
    projectId: "netlix-app",
    storageBucket: "netlix-app.appspot.com",
    messagingSenderId: "757243983400",
    appId: "1:757243983400:web:4b5183c01e68740f53271d"
}

const firebase = Firebase.initializeApp(config)

seedDatabase(firebase)

export { firebase }

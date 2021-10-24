import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyDAC4_oFxWcJsNnb7MGvd0UpQd9PRisLsE",
    authDomain: "vxnnchat.firebaseapp.com",
    projectId: "vxnnchat",
    storageBucket: "vxnnchat.appspot.com",
    messagingSenderId: "328085417312",
    appId: "1:328085417312:web:ffd680587186fc4befc205",
    measurementId: "G-28W2YMTB37"
})

export default firebase;

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
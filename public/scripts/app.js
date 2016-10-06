(function() {
    'use strict';
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var showToastButton = document.querySelector('#demo-show-toast');

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCQC0Z1hGjiGvRLtYKoTOiccUzZExV4sqw",
        authDomain: "turfv1-4b71d.firebaseapp.com",
        databaseURL: "https://turfv1-4b71d.firebaseio.com",
        storageBucket: "turfv1-4b71d.appspot.com",
    };
    firebase.initializeApp(config);

    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');

    // Add login event
    btnLogin.addEventListener('click', e => {
        // Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => (console.log(e.message)));
    });

    // btnSignup.addEventListener('click', e => {
    //     const email = txtEmail.value;
    //     const pass = txtPassword.value;
    //     const auth = firebase.auth();
    //     // Create user
    //     const promise = auth.createUserWithEmailAndPassword(email, pass);
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     promise.catch(e => console.log(e.message));
    //
    // });

    // Add logout event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            console.log('logged in');
            btnLogout.style.visibility = 'visible';
            btnLogout.disabled = false;
            btnLogin.disabled = true;
            var user = firebase.auth().currentUser;
            var name, email, photoUrl, uid;
            if (user != null) {
              name = user.displayName;
              email = user.email;
              uid = user.uid;                     // The user's ID, unique to the Firebase project. Do NOT use
              console.log(email);                 // this value to authenticate with your backend server, if
            var data =
                'Status: User' + ' ' + user.email + ' ' + 'logged in'
            ;
            Materialize.toast(data, 4000)


}

        } else {
            btnLogout.style.visibility = 'hidden';
            btnLogout.disabled = true;
            btnLogin.disabled = false;
            console.log('Logged out');
            'use strict';
            var data =
                'Status: Logged out'
            ;
            Materialize.toast(data, 4000);

        }
    });

}());

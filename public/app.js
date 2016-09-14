(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCQC0Z1hGjiGvRLtYKoTOiccUzZExV4sqw",
        authDomain: "turfv1-4b71d.firebaseapp.com",
        databaseURL: "https://turfv1-4b71d.firebaseio.com",
        storageBucket: "turfv1-4b71d.appspot.com",
    }; firebase.initializeApp(config);

    // var bigOne = document.getElementById('bigOne');
    // var dbRef = firebase.database().ref().child('text'); dbRef.on('value', snap => bigOne.innerText = snap.val());

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
      promise.catch(e => console.log(e.message));
    });

    // Add signup event
    // Get email and password
    // TODO: Check for real email
    btnSignup.addEventListener('click', e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      // Create user
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    });

    // Add logout event
    btnLogout.addEventListener('click', e=> {
      firebase.auth().signOut();
    });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
      }
      else {
        console.log('not logged in');
        btnLogout.classList.add('hide');
      }
    });



}());

import React from 'react'

function FirebaseInit(){
  return(
    <>
      <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Your web app's Firebase configuration
            var firebaseConfig = {
              apiKey: "AIzaSyB-S27CKOZizVxj_5j9SPCDECaDY1cnSLY",
              authDomain: "portfolio-gatsby-f56ce.firebaseapp.com",
              databaseURL: "https://portfolio-gatsby-f56ce.firebaseio.com",
              projectId: "portfolio-gatsby-f56ce",
              storageBucket: "portfolio-gatsby-f56ce.appspot.com",
              messagingSenderId: "278494977481",
              appId: "1:278494977481:web:1503f085bc21a9fcd89c18",
              measurementId: "G-67TK6YJ110"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            `,
        }}
      />
    </>
  )
}

export default FirebaseInit
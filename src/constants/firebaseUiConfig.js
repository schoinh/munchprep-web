import firebase from "firebase/app";

var firebaseUiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function () {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    // uiShown: function () {
    //   // The widget is rendered.
    //   // Hide the loader.
    //   document.getElementById("loader").style.display = "none";
    // }
  },
  signInFlow: "popup",
  signInSuccessUrl: "/#/home",
  signInOptions: [
    {
      // Leave the lines as is for the providers you want to offer your users.
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: "select_account"
      }
    }
  ],
  // Terms of service url.
  // tosUrl: '<your-tos-url>',
  // // Privacy policy url.
  // privacyPolicyUrl: '<your-privacy-policy-url>'
};

export default firebaseUiConfig;
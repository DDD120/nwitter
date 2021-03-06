import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import React from "react";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  return (
    <div className="auth">
      <div className="center">
        <AuthForm />
        <div className="social">
          <button onClink={onSocialClick} name="google">
            Continue with Google
          </button>
          <button onClink={onSocialClick} name="github">
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};
export default Auth;

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const Sign = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <button onClick={logGoogleUser}>Sign In With Google PopUp </button>
        <SignUpForm />
      </div>
    </>
  );
};

export default Sign;

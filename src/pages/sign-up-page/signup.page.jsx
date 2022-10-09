import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";
const Sign = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <button onClick={logGoogleUser}>Sign In With Google PopUp </button>
      </div>
    </>
  );
};

export default Sign;

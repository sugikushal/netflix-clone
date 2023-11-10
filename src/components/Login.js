import { useRef, useState } from "react";
import { LOGIN_BG_IMG, LOGO } from "../utils/constants";
import { validateEmailPassword } from "../utils/validate";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [validateResult, setValidateResult] = useState(null);

  const togglePage = () => {
    setIsSignInPage(!isSignInPage);
  };
  const handleAuth = () => {
    const validate = validateEmailPassword(emailRef.current.value, passwordRef.current.value);
    setValidateResult(validate);
  }

  return (
    <div>
      <img className="absolute w-44 ml-10 z-10 mt-5" src={LOGO} alt="LOGO" />
      <img
        className="brightness-50 min-h-full min-w-full overflow-clip"
        src={LOGIN_BG_IMG}
        alt="BG_IMG"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute pt-12 pb-36 px-20 mx-auto my-28 right-0 left-0 top-0 w-1/5 bg-black bg-opacity-50 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInPage ? "Sign In" : "Sign Up"}
        </h1>
        <div className="mt-10">
          {!isSignInPage && (
            <input
              type="text"
              className="p-4 w-full my-4 mr-5 rounded-md  bg-stone-700 text-white"
              placeholder="Name"
            />
          )}
          <input
            type="email"
            className="p-4 w-full my-4 mr-5 rounded-md  bg-stone-700 text-white"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            type="password"
            className="p-4 w-full my-4 mr-5 rounded-md  bg-stone-700 text-white"
            placeholder="Password"
            ref={passwordRef}
          />
          {validateResult && <span className="text-red-500">{validateResult}</span>}
          <button className="bg-red-500 w-full p-4 my-4 text-white rounded-md" onClick={handleAuth}>
            {isSignInPage ? "Sign In" : "Sign Up"}
          </button>
          <div>
            <span className="text-stone-400">
              {isSignInPage ? "New to Netflix?" : "Already have an account"}{" "}
            </span>
            <span onClick={togglePage} className="cursor-pointer">
              {isSignInPage ? "Sign Up now" : "Sign In"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

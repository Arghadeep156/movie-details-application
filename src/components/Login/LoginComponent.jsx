import "./Style.scss";
import { useEffect } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  userIsLoading,
  userLoadSuccessful,
  userLoadError,
} from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

export const LoginComponent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isAuth } = useSelector((state) => state.user);

  const handleAuth = () => {
    dispatch(userIsLoading()); // Set loading state
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        let data = {};
        data.userdata = result.user;
        data.tokendata = result._tokenResponse;
        console.log(data);
        // Dispatch the user data and update auth status
        dispatch(userLoadSuccessful(data));

        // Redirect to favourites page after successful login
        navigate(`/${data.userdata.uid}/favourites`);
      })
      .catch((error) => {
        // If an error occurs, dispatch the error
        dispatch(userLoadError(error.message));
        console.error("Error during sign-in:", error);
      });
  };
  // If the user is already authenticated, redirect them to the favourites page
  useEffect(() => {
    if (isAuth) {
      navigate(`/${data.uid}/favourites`);
    }
  }, [isAuth, data.uid, navigate]);

  return (
    <section className="container">
      <div className="content">
        <div className="cta">
          <img className="cta-logo-one" src="/public/cta-logo-one.png" alt="" />
          <a className="sign-up" onClick={handleAuth}>
            LOGIN AND GET ALL THERE
          </a>
          <p className="description">
            Get Access to your selected favourite movies and TV shows list.
          </p>
          <img className="cta-logo-two" src="/public/cta-logo-two.png" alt="" />
        </div>
        <div className="bg-image" />
      </div>
    </section>
  );
};

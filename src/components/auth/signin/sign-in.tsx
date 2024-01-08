import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ISignInRequest } from "../../../services/api/auth-api";
import { handleSignInRequest } from "../../../redux/features/auth/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  authLoading,
  authLoggedSuccess,
  authUserBasicInfo,
} from "../../../redux/features/auth/selector";
import { CompareWithStringify } from "../../../utils/utilsFunction";
function TabSignInAuthentication() {
  const [user, setUser] = useState<Partial<ISignInRequest>>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(authLoading);
  const logged = useSelector(authLoggedSuccess);
  const userBasicInfo = useSelector(authUserBasicInfo);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(handleSignInRequest(user as ISignInRequest) as any);
  };

  useEffect(() => {
    if (
      !loading &&
      logged &&
      userBasicInfo &&
      !CompareWithStringify(userBasicInfo, {})
    ) {
      navigate("/@me");
    }
  }, [loading, logged, userBasicInfo, navigate]);

  return (
    <StyleSignIn>
      <form className="wrapper-form" onSubmit={(e) => handleSubmit(e)}>
        <section className="sign-in">
          <div className="header">
            <h2>Welcome back!</h2>
            <p className="welcome">We're so excited to see you again!</p>
          </div>
          <div className="wrap-form-group">
            <div className="form-group">
              <label className="email">
                EMAIL OR PHONE NUMBER <span>*</span>
              </label>
              <input name="email" type="text" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="password">
                PASSWORD <span>*</span>
              </label>
              <input
                name="password"
                type="password"
                onChange={handleInputChange}
              />
            </div>
            <a>Forgot your password?</a>
          </div>
          <div>
            <button type="submit">
              {loading ? <div className="loader animate-spin"></div> : "Log In"}
            </button>
            <p className="need-account">
              Need an account?{" "}
              <a onClick={() => navigate("/register")}>Register</a>
            </p>
          </div>
        </section>
      </form>
    </StyleSignIn>
  );
}

const StyleSignIn = styled.div`
  & {
    flex: 1;
    background: gray;
    position: relative;
  }

  @keyframes slideInFromTop {
    0% {
      opacity: 0.3;
      transform: translateX(-50%) translateY(-100%);
    }

    100% {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%);
    }
  }

  .wrapper-form {
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #313338;
    border-radius: 10px;
    padding: 35px;
    height: 400px;
    width: 500px;
    animation: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 slideInFromTop;
  }

  .loader {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid black;
    border-top-color: transparent;
  }

  .sign-in {
    flex: 1;
  }

  span {
    color: red;
  }

  .header {
    text-align: center;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: white;
  }

  .wrap-form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 25px;
  }

  input {
    width: 100%;
    height: 40px;
    outline: none;
    padding-left: 10px;
    background: #1e1f22;
    border-radius: 3px;
  }

  a,
  .welcome,
  .need-account {
    font-size: 14px;
  }

  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  a {
    color: #059be7;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .welcome {
    color: #b5bac1;
    font-size: 16px;
  }

  .need-account {
    color: #949ba4;
    font-size: 14px;
  }

  .email,
  .password {
    color: #b5bac1;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  button {
    background: #5865f2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  button:hover {
    background: #4752c4;
  }
`;
export default TabSignInAuthentication;

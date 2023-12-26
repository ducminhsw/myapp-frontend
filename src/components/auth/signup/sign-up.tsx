import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ISignUpRequest } from "../../../services/api/auth-api";
import {
  handleSignUpRequest,
  authLoading,
} from "../../../redux/features/auth/slice";
import { useDispatch, useSelector } from "react-redux";

interface Account {
  email: string;
  username: string;
  password: string;
  displayName: string;
  date: string;
  month: string;
  year: string;
}

interface Select {
  name: string;
  value: any;
  onChange: (e: any) => void;
  options: any[];
}

const Select = ({ options, value, onChange, name }: Select) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyleDropdown>
      <section
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        onBlur={() => setIsOpen(false)}
      >
        {isOpen ? (
          <section className="container-options">
            {options.map((option, index) => (
              <div
                key={index}
                data-name={name}
                data-value={option}
                className="option"
                onClick={onChange}
              >
                {option}
              </div>
            ))}
          </section>
        ) : null}

        {value ? (
          <div className="option">{value}</div>
        ) : (
          <section>
            <div className="option">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
          </section>
        )}
      </section>
    </StyleDropdown>
  );
};

const TabSignUpAuthentication = () => {
  const [account, setAccount] = useState<Partial<Account>>({});
  const [errors, setErrors] = useState<Partial<Account>>({});
  const dispatch = useDispatch();
  const Loading = useSelector(authLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Loading.isLoading && Loading.success) {
      navigate("/login");
    }
  }, [Loading.success, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.nodeName === "DIV") {
      setAccount((prev) => ({
        ...prev,
        [e.target.dataset.name!]: e.target.dataset.value,
      }));
    } else {
      setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: any = {};
    if (!account.username) {
      errors.username = "Username is required";
    }

    if (!account.displayName) {
      errors.displayName = "DisplayName is required";
    }

    if (!account.password) {
      errors.password = "Password is required";
    }

    if (!account.email) {
      errors.email = "Email is required";
    }

    if (!account.date) {
      errors.date = "Date is required";
    }

    if (!account.month) {
      errors.month = "Month is required";
    }

    if (!account.year) {
      errors.year = "Year is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const dateOfBirth = `${account.month}/${
      +account.date! < 10 ? `0${account.date}` : account.date
    }/${account.year}`;

    const data: ISignUpRequest = {
      email: account.email!,
      username: account.username!,
      password: account.password!,
      displayName: account.displayName!,
      dateOfBirth,
    };

    dispatch(handleSignUpRequest(data) as any);

    setErrors({});
    setAccount({
      email: "",
      username: "",
      password: "",
      displayName: "",
    });
  };

  return (
    <StyleSignUp>
      <form className="wrapper-form" onSubmit={(e) => handleSubmit(e)}>
        <section className="sign-up">
          <div className="header">
            <h2>Create an account</h2>
          </div>
          <div className="wrap-form-group">
            <div className="form-group">
              <label className="email">
                EMAIL <span>*</span>
              </label>
              <input
                value={account.email}
                name="email"
                type="text"
                onChange={handleInputChange}
              />
              <p className="error-message">{errors.email}</p>
            </div>
            <div className="form-group">
              <label>
                DISPLAY NAME <span>*</span>
              </label>
              <input
                value={account.displayName}
                name="displayName"
                type="text"
                onChange={handleInputChange}
              />
              <p className="error-message">{errors.displayName}</p>
            </div>
            <div className="form-group">
              <label>
                USERNAME <span>*</span>
              </label>
              <input
                value={account.username}
                name="username"
                type="text"
                onChange={handleInputChange}
              />
              <p className="error-message">{errors.username}</p>
            </div>
            <div className="form-group">
              <label className="password">
                PASSWORD <span>*</span>
              </label>
              <input
                value={account.password}
                name="password"
                type="password"
                onChange={handleInputChange}
              />
              {errors && errors["password"] ? (
                <p className="error-message">{errors.password}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label>
                DATE OF BIRTH <span>*</span>
              </label>
              <section className="date">
                <section>
                  <Select
                    name="month"
                    value={account.month}
                    onChange={handleInputChange}
                    options={[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ]}
                  />
                  {errors && errors["month"] ? (
                    <p className="error-message">{errors["month"]}</p>
                  ) : null}
                </section>
                <section>
                  <Select
                    name="date"
                    value={account.date}
                    onChange={handleInputChange}
                    options={[
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                    ]}
                  />
                  {errors && errors["date"] ? (
                    <p className="error-message">{errors["date"]}</p>
                  ) : null}
                </section>
                <section>
                  <Select
                    name="year"
                    value={account.year}
                    onChange={handleInputChange}
                    options={Array.from(
                      { length: 2020 - 1871 + 1 },
                      (_, index) => 1871 + index
                    ).sort((a, b) => b - a)}
                  />
                  {errors && errors["year"] ? (
                    <p className="error-message">{errors["year"]}</p>
                  ) : null}
                </section>
              </section>
            </div>
            <button type="submit">
              {Loading.isLoading ? (
                <div className="loader animate-spin"></div>
              ) : (
                "Continue"
              )}
            </button>
          </div>
          <div>
            <a className="have-account" onClick={() => navigate("/login")}>
              Already have an account?{" "}
            </a>
          </div>
        </section>
      </form>
    </StyleSignUp>
  );
};

export default TabSignUpAuthentication;

const StyleSignUp = styled.div`
  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
  }

  .loader {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid black;
    border-top-color: transparent;
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
    width: 500px;
    animation: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 slideInFromTop;
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

  select {
    background: #1e1f22;
    border-radius: 5px;
    height: 40px;
    padding: 5px;
    outline: none;
  }

  select option {
    background: rgba(150, 150, 150, 0.3);
  }

  label {
    font-size: 12px;
    color: #b5bac1;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  .sign-up {
    flex: 1;
  }

  span {
    color: red;
  }

  .date {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: #b5bac1;
    gap: 5px;
  }

  button {
    background: #5865f2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    border-radius: 3px;
    margin: 20px 0px 10px 0px;
  }

  .have-account {
    color: #059be7;
    cursor: pointer;
  }
  .have-account:hover {
    text-decoration: underline;
  }

  .error-message {
    color: red;
  }
`;

const StyleDropdown = styled.div`
  & {
    background: #1e1f22;
    border-radius: 5px;
    height: 40px;
    padding: 5px;
    position: relative;
    cursor: pointer;
  }

  .container-options {
    position: absolute;
    background: #313338;
    width: 100%;
    transform: translateY(-103%) translateX(-5px);
    max-height: 200px;
    overflow-y: scroll;
  }

  .container-options > div {
    padding: 8px;
    cursor: pointer;
  }

  .container-options > div:hover {
    background: rgba(150, 150, 150, 0.3);
  }

  .error-message {
    color: rgb(255, 0, 0, 0.8);
  }
`;

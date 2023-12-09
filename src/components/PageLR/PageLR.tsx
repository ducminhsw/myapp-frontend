import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { useDispatch } from "react-redux";

type Props = {};
export default function PageLR({}: Props) {
  const dispatch = useDispatch();
  const [statusUser, setStatusUser] = useState("login");
  const handleSwapLoginandRegister = (value: string) => {
    if (value === "login") {
      setStatusUser(value);
    }
    if (value === "register") {
      setStatusUser(value);
    }
  };
  return (
    <>
      <section className=" bg-gradient-to-r pt-[60px]  from-purple-500 to-pink-500 min-h-[100vh]">
        {statusUser === "login" && (
          <Login
            statusUser={statusUser}
            setStatusUser={setStatusUser}
            handleSwapLoginandRegister={handleSwapLoginandRegister}
          />
        )}
        {statusUser === "register" && (
          <Register
            statusUser={statusUser}
            setStatusUser={setStatusUser}
            handleSwapLoginandRegister={handleSwapLoginandRegister}
          />
        )}
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { handleLoginRedux } from "../../../redux/features/login/loginSlice";
const LoginSchema = z
  .object({
    email: z.string().min(1, { message: "Vui lòng nhập tên người dùng" }),
    password: z.string().min(1, { message: "Vui lòng nhập mật khẩu" }),
  })
  .required();
interface KeyboardEventWithCode extends KeyboardEvent {
  code: string;
}
type Prop = {
  statusUser: string;
  setStatusUser: (vale: string) => void;
  handleSwapLoginandRegister: (value: string) => void;
};
type StateLoginProp = { email: string; password: string };

export default function Login({ statusUser, handleSwapLoginandRegister }: Prop) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({} as StateLoginProp);

  const handleLogin = async () => {
    try {
      LoginSchema.parse(data);
      let dataRedux = { email: data.email, password: data.password };
      dispatch(handleLoginRedux(dataRedux));
      setTimeout(() => {
        navigate("/channels/me/0");
        setData({ email: "", password: "" } as StateLoginProp);
        setErrors({} as StateLoginProp);
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap = {} as StateLoginProp;
        error.errors.forEach((e) => {
          if (e.path) {
            let param = e.path[0];
            if (param) {
              errorMap[param as keyof StateLoginProp] = e.message;
            }
          }
        });
        setErrors(errorMap);
        toast.warning("Bạn phải nhập đầy đủ thông tin");
      }
    }
  };
  useEffect(() => {
    const listener = (event: KeyboardEventWithCode) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        handleLogin();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [data]);
  return (
    <>
      <section className="flex flex-col rounded-md w-[400px] h-[500px] gap-[15px] bg-white p-5 mx-[auto]">
        <span className="text-black font-bold "> Login </span>
        <div className="text-white  flex  rounded-md border-purple-600 border-[1px] font-medium">
          <div
            className={`w-[50%] text-center  p-5 ${
              statusUser === "login" ? ` bg-purple-600  ` : `text-black`
            }`}
            onClick={() => handleSwapLoginandRegister("login")}
          >
            Login
          </div>
          <div
            className={`w-[50%] text-center p-5 ${
              statusUser === "register" ? ` bg-purple-600  ` : `text-black `
            }`}
            onClick={() => handleSwapLoginandRegister("register")}
          >
            Register
          </div>
        </div>
        <input
          type="text"
          className="rounded-md p-3 border-purple-600 border-[1px] text-black"
          placeholder="Tài khoản Email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <input
          type="password"
          className="rounded-md p-3  border-purple-600 border-[1px] text-black"
          placeholder="Mật khẩu..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        <span className="text-purple-600">Quên mật khẩu?</span>
        <span
          className="bg-purple-600 p-3 text-white rounded-md mt-[10px] hover:opacity-50 text-center"
          onClick={handleLogin}
        >
          Đăng nhập
        </span>
        <span className="text-black  rounded-md p-3 ">
          Bạn không có tài khoản ?{" "}
          <span
            className="text-purple-600 font-medium hover:cursor-pointer hover:underline"
            onClick={() => handleSwapLoginandRegister("register")}
          >
            Đăng ký nào
          </span>
        </span>
      </section>
    </>
  );
}

import { useState } from "react";
import { z } from "zod";

const LoginSchema = z
  .object({
    username: z.string().min(1, { message: "Vui lòng nhập tên người dùng" }),
    password: z.string().min(1, { message: "Vui lòng nhập mật khẩu" }),
  })
  .required();

type Prop = {
  statusUser: string;
  setStatusUser: (vale: string) => void;
  handleSwapLoginandRegister: (value: string) => void;
};
type StateLoginProp = { username: string; password: string };
export default function Login({ statusUser, setStatusUser, handleSwapLoginandRegister }: Prop) {
  const [data, setData] = useState({ username: "", password: "" });

  const [errors, setErrors] = useState({} as StateLoginProp);

  const handleLogin = () => {
    try {
      LoginSchema.parse(data);
      console.log("Đăng nhập thành công");
      setData({ username: "", password: "" } as StateLoginProp);
      setErrors({} as StateLoginProp);
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
      }
    }
  };

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
          placeholder="Tài khoản..."
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
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

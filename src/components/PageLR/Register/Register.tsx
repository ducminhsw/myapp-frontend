import { useState } from "react";
import { z } from "zod";

const RegisterSchema = z
  .object({
    username: z.string().min(1, { message: "Vui lòng nhập tên người dùng" }),
    email: z
      .string()
      .min(1, { message: "Vui lòng nhập email" })
      .email({ message: "Bạn cần nhập email" }),
    lastName: z.string().min(1, { message: "Vui lòng nhập mật khẩu" }),
    firstName: z.string().min(1, { message: "Vui lòng nhập firstName" }),
    password: z.string().min(1, { message: "Vui lòng nhập password" }),
    passwordAgain: z.string().min(1, { message: "Vui lòng nhập lại password" }),
  })
  .required()
  .refine((data) => data.password === data.passwordAgain, {
    message: "Mật khẩu và xác thực không khớp",
  });

type Prop = {
  statusUser: string;
  setStatusUser: (vale: string) => void;
  handleSwapLoginandRegister: (value: string) => void;
};
export default function Register({ statusUser, setStatusUser, handleSwapLoginandRegister }: Prop) {
  const [data, setData] = useState({
    username: "",
    email: "",
    lastName: "",
    firstName: "",
    password: "",
    passwordAgain: "",
  });
  type StateRegisterProp = {
    username: string;
    email: string;
    lastName: string;
    firstName: string;
    password: string;
    passwordAgain: string;
  };

  const [errors, setErrors] = useState({} as StateRegisterProp);

  const handleRegister = () => {
    try {
      RegisterSchema.parse(data);
      console.log("Đăng ký thành công", data);
      setData({
        username: "",
        email: "",
        lastName: "",
        firstName: "",
        password: "",
        passwordAgain: "",
      } as StateRegisterProp);
      setErrors({} as StateRegisterProp);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap = {} as StateRegisterProp;
        error.errors.forEach((e) => {
          if (e.path) {
            let param = e.path[0];
            if (param) {
              errorMap[param as keyof StateRegisterProp] = e.message;
            }
          }
        });
        setErrors(errorMap);
      }
    }
  };

  return (
    <>
      <section className="flex flex-col rounded-md w-[400px] h-max-[800px] gap-[15px] bg-white p-5 mx-[auto]">
        <span className="text-black font-bold "> Register </span>
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
          className="rounded-md p-3 border-purple-600 border-[1px]  text-black"
          placeholder="Tài khoản..."
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
        <input
          type="text"
          className="rounded-md p-3 border-purple-600 border-[1px]  text-black"
          placeholder="Email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

        <section className="flex gap-[5px]">
          <div className="flex flex-col ">
            <input
              type="text"
              className="rounded-md p-3 border-purple-600 border-[1px]   text-black w-[100%]"
              placeholder="First Name..."
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />
            {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
          </div>
          <div className="flex flex-col ">
            <input
              type="text"
              className="rounded-md p-3 border-purple-600 border-[1px]  text-black w-[100%]"
              placeholder="Last Name..."
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
            {errors.lastName && <span style={{ color: "red" }}>{errors.lastName}</span>}
          </div>
        </section>
        <div className="flex  gap-[5px]">
          <div className="flex flex-col w-[50%] ">
            <input
              type="password"
              className="rounded-md p-3  border-purple-600 border-[1px]  text-black"
              placeholder="Mật khẩu..."
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
          </div>
          <div className="flex flex-col w-[50%]">
            <input
              type="password"
              className="rounded-md p-3  border-purple-600 border-[1px]  text-black"
              placeholder="Nhập Lại Mật khẩu..."
              value={data.passwordAgain}
              onChange={(e) => setData({ ...data, passwordAgain: e.target.value })}
            />
            {errors.passwordAgain && <span style={{ color: "red" }}>{errors.passwordAgain}</span>}
          </div>
        </div>

        <span
          className="bg-purple-600 p-3 text-white rounded-md mt-[10px] hover:opacity-50 text-center"
          onClick={handleRegister}
        >
          Đăng ký
        </span>
        <span className="text-black rounded-md p-3 ">
          Bạn đã có tài khoản ?{" "}
          <span
            className="text-purple-600 font-medium hover:cursor-pointer hover:underline"
            onClick={() => handleSwapLoginandRegister("login")}
          >
            Đăng nhập
          </span>
        </span>
      </section>
    </>
  );
}

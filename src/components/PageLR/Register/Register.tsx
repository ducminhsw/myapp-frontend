import { useEffect, useState } from "react";
import { z } from "zod";
import { handleUserRegister } from "../../../services/authService";

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
    dateOfBirth: z.string().min(1, { message: "Vui lòng nhập dateOfBirth" }),
    phoneNumber: z.string().min(1, { message: "Vui lòng nhập phoneNumber" }),
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
interface KeyboardEventWithCode extends KeyboardEvent {
  code: string;
}
export default function Register({ statusUser, handleSwapLoginandRegister }: Prop) {
  const [data, setData] = useState({
    username: "",
    email: "",
    lastName: "",
    firstName: "",
    password: "",
    passwordAgain: "",
    dateOfBirth: "",
    phoneNumber: "",
  });
  type StateRegisterProp = {
    username: string;
    email: string;
    lastName: string;
    firstName: string;
    password: string;
    passwordAgain: string;
    dateOfBirth: string;
    phoneNumber: string;
  };

  const [errors, setErrors] = useState({} as StateRegisterProp);

  const handleRegister = async () => {
    try {
      let parseData = RegisterSchema.parse(data);
      console.log("Đăng ký thành công", parseData);
      let res = await handleUserRegister({
        username: data.username,
        password: data.password,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        phoneNumber: data.phoneNumber,
      });
      setData({
        username: "",
        email: "",
        lastName: "",
        firstName: "",
        password: "",
        passwordAgain: "",
        dateOfBirth: "",
        phoneNumber: "",
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
  useEffect(() => {
    const listener = (event: KeyboardEventWithCode) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        handleRegister();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [data]);
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
              type="text"
              className="rounded-md p-3  border-purple-600 border-[1px]  text-black"
              placeholder="Ngày sinh"
              value={data.dateOfBirth}
              onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })}
            />
            {errors.dateOfBirth && <span style={{ color: "red" }}>{errors.dateOfBirth}</span>}
          </div>
          <div className="flex flex-col w-[50%]">
            <input
              type="text"
              className="rounded-md p-3  border-purple-600 border-[1px]  text-black"
              placeholder="Số điện thoại"
              value={data.phoneNumber}
              onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            />
            {errors.phoneNumber && <span style={{ color: "red" }}>{errors.phoneNumber}</span>}
          </div>
        </div>
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
        <span className="text-black rounded-md ">
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

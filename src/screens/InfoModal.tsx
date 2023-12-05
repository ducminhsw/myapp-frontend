import { SampleIC } from "../assets/images";
import { useState, useEffect } from "react";
type Props = {
  className?: string;
};
export default function InfoModal(props: Props) {
  let [userCredentials, setUserCredentials] = useState({});
  useEffect(() => {
    let data = localStorage.getItem("userCredentials");
    data && setUserCredentials(JSON.parse(data));
  }, []);
  return (
    <>
      <section {...props}>
        <div>
          <div className="bg-blue-500 h-[80px] rounded-t-xl"></div>
          <div className="bg-[#26282b] h-[300px] rounded-b-xl">
            <div className="bg-[#26282b] h-[50px] "></div>
            <div className="bg-[#17181b]  px-[15px] pt-[5px] w-[85%]  h-[75%]  rounded-xl m-auto flex flex-col gap-[5px]">
              <div className="flex flex-col   ">
                <span className="text-lg font-medium">
                  {`${userCredentials.firstName}
                  ${userCredentials.lastName}`}
                </span>
                <span className="pb-[5px]">{userCredentials.username}</span>
                <hr className="opacity-25 " />
              </div>
              <div className="flex flex-col  ">
                <span className=" font-medium">Tạo tài khoản từ</span>
                <span className="text-sm pb-[5px]">21/11/2020</span>
                <hr className="opacity-25 " />
              </div>
              <div className=" ">
                <div className="px-2 text-sm pb-[5px]">Trực tuyến</div>
                <hr className="opacity-25 " />
              </div>
              <div className="py-3 px-2 rounded-md hover:bg-[#44474d]">
                <span>Đổi Tài Khoản</span>
              </div>
            </div>
          </div>
          <img
            className="rounded-full w-[85px] h-[85px] object-cover absolute top-[10%] left-[10%] border-[5px] border-[#52555e]"
            src={SampleIC}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

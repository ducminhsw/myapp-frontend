import { setLogout } from "../../redux/features/login/loginSlice";
import Message from "./Message";
import ContentIcon from "./icons/ContentIcon";
import ListMemBerIcon from "./icons/ListMemBerIcon";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
let arr = [
  {
    id: "0",
    name: "Minh",
    dateTime: "09/07/2023 20:57",
    content: "Xin chào cậu mình là Nguyễn Đức Minh Học Tại Bách Khoa Hà Nội",
  },
  { id: "1", name: "Minh", dateTime: "09/07/2023 20:57", content: "Chào cậu" },
  { id: "1", name: "Minh", dateTime: "09/07/2023 20:57", content: "Chào cậu" },
  { id: "1", name: "Minh", dateTime: "09/07/2023 20:57", content: "Chào cậu" },
  { id: "1", name: "Minh", dateTime: "09/07/2023 20:57", content: "Chào cậu" },
  { id: "1", name: "Minh", dateTime: "09/07/2023 20:57", content: "Chào cậu" },
];

const ChatComp = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);
  return (
    <>
      <section className="flex flex-col w-full">
        <div className="h-full ">
          <div className="flex justify-between px-[10px] py-[10px] shadow-md ">
            <div className="flex">
              <ContentIcon className="mx-[5px] " />
              <span>general</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <ListMemBerIcon />
              <i
                className="fa-solid fa-right-from-bracket cursor-pointer hover:opacity-50"
                onClick={() => {
                  dispatch(setLogout());
                  navigate("/");
                }}
              ></i>
            </div>
          </div>
          <div
            className="overflow-y overflow-scroll scroll-smooth max-h-[80vh] overflow-x-hidden"
            ref={chatContainerRef}
          >
            {arr.map((item, index) => {
              return <Message {...item} />;
            })}
          </div>
        </div>
        <div className="mx-[12px] bg-[#52555e] rounded-md p-2 mb-[10px]">
          <i className="fa-solid fa-plus rounded-full  bg-slate-500 px-[9px] py-[8px] cursor-pointer hover:opacity-50"></i>
          <input
            className="p-2 text-[white] w-[90%] bg-transparent outline-none"
            type="text"
            placeholder="Nhắn tin"
          />
          <i className="fa-solid fa-paper-plane hover:opacity-60 w-[5%] text-right cursor-pointer"></i>
        </div>
      </section>
    </>
  );
};

export default ChatComp;

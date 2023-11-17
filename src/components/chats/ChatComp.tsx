import Message from "./Message";
import ContentIcon from "./icons/ContentIcon";
import ListMemBerIcon from "./icons/ListMemBerIcon";

let arr = [
  {
    id: "0",
    name: "Minh",
    dateTime: "09/07/2023 20:57",
    content: "Xin chào cậu mình là Nguyễn Đức Minh Học Tại Bách Khoa Hà Nội",
  },
  { id: "0", name: "Minh", dateTime: "09/07/2023 20:57", content: "Chào cậu" },
];

const ChatComp = () => {
  return (
    <div className="h-full w-5/6">
      <div className="flex justify-between px-[10px] py-[10px] shadow-md ">
        <div className="flex">
          <ContentIcon className="mx-[5px] " />
          <span>general</span>
        </div>
        <ListMemBerIcon />
      </div>
      <div>
        {arr.map((item, index) => {
          return <Message {...item} />;
        })}
      </div>
    </div>
  );
};

export default ChatComp;

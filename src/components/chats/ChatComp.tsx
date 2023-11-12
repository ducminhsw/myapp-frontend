import Message from "./Message";
import ContentIcon from "./icons/ContentIcon";
import ListMemBerIcon from "./icons/ListMemBerIcon";

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
        Body
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default ChatComp;

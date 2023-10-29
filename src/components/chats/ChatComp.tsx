import Message from "./Message";

const ChatComp = () => {
  return (
    <div className="h-full w-5/6">
      <div>Header</div>
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

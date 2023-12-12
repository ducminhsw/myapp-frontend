interface IProps {
  userName: string;
  onlineStatus: boolean;
}

export const FriendItem = (props: IProps) => {
  const { userName, onlineStatus } = props;

  const hanldeChatBtn = () => {
    console.log("User id");
  };

  return (
    <div className="flex justify-between items-center border-t-[1px] border-[#747373] p-4">
      <div className="flex gap-4 items-center">
        <div className="relative">
          <img
            src="https://laputafarm.com/wp-content/uploads/2021/12/6222590fa85a62043b4b.jpg"
            className="w-[35px] h-auto rounded-full"
          />
          <div
            className={`absolute right-[-4px] bottom-0 ${
              onlineStatus ? "bg-green-600" : "bg-red-600"
            } w-3 h-3 rounded-full border-2`}
          ></div>
        </div>
        <div>
          <p className="font-bold">{userName}</p>
          <p className="text-sm">{onlineStatus ? "Online" : "Offline"}</p>
        </div>
      </div>
      <div
        className="flex w-8 h-8 justify-center items-center bg-[#333] rounded-full cursor-pointer hover:bg-[#5b5b5b] transition-all duration-200"
        onClick={hanldeChatBtn}
      >
        <i className="fas fa-comment" />
      </div>
    </div>
  );
};

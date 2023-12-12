import { SampleIC } from "../../assets/images";
type Props = {
  id: string;
  name: string;
  dateTime: string;
  content: string;
};
const Message = ({ id, name, dateTime, content }: Props) => {
  return (
    <div className="flex w-full  mt-2 p-3 hover:bg-[#7aa1be]">
      <div className="flex flex-row justify-center items-center h-12 ml-2 ">
        <img className="rounded-full w-10 h-10 object-cover" src={SampleIC} alt="" />
      </div>
      <div className="w-full flex flex-col gap-2 ml-2   mb-2">
        <div>
          {name} {dateTime}
        </div>
        <div>
          <div className="rounded-2xl mr-[100px]  max-w-[500px] text-sm">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;

import { SampleIC } from "../../assets/images";

const Message = () => {
  return (
    <div className="flex w-full py-2">
      <div className="flex justify-center items-center w-12 h-12 ml-2">
        <img
          className="rounded-full w-10 h-10 object-cover"
          src={SampleIC}
          alt=""
        />
      </div>
      <div className="w-full ml-2">
        <p className="">
          Message Message Message Message Message Message Message Message
          Message Message Message Message Message Message Message Message
          Message Message Message Message Message Message Message Message
          Message Message Message Message Message Message Message Message
          Message Message Message Message Message Message Message Message
          Message Message Message Message Message Message Message Message
          Message Message Message Message Message Message Message Message
          Message Message Message Message
        </p>
      </div>
    </div>
  );
};

export default Message;

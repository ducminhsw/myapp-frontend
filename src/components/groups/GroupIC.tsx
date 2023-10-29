import { SampleIC } from "../../assets/images";

const GroupIC = () => {
  return (
    <div className="mb-3">
      <div className="flex flex-col items-center">
        <img
          className="rounded-full w-12 h-12 object-cover"
          src={SampleIC}
          alt=""
        />
      </div>
    </div>
  );
};

export default GroupIC;

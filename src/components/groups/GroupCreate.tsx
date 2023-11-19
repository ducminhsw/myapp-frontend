import { SampleIC } from "../../assets/images";
interface IGroupProp {
  url?: string;
  onClick?: () => void;
}
const GroupCreate = (props: IGroupProp) => {
  return (
    <div className="mb-3 " onClick={props.onClick}>
      <div className="flex flex-col items-center">
        <i className="fa-solid bg-[#33353a] fa-plus rounded-full w-12 h-12 overflow-hidden hover:opacity-50 cursor-pointer  text-center flex items-center justify-center"></i>
      </div>
    </div>
  );
};

export default GroupCreate;

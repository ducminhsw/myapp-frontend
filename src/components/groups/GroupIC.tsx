import { SampleIC } from "../../assets/images";
interface IGroupProp {
  url?: string;
  onClick: () => void;
}
const GroupIC = (props: IGroupProp) => {
  return (
    <div className="mb-3" onClick={props.onClick}>
      <div className="flex flex-col items-center">
        <img className="rounded-full w-12 h-12 object-cover" src={SampleIC} alt="" />
      </div>
    </div>
  );
};

export default GroupIC;

import { SampleIC } from "../../assets/images";
import { useParams } from "react-router-dom";
interface IGroupProp {
  url?: string;
  groupicId?: string;
  onClick: () => void;
}
const GroupIC = (props: IGroupProp) => {
  const { idGroup } = useParams();
  const isActiveGroup = idGroup === props.groupicId;
  return (
    <div className="mb-3 " onClick={props.onClick}>
      <div className="flex flex-col items-center">
        <img
          className={`rounded-full w-12 h-12 object-cover hover:opacity-50 cursor-pointer ${
            isActiveGroup ? `border-cyan-400 opacity-70` : ""
          } border-[3px]`}
          src={SampleIC}
          alt=""
        />
      </div>
    </div>
  );
};

export default GroupIC;

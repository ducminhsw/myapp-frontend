import { SampleIC } from "../../assets/images";
import { useParams } from "react-router-dom";
interface IServerProp {
  url?: string;
  servericId?: string;
  onClick: () => void;
}
const ServerIC = (props: IServerProp) => {
  const { idServer } = useParams();
  const isActiveServer = idServer === props.servericId;
  return (
    <div className="mb-3 " onClick={props.onClick}>
      <div className="flex flex-col items-center">
        <img
          className={`rounded-full w-12 h-12 object-cover hover:opacity-50 cursor-pointer ${
            isActiveServer ? `border-cyan-400 opacity-70` : ""
          } border-[3px]`}
          src={SampleIC}
          alt=""
        />
      </div>
    </div>
  );
};

export default ServerIC;

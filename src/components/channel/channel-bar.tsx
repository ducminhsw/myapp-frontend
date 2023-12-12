import { SampleIC } from "../../assets/images";
import { useParams } from "react-router-dom";
interface ChannelBarProps {
  onClick: () => void;
  channelBarId: string;
  name: string;
}

const ChannelBar = ({ onClick, channelBarId, name }: ChannelBarProps) => {
  const { idChannel } = useParams();

  const isActiveChannelBar = channelBarId == idChannel;
  return (
    <div className="hover:cursor-pointer rounded" onClick={onClick}>
      <div
        className={`flex items-center ${
          isActiveChannelBar ? "bg-[#44474d]" : ""
        } hover:bg-[#44474d] rounded-md box-border m-2`}
      >
        <div className="p-2">
          <img
            className="rounded-full w-5 h-5 object-cover"
            src={SampleIC}
            alt=""
          />
        </div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ChannelBar;

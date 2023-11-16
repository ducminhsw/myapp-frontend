import { SampleIC } from "../../assets/images";
interface ChannelBarProps {
  onClick: () => void;
}

const ChannelBar = ({ onClick }: ChannelBarProps) => {
  return (
    <div className="hover:cursor-pointer rounded" onClick={onClick}>
      <div className="flex items-center hover:bg-[#35373c] box-border m-2">
        <div className="p-2">
          <img className="rounded-full w-5 h-5 object-cover" src={SampleIC} alt="" />
        </div>
        <h3>RFC BKLabs</h3>
      </div>
    </div>
  );
};

export default ChannelBar;

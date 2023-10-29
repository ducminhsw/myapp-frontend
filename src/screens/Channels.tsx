import { Outlet } from "react-router-dom";
import ChannelBar from "../components/channels/ChannelBar";
import { SampleIC } from "../assets/images";

const Channels = () => {
  return (
    <div className="flex h-full w-full bg-[#313338]">
      <div className="h-full w-1/6 bg-[#2b2d31]">
        <div className="box-border p-2">
          <div className="flex items-center w-full h-16 bg-[#2b2d31] shadow-md hover:cursor-pointer">
            <div className="p-2">
              <img
                className="rounded-full w-5 h-5 object-cover"
                src={SampleIC}
                alt=""
              />
            </div>
            <h3>RFC BKLabs</h3>
          </div>
        </div>
        <ChannelBar />
        <ChannelBar />
        <ChannelBar />
        <ChannelBar />
        <ChannelBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Channels;

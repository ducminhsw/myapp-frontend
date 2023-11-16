import { Outlet } from "react-router-dom";
import ChannelBar from "../components/channels/ChannelBar";
import { SampleIC } from "../assets/images";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
let arrChanels = [
  { channelsId: "0" },
  { channelsId: "1" },
  { channelsId: "2" },
  { channelsId: "3" },
  { channelsId: "4" },
];
const Channels = () => {
  const navigate = useNavigate();
  const { idGroup } = useParams();

  const handleClick = (channelsId: string) => {
    // Tạo URL mới với giá trị channelsId mới và giữ nguyên "me"
    const newUrl = `/channels/${idGroup}/${channelsId}`;
    navigate(newUrl, { replace: true });
  };

  return (
    <div className="flex h-full w-full bg-[#313338]">
      <div className="h-full w-1/6 bg-[#2b2d31]">
        <div className="box-border p-2">
          <div className="flex items-center w-full h-16 bg-[#2b2d31] shadow-md hover:cursor-pointer">
            <div className="p-2">
              <img className="rounded-full w-5 h-5 object-cover" src={SampleIC} alt="" />
            </div>
            <h3>RFC BKLabs</h3>
          </div>
        </div>
        {arrChanels.map((item, index) => {
          return (
            <>
              <ChannelBar key={index} onClick={() => handleClick(item.channelsId)} />
            </>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default Channels;

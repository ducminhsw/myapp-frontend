import { Outlet } from "react-router-dom";
import ChannelBar from "../components/channels/ChannelBar";
import { SampleIC } from "../assets/images";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import InfoModal from "./InfoModal";
let arrChanels = [
  { channelsId: "0", name: "Kênh trò chuyện" },
  { channelsId: "1", name: "Kênh chat chung" },
  { channelsId: "2", name: "Kênh học tập" },
  { channelsId: "3", name: "English group" },
  { channelsId: "4", name: "Video call" },
];

const Channels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { idServer } = useParams();
  const [isMute, setIsMute] = useState(false);
  const [isMuteHP, setIsMuteHP] = useState(false);

  const handleClick = (channelsId: string) => {
    const newUrl = `/channels/${idServer}/${channelsId}`;
    navigate(newUrl, { replace: true });
  };
  const handleChangeMute = () => {
    setIsMute((prev) => !prev);
  };
  const handleChangeMuteHeadPhone = () => {
    if (isMuteHP == true) {
      setIsMuteHP(false);
      setIsMute(false);
    } else {
      setIsMuteHP(true);
      setIsMute(true);
    }
  };

  const showModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex h-full w-full bg-[#313338] ">
        <div className="h-full w-[20%] bg-[#2b2d31] relative">
          <div className="box-border p-2">
            <div className="flex items-center w-full h-16 bg-[#2b2d31] shadow-md hover:cursor-pointer">
              <div className="p-2">
                <img className="rounded-full w-5 h-5 object-cover" src={SampleIC} alt="" />
              </div>
              <h3>RFC BKLdabs</h3>
            </div>
          </div>
          {arrChanels.map((item, index) => {
            return (
              <>
                <ChannelBar
                  {...item}
                  channelBarId={item.channelsId}
                  key={index}
                  onClick={() => handleClick(item.channelsId)}
                />
              </>
            );
          })}
          <div className="flex w-full flex-row justify-evenly  bg-[#27282c] absolute bottom-0 py-2 ">
            <div
              className=" flex flex-row gap-2 items-center hover:opacity-60  hover:cursor-pointer select-none"
              onClick={showModal}
            >
              <div className="bg-slate-400 rounded-full">
                <img className="rounded-full w-5 h-5 object-cover" src={SampleIC} alt="" />
              </div>
              <div className="max-w-[70px]">
                <div className="overflow-hidden text-ellipsis font-thin text-xs">ducming22222</div>
                <div className="overflow-hidden text-ellipsis font-thin text-xs">ducminh22222</div>
              </div>
            </div>
            {isModalOpen ? (
              <InfoModal className="absolute bottom-[50px] modal-content right-[-50px] w-[300px] rounded-xl border-gray-100" />
            ) : null}
            <div className="  flex flex-row gap-4 justify-center items-center">
              <div className="" onClick={handleChangeMute}>
                {isMute ? (
                  <i className="fa-solid fa-microphone hover:opacity-50 cursor-pointer w-[16px] h-[16px]"></i>
                ) : (
                  <i className="fa-solid fa-microphone-slash hover:opacity-50 cursor-pointer w-[16px] h-[16px] text-red-400"></i>
                )}
              </div>
              <div className="" onClick={handleChangeMuteHeadPhone}>
                {isMuteHP ? (
                  <i className="fa-solid fa-phone hover:opacity-50 cursor-pointer w-[16px] h-[16px]"></i>
                ) : (
                  <i className="fa-solid fa-phone-slash w-[16px] h-[16px] text-red-400"></i>
                )}
              </div>
              <div className="">
                <i className="fa-solid fa-gear hover:opacity-50 cursor-pointer w-[16px] h-[16px]"></i>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Channels;

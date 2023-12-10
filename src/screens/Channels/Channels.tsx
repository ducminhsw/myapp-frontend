import { Outlet, useNavigate, useParams } from "react-router-dom";
import ChannelBar from "../../components/channels/ChannelBar";
import { SampleIC } from "../../assets/images";
import { useState } from "react";
import InfoModal from "../InfoModal/InfoModal";
import { useSelector } from "react-redux";
import { UserCredentials } from "../InfoModal/InfoModal.type";

const arrChanels = [
  { channelsId: "0", name: "Kênh trò chuyện" },
  { channelsId: "1", name: "Kênh chat chung" },
  { channelsId: "2", name: "Kênh học tập" },
  { channelsId: "3", name: "English group" },
  { channelsId: "4", name: "Video call" },
];

const Channels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isMute, setIsMute] = useState(false);
  const [isMuteHP, setIsMuteHP] = useState(false);
  const userCredentials = useSelector((state: { user: UserCredentials }) => state.user);
  const { idServer } = useParams();

  const handleClick = (channelsId: string) => {
    const newUrl = `/channels/${idServer}/${channelsId}`;
    navigate(newUrl, { replace: true });
    console.log(channelsId);
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

  // const handleClose = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="flex h-full w-full bg-[#313338] ">
      <div className=" w-[20%] bg-[#2b2d31] relative">
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
            <div key={index}>
              <ChannelBar
                {...item}
                channelBarId={item.channelsId}
                onClick={() => handleClick(item.channelsId)}
              />
            </div>
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
              <div className="overflow-hidden text-ellipsis font-thin text-xs">
                {userCredentials.username}
              </div>
              <div className="overflow-hidden text-ellipsis font-thin text-xs">
                {userCredentials.email}
              </div>
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
  );
};

export default Channels;

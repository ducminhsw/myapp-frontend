import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import ServerIC from "./components/servers/ServerIC";
import PageLR from "./components/PageLR/PageLR";
import ServerCreate from "./components/servers/ServerCreate";
import { Modal } from "antd";
import ListMemBerIcon from "./components/chats/icons/ListMemBerIcon";
import { useDispatch } from "react-redux";
import { handleLogout } from "./redux/features/login/loginSlice";

const arrServerIc = [
  {
    servericId: "0",
    channelsId: "0",
  },
  {
    servericId: "1",
    channelsId: "0",
  },
  {
    servericId: "2",
    channelsId: "0",
  },
  {
    servericId: "3",
    channelsId: "0",
  },
  {
    servericId: "4",
    channelsId: "0",
  },
];

const Me = {
  servericId: "me",
  channelsId: "0",
};

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userCredentials = localStorage.getItem("userCredentials");

  const handleNavigate = (servericId: string, channelsId: string) => {
    const newUrl = `/channels/${servericId}/${channelsId}`;
    navigate(newUrl, { replace: true });
  };

  const handleFriendsClick = () => {
    navigate("/channels/friends");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="flex justify-between items-center p-5 border-b-2 border-b-black">
        <h4>Logo</h4>
        <div className="flex items-center gap-5">
          <div className="cursor-pointer hover:opacity-50" onClick={handleFriendsClick}>
            <ListMemBerIcon />
          </div>
          <i
            className="fa-solid fa-right-from-bracket cursor-pointer hover:opacity-50"
            onClick={() => {
              dispatch(handleLogout());
              navigate("/auth");
            }}
          ></i>
        </div>
      </div>
      <div className="flex h-full w-full items-centers">
        <div className="flex flex-col h-full w-20 bg-[#1e1f22] items-centers pt-[20px]">
          <ServerIC {...Me} onClick={() => handleNavigate(Me.servericId, Me.channelsId)} />
          {arrServerIc.map((item, index) => {
            return (
              <ServerIC
                key={index}
                {...item}
                onClick={() => handleNavigate(item.servericId, item.channelsId)}
              />
            );
          })}
          <ServerCreate
            onClick={showModal}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
        <Outlet />
        <Modal title="Create New Group" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
}

export default App;

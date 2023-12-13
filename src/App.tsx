import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import ServerIC from "./components/server/server-ic";
import ServerCreate from "./components/server/create-server";
import ListMemBerIcon from "./assets/icons/list-member";
import { useDispatch } from "react-redux";
import { handleLogout } from "./redux/features/auth/slice";
import { setUser } from "./redux/features/user/slice";

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
  useEffect(() => {
    dispatch(setUser());
  }, [dispatch, setUser]);

  return (
    <div className="h-[100vh]">
      <div className="flex justify-between items-center p-5 border-b-2 border-b-black">
        <h4>Logo</h4>
        <div className="flex items-center gap-5">
          <div
            className="cursor-pointer hover:opacity-50"
            onClick={handleFriendsClick}
          >
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
      <div className="flex h-[calc(100vh-66px)] w-full items-centers">
        <div className="flex flex-col  w-20 bg-[#1e1f22] items-centers pt-[20px]">
          <ServerIC
            {...Me}
            onClick={() => handleNavigate(Me.servericId, Me.channelsId)}
          />
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
      </div>
    </div>
  );
}

export default App;

import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ServerIC from "./components/servers/ServerIC";
import PageLR from "./components/PageLR/PageLR";
import ServerCreate from "./components/servers/ServerCreate";
import { RootState } from "./redux/store";
import { setUser } from "./redux/features/user/userSlice";
let arrServerIc = [
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
let Me = {
  servericId: "me",
  channelsId: "0",
};
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const navigate = useNavigate();
  const handleNavigate = (servericId: string, channelsId: string) => {
    console.log(servericId);

    const newUrl = `/channels/${servericId}/${channelsId}`;
    navigate(newUrl, { replace: true });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    console.log("render");
    dispatch(setUser());
    if (isLogin) {
      navigate("/channels/me/0");
    }
    console.log("isLogin", isLogin);
  }, [dispatch, setUser, isLogin]);

  return (
    <>
      {isLogin == true ? (
        <>
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
          </div>
        </>
      ) : (
        <PageLR />
      )}
    </>
  );
}

export default App;

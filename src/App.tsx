import { Outlet, RouterProvider, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import GroupIC from "./components/groups/GroupIC";
import PageLR from "./components/PageLR/PageLR";
import GroupCreate from "./components/groups/GroupCreate";
import { RootState } from "./redux/store";
import { Modal } from "antd";
import { setUser } from "./redux/features/user/userSlice";
import { AnyAction, Dispatch } from "redux";

let arrGroupIc = [
  {
    groupicId: "0",
    channelsId: "0",
  },
  {
    groupicId: "1",
    channelsId: "0",
  },
  {
    groupicId: "2",
    channelsId: "0",
  },
  {
    groupicId: "3",
    channelsId: "0",
  },
  {
    groupicId: "4",
    channelsId: "0",
  },
];
let Me = {
  groupicId: "me",
  channelsId: "0",
};
function App() {
  const dispatch = useDispatch();

  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const navigate = useNavigate();
  const handleNavigate = (groupicId: string, channelsId: string) => {
    console.log(groupicId);

    const newUrl = `/channels/${groupicId}/${channelsId}`;
    navigate(newUrl, { replace: true });
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
              <GroupIC {...Me} onClick={() => handleNavigate(Me.groupicId, Me.channelsId)} />
              {arrGroupIc.map((item, index) => {
                return (
                  <GroupIC
                    key={index}
                    {...item}
                    onClick={() => handleNavigate(item.groupicId, item.channelsId)}
                  />
                );
              })}
              <GroupCreate onClick={showModal} />
            </div>
            <Outlet />
            <Modal
              title="Create New Group"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        </>
      ) : (
        <PageLR />
      )}
    </>
  );
}

export default App;

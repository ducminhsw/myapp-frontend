import { Outlet, RouterProvider, useNavigate } from "react-router-dom";

import "./App.css";
import { router } from "./Router";
import GroupIC from "./components/groups/GroupIC";
import { useState } from "react";
import PageLR from "./components/PageLR/PageLR";
import GroupCreate from "./components/groups/GroupCreate";

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
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (groupicId: string, channelsId: string) => {
    console.log(groupicId);

    const newUrl = `/channels/${groupicId}/${channelsId}`;
    navigate(newUrl, { replace: true });
  };

  return (
    <>
      {isLogin ? (
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
              <GroupCreate />
            </div>
            <Outlet />
          </div>
        </>
      ) : (
        <PageLR isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";

import "./App.css";
import { router } from "./Router";
import GroupIC from "./components/groups/GroupIC";
import { useState } from "react";
import PageLR from "./components/PageLR/PageLR";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <>
          <div className="flex h-full w-full items-centers">
            <div className="flex flex-col h-full w-20 bg-[#1e1f22] items-centers mt-[20px]">
              <GroupIC />
              <GroupIC />
              <GroupIC />
              <GroupIC />
            </div>
            <RouterProvider router={router} />
          </div>
        </>
      ) : (
        <PageLR />
      )}
    </>
  );
}

export default App;

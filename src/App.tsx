import { RouterProvider } from "react-router-dom";

import "./App.css";
import { router } from "./Router";
import GroupIC from "./components/groups/GroupIC";

function App() {
  return (
    <div className="flex h-full w-full items-centers">
      <div className="flex flex-col h-full w-20 bg-[#1e1f22] items-centers">
        <GroupIC />
        <GroupIC />
        <GroupIC />
        <GroupIC />
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

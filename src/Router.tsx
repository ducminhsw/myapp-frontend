import { createBrowserRouter } from "react-router-dom";
import Channels from "./screens/Channels";
import ChatComp from "./components/chats/ChatComp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Channels />,
    children: [
      {
        path: "me",
        element: <ChatComp />,
      },
    ],
  },
  {
    path: "/auth",
    element: <div>Authentication</div>,
  },
  {
    path: "/channels",
    element: <div>Channels</div>,
  },
  {
    path: "/friend",
    element: <div>Home</div>,
  },
]);

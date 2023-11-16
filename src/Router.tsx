import { createBrowserRouter } from "react-router-dom";
import Channels from "./screens/Channels";
import ChatComp from "./components/chats/ChatComp";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/channels",
        element: <Channels />,
        children: [
          {
            path: "/channels/:idGroup/:idChannel",
            element: <ChatComp />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <div>Authentication</div>,
  },

  {
    path: "/friend",
    element: <div>Home</div>,
  },
]);

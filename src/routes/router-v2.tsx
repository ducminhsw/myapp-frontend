import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatScreen from "../components/chat/channel-chat-view";
import DiscordVideoCallList from "../components/chat/channel-video-view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // channels
    children: [
      {
        path: "channels",
        element: <ChatScreen />,
      },
      {
        path: "videos",
        element: <DiscordVideoCallList />,
      },
    ],
  },
]);

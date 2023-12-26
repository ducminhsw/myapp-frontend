import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TabSignInAuthentication from "../components/auth/signin/sign-in";
import TabSignUpAuthentication from "../components/auth/signup/sign-up";
import ScreenChannelChat from "../components/chat/channel-chat-view";
import DiscordVideoCallList from "../components/chat/channel-video-view";
import ChannelBar from "../components/channel/channel-bar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // channels
    children: [
      {
        path: "channels",
        element: <ScreenChannelChat />,
        // element: <ChatScreen />,
      },
      {
        path: "videos",
        element: <ChannelBar />,
        children: [
          {
            path: "videos",
            element: <DiscordVideoCallList />,
          },
        ],
      },
      {
        path: "login",
        element: <TabSignInAuthentication />,
      },
      {
        path: "register",
        element: <TabSignUpAuthentication />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TabSignInAuthentication from "../components/auth/signin/sign-in";
import TabSignUpAuthentication from "../components/auth/signup/sign-up";
import ScreenChannelChat from "../components/chat/channel-chat/channel-chat-view";
import DiscordVideoCallList from "../components/chat/channel-video/channel-video-view";
import DiscordChannelPart from "../components/channel-v2/channel-column";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <TabSignInAuthentication />,
      },
      {
        path: "register",
        element: <TabSignUpAuthentication />,
      },
      {
        path: "channels",
        element: <DiscordChannelPart />,
        children: [
          {
            path: "chat",
            element: <ScreenChannelChat />,
          },
          {
            path: "call",
            element: <DiscordVideoCallList />,
          },
        ],
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TabSignInAuthentication from "../components/auth/signin/sign-in";
import TabSignUpAuthentication from "../components/auth/signup/sign-up";
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
        path: "@me",
        element: <></>,
      },
      {
        path: "channels",
        element: <DiscordChannelPart />,
      },
    ],
  },
]);

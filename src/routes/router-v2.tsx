import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Channels from "../screens/channel/channel";
import ChatComp from "../components/chat/channel-chat-view";
import TabSignInAuthentication from "../components/auth/signin/sign-in";
import TabSignUpAuthentication from "../components/auth/signup/sign-up";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // channels
    children: [
      {
        path: "channels",
        element: (
          <ChatComp />
        )
        // children: [
        //   {
        //     path: "@me",
        //     element: (
        //       <>
        //         <div>@me</div>
        //         <Outlet />
        //       </>
        //     ),
        //     children: [
        //       {
        //         path: ":userId",
        //         element: <>End Route</>,
        //       },
        //     ],
        //   },
        //   {
        //     path: ":serverId",
        //     element: (
        //       <>
        //         <div>OKE</div>
        //         <Outlet />
        //       </>
        //     ),
        //     children: [
        //       {
        //         path: ":channelId",
        //         element: (
        //           <>
        //             <div>Last Channel</div>
        //             <Outlet />
        //           </>
        //         ),
        //       },
        //     ],
        //   },
        // ],
      },
      {
        path: "login",
        element: (
          <TabSignInAuthentication />
        )
      },
      {
        path: "register",
        element: (
          <TabSignUpAuthentication />
        )
      }
    ],
  },
]);

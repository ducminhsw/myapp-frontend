import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Channels from "../screens/channel/channel";
import ChatComp from "../components/chat/channel-chat-view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // channels
    children: [
      {
        path: "channels",
        element: (
          <>
            <ChatComp />
            {/* <div>Channel</div> */}
            {/* <Outlet /> */}
          </>
        ),
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
    ],
  },
]);

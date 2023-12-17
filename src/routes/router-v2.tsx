import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // channels
    children: [
      {
        path: "channels",
        element: (
          <>
            <div>Channel</div>
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

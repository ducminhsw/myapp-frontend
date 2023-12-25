import { createBrowserRouter } from "react-router-dom";
import Channels from "../screens/channel/channel";
import ChatComp from "../components/chat/channel-chat-view";
import App from "../App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./protected-route";
import Friends from "../screens/friends/all-friend";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    ),
    children: [
      {
        path: "/channels",
        element: (
          <ProtectedRoute>
            <Channels />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/channels/:idServer/:idChannel",
            element: (
              // <ProtectedRoute>
              <ChatComp />
              // </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/channels/friends",
        element: (
          <ProtectedRoute>
            <Friends />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

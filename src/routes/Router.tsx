import { createBrowserRouter } from "react-router-dom";
import Channels from "../screens/Channels/Channels";
import ChatComp from "../components/chats/ChatComp";
import App from "../App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./ProtectedRoute";
import LoginLR from "../components/PageLR/PageLR";
import Friends from "../screens/Friends/Friends";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
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
            path: "/channels/:idGroup/:idChannel",
            element: (
              <ProtectedRoute>
                <ChatComp />
              </ProtectedRoute>
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

  {
    path: "/auth",
    element: <LoginLR />,
  },

  // {
  //   path: "/friend",
  //   element: <div>Home</div>,
  // },
]);

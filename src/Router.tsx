import { createBrowserRouter } from "react-router-dom";
import Channels from "./screens/Channels";
import ChatComp from "./components/chats/ChatComp";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

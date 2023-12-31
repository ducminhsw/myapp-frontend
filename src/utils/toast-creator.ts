import toast from "react-hot-toast";

export const displayErrorToast = () =>
  toast("Something went wrong!", {
    style: {
      borderRadius: "10px",
      background: "red",
      color: "#fff",
    },
    duration: 1500,
  });

export const displaySuccessToast = (message: string) =>
  toast(message, {
    style: {
      borderRadius: "10px",
      background: "#00FF00",
      color: "#000",
    },
    duration: 1000,
  });

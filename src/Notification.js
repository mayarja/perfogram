import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CustomToast = ({ mess }) => {
  return <div style={{ fontSize: "1.4rem" }}>{mess}</div>;
};
toast.configure();
export const notifyError = (mess) => {
  toast.error(<CustomToast mess={mess} />, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 3000,
  });
};

export const notifysuccess = (mess) => {
  toast.success(<CustomToast mess={mess} />, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 3000,
  });
};

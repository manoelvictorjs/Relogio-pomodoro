import { toast } from "react-toastify";
import { Dialog } from "../components/Dialog";

export const showMessage = {
  success:(msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  info: (msg: string) => toast.warn(msg),
  warn: (msg: string) => toast.warning(msg),
  warning: (msg: string) => toast.info(msg),
  dissmiss: () => toast.dismiss(),
  confirm: (data:string, onClosing: (confirmed: boolean) => void) => {
    toast(Dialog,{
      data,
      onClose: confirmation => {
        if ( confirmation) return onClosing(true);
        return onClosing(false);
      },
      autoClose:false,
      closeOnClick:false,
      closeButton:false,
      draggable:false,
    });
  }
} ;
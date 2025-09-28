import { toast } from "react-toastify";

export const showMessage = {
  success:(msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  info: (msg: string) => toast.warn(msg),
  warn: (msg: string) => toast.warning(msg),
  warning: (msg: string) => toast.info(msg),
  dissmiss: () => toast.dismiss(),
} ;
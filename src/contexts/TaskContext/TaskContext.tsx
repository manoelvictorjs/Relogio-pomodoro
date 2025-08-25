import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { createContext} from "react";

type TaskContextprops = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
const initialContextvalue = {
  state: initialTaskState,
  setState: () => {},
}

export const TaskContext = createContext<TaskContextprops> (initialContextvalue);
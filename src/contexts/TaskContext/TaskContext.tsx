import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { createContext} from "react";
import type { TaskActionModel } from "./taskActions";

type TaskContextprops = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};
const initialContextvalue = {
  state: initialTaskState,
  dispatch: () => {},
}

export const TaskContext = createContext<TaskContextprops>(initialContextvalue);
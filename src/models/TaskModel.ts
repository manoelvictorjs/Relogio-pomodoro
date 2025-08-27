import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completeDate: number | null; //  completed
  interruptedDate: number | null; // if not completed
  type: keyof TaskStateModel['config'];
  
};
import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks :[],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0, // 1, 2 ,3 , ... 8 => 1 ciclo de trabalho
  config:{
    workTime: 1,
    shortBreakTime: 1,
    longBreakTime: 1,
  },
};
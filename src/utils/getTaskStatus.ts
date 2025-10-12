import type { TaskModel } from "../models/TaskModel";

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null){

if (task.completeDate) return "completo";
if (task.interruptedDate) return "interrompido";
if (task.id === activeTask?.id) return "ativo";
return "abandonado";




}
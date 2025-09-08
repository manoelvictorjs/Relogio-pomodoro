import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import {  useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";



export function MainForm(){
  const {state, dispatch } = useTaskContext();
  const tasknameInput  = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();

 if(tasknameInput.current === null) return;

   const taskName = tasknameInput.current.value.trim();
  
   if (!taskName) {
    alert('Por favor, insira um nome para a tarefa.');
     return;
  }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

     dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

   function handleInterruptTask(){
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });

   }
 
  return( 
    

  <form onSubmit={handleCreateNewTask} className='form' action="">
    <div className='formRow'>
        <DefaultInput 
        labelText='task'
        id= 'meuInput' 
        type='text' 
        placeholder='Digite algo'
        ref={tasknameInput}
        disabled={!!state.activeTask}
        
        />
      </div>
  
    <div className='formRow'>
        
      <p>Próximo intervalo é de 25min</p>

   </div>
    {state.currentCycle > 0 && (
    <div className='formRow'>
      <Cycles/>
    </div>
    )}
   

    <div className='formRow'>
     {!state.activeTask && (
      <DefaultButton 
      aria-label="Iniciar um novo ciclo"
      title='Iniciar nova tarefa'
      type="submit" 
      icon={<PlayCircleIcon />} 
      key='botao_submit'
      />
     )} 
      {!!state.activeTask &&(
      <DefaultButton 
      aria-label='Interromper tarefa tarefa atual'
      title='Interromper tarefa tarefa atual'
      type="button" 
      color="red"
      icon={<StopCircleIcon />} 
      onClick={handleInterruptTask}
      key='botao_button'
      />
     )}; 
       
    </div>
  
  </form>  
    );
}
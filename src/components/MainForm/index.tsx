import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useEffect, useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";




export function MainForm(){
  const {state, setState} = useTaskContext();
  const tasknameInput  = useRef<HTMLInputElement>(null);

  // fica monitorando o estado do useState e toda vez que ele for atualizado, ele dispara o console.log
  useEffect(() => {
    console.log('State atualizado:', state);
  }, [state]);

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
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return{ 
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: 1 , //conferir
        secondsRemaining, //conferir
        formattedSecondsRemaining: '00:00', // conferir 
        tasks: [...prevState.tasks, newTask],
      }


    })

  
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
        
        />
      </div>
  
    <div className='formRow'>

      <p>Próximo intervalo é de 25min</p>

   </div>

    <div className='formRow'>
      <Cycles/>
    </div>

    <div className='formRow'>
     <DefaultButton icon={<PlayCircleIcon />} />  
    </div>
  </form>  
    );
};
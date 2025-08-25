import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";




export function MainForm(){
  const [taskName, settaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    console.log(taskName);
  
  }

  return(

  <form onSubmit={handleCreateNewTask} className='form' action="">
  
    <div className='formRow'>
      <h1>{taskName}</h1>
        <DefaultInput 
        labelText='task'
        id= 'meuInput' 
        type='text' 
        placeholder='Digite algo'
        value={taskName}
        onChange={(e) =>  settaskName(e.target.value)}
        
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
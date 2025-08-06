import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm(){

  return(
    <div>
  
  <form className='form' action="">
      <div className='formRow'>
        <DefaultInput 
        id= 'meuInput' 
        type='text' 
        labelText='mdadml'
        placeholder='Digite algo'
        />
      </div>
  </form>

    <div className='formRow'> 
      <Cycles/>
    </div>
    <div className='formRow'>
     <DefaultButton icon={<PlayCircleIcon />} />  
    </div>
    </div>
    );
};
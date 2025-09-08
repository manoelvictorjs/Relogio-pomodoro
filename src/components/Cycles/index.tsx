import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css'

export function Cycles(){
    const {state} =  useTaskContext();

    const cycleStep = Array.from({length:state.currentCycle});


    const cycleDescriptionMap = {
        workTime: 'Foco',
        shortBreakTime: 'Pausa Curta',
        longBreakTime: 'Pausa Longa'
    }
    const plural = state.currentCycle > 1 ? 's' : '';

    return(
        <div className={styles.cycles}>
            <span>{`Ciclo${plural}:`}</span>

            <div className={styles.cycleDots}>
                {cycleStep.map((_, index)=>{
                    const nextCycle = getNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle)
                    return (
                         <span 
                         key={`${nextCycleType}_${nextCycle}`}
                         className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                         aria-label={`Indicador de Ciclos de ${cycleDescriptionMap[nextCycleType]}`}
                         title = {`Indicador de Ciclos de ${cycleDescriptionMap[nextCycleType]}`}
                         ></span>
                          );
                })}         
            </div>
        </div>
    )
}
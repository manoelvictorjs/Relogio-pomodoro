import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import sytles from './styles.module.css'
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import { useEffect, useState } from "react";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";


export function History() {
  const {state, dispatch} = useTaskContext()
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTaskOptions ] = useState<SortTasksOptions>(
    () =>{ 
    

  return{
    tasks: sortTasks ({tasks: state.tasks}),
    field: 'startDate',
    direction: 'desc',
  };
 },
);

useEffect(() => {
  setSortTaskOptions((prevState) => ({
    ...prevState,
    tasks: sortTasks({
      tasks: state.tasks,
      field: prevState.field, 
      direction: prevState.direction
    }),
  }));
},[state.tasks]);

  useEffect(() =>{
    document.title = 'Histórico- Chrono Pomodoro';
  }, [])

 
useEffect(() => {  
  if(!confirmClearHistory) return;

  console.log('Limpando historico de tarefas...');
  setConfirmClearHistory(false);

  dispatch({ type: TaskActionTypes.RESET_STATE})
 }, [confirmClearHistory, dispatch]);

 
 useEffect(() => {
   return() => {
    showMessage.dissmiss()  ;
   };
}, []);



function handleSortTasks({field}: Pick<SortTasksOptions, 'field'>) {
  const newDirection = sortTasksOptions.direction === 'asc' ? 'desc' : 'asc';
  
  setSortTaskOptions({
    tasks: sortTasks({
      direction: newDirection,
      tasks: sortTasksOptions.tasks,
      field,
  }),
    field,
    direction: newDirection,
  });
}

function handleResetHistory() {
showMessage.dissmiss()  ;
showMessage.confirm('Tem certeza que deseja apagar todo o historico?', confirmation => {
 setConfirmClearHistory(confirmation );




});
}



return (
  
   <MainTemplate>
          <Container>
            <Heading>
              <span>History </span>
              {hasTasks &&(
              <span className={sytles.buttonContainer}>  
                 <DefaultButton 
                icon={<TrashIcon/>} 
                color='red'
                aria-label='Apagar todo o historico'
                title=  'Apagar todo o historico'   
                onClick={handleResetHistory}
                />
              </span>
            )}
            </Heading>
          </Container>
          
          <Container>
            {hasTasks && (
              <div className={sytles.responsiveTable}>
                <table>
                  <thead> 
                    <tr>
                      <th onClick={() => handleSortTasks({field: 'name'})} 
                      className={sytles.thSort} 
                      >
                        Tarefa  ⭥
                        </th>
                      <th onClick={() => handleSortTasks({field: 'duration'})} 
                        className={sytles.thSort} 
                        >
                        Duração ⭥
                        </th>
                      <th onClick={() => handleSortTasks({field: 'startDate'})} 
                        className={sytles.thSort} 
                        >
                        Data  ⭥
                        </th>
                      <th>Status</th>
                      <th>Tipo</th>
                    </tr>
                  </thead>

                  <tbody>
                    {sortTasksOptions.tasks.map (task => {
                      const taskTypeDictionary = {
                        workTime: 'Foco',
                        shortBreakTime: 'Descanso curto',
                        longBreakTime: 'Descanso longo',
                      };
                      
                    return(
                    <tr key={task.id}>
                      <td >{task.name}</td>
                      <td>{task.duration}</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                    );
                  })}
                </tbody>
                </table>
              </div>
              )}

              {!hasTasks && <p style={{textAlign: 'center' , fontWeight:"bold"}}> Ainda nâo existem tarefas criadas.</p>}
          </Container>
   </MainTemplate>
  );
}
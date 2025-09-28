import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Logo(){
  return( 
  <div className={styles.container}> 
    <RouterLink className={styles.containerLink}  href='/'> 
      <TimerIcon/>
      <span> Chronos</span>  
    </RouterLink>
  </div>
  );

}
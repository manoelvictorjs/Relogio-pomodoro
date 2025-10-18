import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

export function Footer(){
return <footer className={styles.footer}>
  <RouterLink href="/AboutPomodoro">Entenda como funciona a técnica pomodoro</RouterLink>
  <RouterLink href="/">Chronos Pomodoro &copy; {new Date().getFullYear()} Manoel Victor
  </RouterLink>
</footer>

}
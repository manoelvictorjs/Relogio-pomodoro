import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon,  } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'light' | 'dark';

export function Menu(){

  
  const [theme, setTheme] = useState<AvailableThemes>(() =>{
    const storedTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storedTheme ;
  });
  
  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,) {
   event.preventDefault();

   setTheme( prevTheme => {
    const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
    return nextTheme;
  });
}

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />

  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); 
  }, [theme]);
  
  return( 
    
  <nav className={styles.container}> 
    
    <RouterLink className={styles.containerLink}  
    href='/' aria-label='Ir para a Home'
    title='Ir para a Home'>
       <HouseIcon/> 
    </RouterLink>
    <RouterLink className={styles.containerLink}  
    href='#' aria-label='Ir para a Historico'
    title='Ir para a Historico'> 
        <HistoryIcon/> 
    </RouterLink>
    <RouterLink className={styles.containerLink}
    href='#' aria-label='Ir para as configurações'
    title='Ir para as configurações'> 
        <SettingsIcon/> 
    </RouterLink>
   
    <a className={styles.containerLink}
    href='#' aria-label='Mudar Tema'
    title='Mudar Tema'
    onClick={handleThemeChange }> 
    
       {nextThemeIcon[theme]}
    </a>
  
  </nav>
  );

}
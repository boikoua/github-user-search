import { useEffect, useState } from 'react';
import { ReactComponent as MoonIcon } from './../../assets/icon-moon.svg';
import { ReactComponent as SunIcon } from './../../assets/icon-sun.svg';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  // Стейт для переключения темы
  const [isDark, setIsDark] = useState(false);
  // Текст иконки по условию
  const themeText = isDark ? 'Light' : 'Dark';
  // Иконка по условию
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  // Изменения темы в зависимости изменения isDark
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;

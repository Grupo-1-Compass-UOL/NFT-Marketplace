import React from 'react';
import ArrowRight from '../../img/ArrowRight';
import styles from './button.module.css'; // Importe o arquivo de estilos CSS

const Button = ({
  hasIcon = true,
  hasText = true,
  text = "Button",
  className,
  icon = <ArrowRight className={styles["arrow-Right"]} color="white" />,
  backgroundColor = "",
  border = "",
  href,
  width ="",
  height = "",
  padding = "",

}) => {
  return (
    <button 
    className={`${styles.button} ${className}`}
    style={{ backgroundColor, border, width, padding,height}}  
    href={href} 
    rel="noopener noreferrer" 
    target="_blank">
      {hasIcon && <>{icon}</>}
      {hasText && <div className={styles["text-wrapper"]}>{text}</div>}
    </button>
  );
};

export default Button;

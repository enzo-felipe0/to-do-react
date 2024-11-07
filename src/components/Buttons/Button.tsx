import style from './Button.module.scss'

interface ButtonProps {
    texto: string;  
  }

export function Button({texto}: ButtonProps) { 
    return (
        <>
            <button className={style.button}>
                {texto}
            </button>
        </>
    );
}
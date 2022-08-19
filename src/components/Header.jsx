import styles from './Header.module.css'
import logoHeader from '../../imagens/vite.svg';

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logoHeader} alt="Logotipo da minha aplicacao" />
        </header>
    );
}
//componentes sempre com Letra maíuscula para não misturar com tags do html
//nao usa 'class' dentro dos elementos, utiliza className
//{} quando eu quero colocar uma variavel Javascript dentro do HTML
//1rem é 16px no padrão html
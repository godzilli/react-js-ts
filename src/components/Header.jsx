import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <strong>Feed</strong>
        </header>
    );
}
//componentes sempre com Letra maíuscula para não misturar com tags do html
//nao usa 'class' dentro dos elementos, utiliza className
//{} quando eu quero colocar uma variavel Javascript dentro do HTML
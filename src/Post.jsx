export function Post(props){
    console.log(props);
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}
//Propriedades são informações passadas pra componentes
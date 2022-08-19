import { Header } from "./components/Header";
import { Post } from "./Post";
import './styles.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Jennifer"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum corrupti culpa enim voluptates tenetur, a ratione aliquid. Quisquam et a voluptates nisi beatae vero consequuntur praesentium provident repellat quis!"/>
      <Post 
        author="Gabriel" 
        content="Post legal de teste de componentes!" />
      <Post />
    </div>
  );
}
//Em Post o author e content são parametros
//componente é: função que retorna html e deve ter extensão JSX -> java + html
//escopo do css -> especifico de um componente e nao afetar outras partes do codigo
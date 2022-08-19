import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Jennifer"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum corrupti culpa enim voluptates tenetur, a ratione aliquid. Quisquam et a voluptates nisi beatae vero consequuntur praesentium provident repellat quis!"/>
      <Post author="Gabriel" content="Post legal de teste de componentes!" />
      <Post />
    </div>
  );
}
//Em Post o author e content são parametros
//componente é: função que retorna html é componente e deve ter extensão jsx -> java + html

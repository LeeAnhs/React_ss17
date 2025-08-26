import Ex1 from "./component/Ex1";
import Ex2 from "./component/Ex2";
import Ex3 from "./component/Ex3";
import Ex4 from "./component/Ex4";
import Ex5 from "./component/Ex5";
import Ex6 from "./component/Ex6";
import Ex7 from "./component/Ex7";
import Ex8 from "./component/Ex8";
import Ex9 from "./component/Ex9";
import Model from "./component/Model";
import TodoList from "./component/TodoList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>All Components Demo</h1>
      <Ex1 />
      <Ex2 />
      <Ex3 />
      <Ex4 />
      <Ex5 />
      <Ex6 />
      <Ex7 />
      <Ex8 />
      <Ex9 />
    </div>
  )
}

export default App

import "./styles.css";
import Example1 from "./Example1";

export default function App() {
  const example1 = ["Aijan", "Dosbol", "Joldosh"];
  return (
    <div className="App">
      <Example1 items={example1} />
    </div>
  );
}

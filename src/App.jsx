import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

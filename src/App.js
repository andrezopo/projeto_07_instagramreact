import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Stories from "./Stories";
import Posts from "./Posts";

export default function App() {
  return (
    <div>
      <Navbar />
      <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Posts />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(App(), document.querySelector(".root"));

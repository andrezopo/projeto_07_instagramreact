import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import BottomMobile from "./BottomMobile";

export default function App() {
  return (
    <div>
      <Navbar />
      <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </div>
      <BottomMobile />
    </div>
  );
}

ReactDOM.render(App(), document.querySelector(".root"));

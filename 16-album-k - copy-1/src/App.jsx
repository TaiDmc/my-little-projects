import { Album } from "./components/Album";
import { IntroStyled } from "./components/IntroStyled";

function App() {
  return (
    <div className="app">
      <IntroStyled />
      <hr />
      <Album />
    </div>
  );
}

export default App;

import { Aboutsection } from "./components/aboutsection/aboutsection";
import { Header } from "./components/header/header";
import { HomeSection } from "./components/homesection/homesection";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection/>
      <Aboutsection/>
    </div>
  );
}

export default App;

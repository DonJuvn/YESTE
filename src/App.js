import "./App.css";
import Menu from "./components/menu";
import Video from "./components/video";
import Counters from "./components/counters";
import Portfolio from "./components/portfolio";
import Logos from "./components/logos";
import Footer from "./components/footer";

function App() {
   return (
      <>
         <Menu />
         <Video />
         <Counters />
         <Portfolio />
         <Logos />
         <Footer />
      </>
   );
}

export default App;

import "./styles/app.css";
import Navbare from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <header>
        <Navbare></Navbare>
      </header>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;

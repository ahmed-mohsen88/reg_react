import { Router, Routes } from "react-router";
import "./App.css";
import Footer from "./includes/footer";
import Header from "./includes/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Router path="" />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

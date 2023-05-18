import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import Login from "./Login/Login";
function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        {isLoggedIn ? (
          <>
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-container">
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

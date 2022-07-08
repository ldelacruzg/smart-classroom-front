import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./template/Base";
import Subject from "./pages/Subject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Base />}>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

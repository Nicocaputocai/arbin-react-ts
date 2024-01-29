import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import{ Arbin } from "./components/arbin/Arbin";
import IaForm from "./components/arbin/IaForm";
import ManualForm from "./components/arbin/manualForm";
import LightForm from "./components/LightForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" />
          <Route path="/arbolado" element={< Arbin />} />
          <Route path="/arbolado/ia" element={< IaForm />} />
          <Route path="/arbolado/manual" element={< ManualForm />} />
          <Route path="/luminaria" element={<LightForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Route, Routes, BrowserRouter } from "react-router-dom";
//Librerias para crear rutas
import Index from "./pages/Index"; //Importamos rutas
import Create from "./pages/Create";
import View from "./pages/View";
import Store from "./store/Store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} /> //Damos ruta
          <Route path="Create" element={<Create />} />
          <Route path="View/:bookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;

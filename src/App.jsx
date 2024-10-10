import "./App.scss";
import Immigration from "./pages/Immigration/Immigration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Programs from "./pages/Programs/Programs";
import Actuality from "./pages/Actuality/Actuality";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="welcome" element={<Accueil />} />
          <Route path="programs" element={<Programs />} />
          <Route path="actuality" element={<Actuality />} />
        </Route>
      </Routes>
      {/* <Immigration /> */}
      {/* <Landing /> */}
    </>
  );
}

export default App;

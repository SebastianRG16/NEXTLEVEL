import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { ViewCursos } from "./pages/ViewCursos";
import { LoginView } from "./pages/LoginView";
import { IngresarLogin } from "./login/IngresarLogin";
import { RegistrarLogin } from "./login/RegistrarLogin";
import { Toaster } from "react-hot-toast";
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/home" element={<ViewCursos />}></Route>
        <Route path="/" element={<LoginView />}>
          <Route index element={<IngresarLogin/>}></Route>
          <Route path="/register" element={<RegistrarLogin/>}></Route>
        </Route>
      </Routes>
      <Toaster />
    </HashRouter>
  )
}

export default App

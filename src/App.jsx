import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { ViewCursos } from "./pages/ViewCursos";
import { ViewStudent } from "./components/STUDENT/ViewStudent";
import { LoginView } from "./pages/LoginView";
import { CursosTeacher } from "./components/TEACHER/CursosTeacher";
import { ViewTeacher } from "./components/TEACHER/ViewTeacher";
import { ViewCurso } from "./components/VERCURSO/ViewCurso";
import { IngresarLogin } from "./login/IngresarLogin";
import { RegistrarLogin } from "./login/RegistrarLogin";
import { Toaster } from "react-hot-toast";
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/home" element={<ViewStudent />}></Route>
        <Route path="/curso" element={<ViewCurso />}></Route>
        <Route path="/teacher" element={<ViewCursos />}>
          <Route index element={<CursosTeacher />}></Route>
          <Route path='/teacher/create' element={<ViewTeacher />}></Route>
        </Route>
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

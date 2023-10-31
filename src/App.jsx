import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { ViewCursos } from "./pages/ViewCursos";
import { LoginView } from "./pages/LoginView";
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ViewCursos />}></Route>
        <Route path="/login" element={<LoginView />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App

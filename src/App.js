import './App.css';
import { Login } from './Components/Pages/Login';
import { Datatable } from './Components/Pages/Datatable/Datatable';
import { DatatableBook } from './Components/Pages/DatatableBook/DatatableBook';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={< Login />} />
          <Route exact path="/home" element={< Datatable />} />
          <Route exact path="/book" element={< DatatableBook />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

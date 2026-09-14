import StudentDetails from './pages/StudentDetails';
import Students from "./pages/Students";
import AddStudent from './pages/AddStudent';
import Home from './pages/Home';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Students/add" element={<AddStudent />} />
        <Route path="/Students/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;

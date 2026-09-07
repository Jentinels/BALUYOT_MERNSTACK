import StudentDetails from './pages/StudentDetails';
import Students from "./pages/Students";
import Home from './pages/Home';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;




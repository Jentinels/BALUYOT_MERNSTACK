import StudentCard from "./components/studentcard.jsx";

function App() {
  return (
    <div>
      <StudentCard 
      name="Jerard" 
      age={21} 
      birthday="2005-07-25" 
      studentNumber="202403834" 
      course="Information Technology"/>

      <StudentCard 
      name="yoke" 
      age={20} 
      birthday="2005-12-06" 
      studentNumber="202401081" 
      course="Information Technology"/>

      <StudentCard 
      name="geong" 
      age={20} 
      birthday="2006-06-24" 
      studentNumber="202402149" 
      course="Information Technology"/>


    </div>
  )
}

export default App;
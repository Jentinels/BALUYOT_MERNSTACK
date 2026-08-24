import StudentCard from "./components/studentcard.jsx";
import Subjects from "./components/subjects.jsx";

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

      <Subjects 
      SchedCode="SCHED101" 
      SubName="Mathematics" 
      ClassSched="Mon, Wed, Fri 8:00 AM - 11:00 AM"/>

      <Subjects 
      SchedCode="SCHED102" 
      SubName="Science" 
      ClassSched="Tue, Thu 1:00 PM - 3:00 PM"/>
      
      <Subjects 
      SchedCode="SCHED103" 
      SubName="History" 
      ClassSched="Mon, Wed 2:00 PM - 4:00 PM"/> 
    </div>
  )
}

export default App;
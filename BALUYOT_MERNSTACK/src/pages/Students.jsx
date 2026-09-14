import students from "../data/students.json";
import StudentCard from "../components/studentcard";

function Students() {
  return (
    <div className="page">
      <h1 className="page-title">Students</h1>
      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            age={student.age}
            birthday={student.birthday}
            studentNumber={student.studentNumber}
            course={student.course}
            section={student.section}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;

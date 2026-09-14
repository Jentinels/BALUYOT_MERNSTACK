import students from "../data/students.json";
import { useParams, Link } from "react-router-dom";

export default function StudentDetails() {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="page">
        <p className="not-found">Student not found.</p>
        <Link to="/Students" className="details-link">Back to students</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="details-card">
        <p><span className="field-label">Name:</span>{student.name}</p>
        <p><span className="field-label">Age:</span>{student.age}</p>
        <p><span className="field-label">Birthday:</span>{student.birthday}</p>
        <p><span className="field-label">Student Number:</span>{student.studentNumber}</p>
        <p><span className="field-label">Course:</span>{student.course}</p>
        <p><span className="field-label">Section:</span>{student.section}</p>
        <Link to="/Students" className="details-link">Back to students</Link>
      </div>
    </div>
  );
}

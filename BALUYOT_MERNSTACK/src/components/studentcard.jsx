import { Link } from "react-router-dom";

function StudentCard({ id, name, age, birthday, studentNumber, course, section }) {
  return (
    <div className="student-card">
      <p><span className="field-label">Name:</span>{name}</p>
      <p><span className="field-label">Age:</span>{age}</p>
      <p><span className="field-label">Birthday:</span>{birthday}</p>
      <p><span className="field-label">Student Number:</span>{studentNumber}</p>
      <p><span className="field-label">Course:</span>{course}</p>
      <p><span className="field-label">Section:</span>{section}</p>

      <Link to={`/Students/${id}`} className="details-link">
        View student details
      </Link>
    </div>
  );
}

export default StudentCard;

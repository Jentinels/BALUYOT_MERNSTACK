
function StudentCard({ id, name, age, birthday, studentNumber, course, section }) {
return (
  <div className="student-card">
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Birthday: {birthday}</p>
    <p>Student Number: {studentNumber}</p>
    <p>Course: {course}</p>

    <Link to={`/students/${id}`} className="text-pink-600 hover:underline">
    View student details
    </Link>
  </div>
);

}

export default StudentCard;
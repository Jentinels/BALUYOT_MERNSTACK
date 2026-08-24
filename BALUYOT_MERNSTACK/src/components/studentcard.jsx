function StudentCard({ name, age, birthday, studentNumber, course }) {
return (
  <div className="student-card">
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Birthday: {birthday}</p>
    <p>Student Number: {studentNumber}</p>
    <p>Course: {course}</p>
  </div>
);

}

export default StudentCard;
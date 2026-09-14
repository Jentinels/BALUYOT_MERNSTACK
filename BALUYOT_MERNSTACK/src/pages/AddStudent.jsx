import { useState } from "react";
import { useNavigate } from "react-router-dom";
import initialStudents from "../data/students.json";

const COURSES = ["BSIT", "BSCS", "BSBA", "BSED", "BEED", "BSA", "BSN"];
const YEAR_LEVELS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const SEXES = ["Male", "Female"];

const STORAGE_KEY = "students";

const initialForm = {
  name: "",
  age: "",
  birthday: "",
  studentNumber: "",
  course: COURSES[0],
  yearLevel: YEAR_LEVELS[0],
  sex: SEXES[0],
  section: "",
};

function getExistingStudents() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return initialStudents;

  try {
    return JSON.parse(raw);
  } catch {
    return initialStudents;
  }
}

function addStudentToExistingData(newStudentData) {
  const existingStudents = getExistingStudents();

  const nextId =
    existingStudents.length > 0
      ? Math.max(...existingStudents.map((s) => s.id)) + 1
      : 1;

  const newStudent = { id: nextId, ...newStudentData };
  const updatedStudents = [...existingStudents, newStudent];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStudents));

  return newStudent;
}

export default function AddStudent() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [addedStudent, setAddedStudent] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const newStudent = addStudentToExistingData({
      name: form.name.trim(),
      age: Number(form.age),
      birthday: form.birthday,
      studentNumber: form.studentNumber.trim(),
      course: form.course,
      yearLevel: form.yearLevel,
      sex: form.sex,
      section: form.section.trim(),
    });

    setAddedStudent(newStudent);
    setForm(initialForm);
    setSubmitting(false);
  }

  return (
    <div className="page">
      <h1 className="page-title">Add Student</h1>

      <form className="student-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span className="field-label">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-field">
          <span className="field-label">Age</span>
          <input
            type="number"
            name="age"
            min="1"
            value={form.age}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-field">
          <span className="field-label">Birthday</span>
          <input
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-field">
          <span className="field-label">Student Number</span>
          <input
            type="text"
            name="studentNumber"
            value={form.studentNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-field">
          <span className="field-label">Course</span>
          <select name="course" value={form.course} onChange={handleChange}>
            {COURSES.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field">
          <span className="field-label">Year Level</span>
          <select name="yearLevel" value={form.yearLevel} onChange={handleChange}>
            {YEAR_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field">
          <span className="field-label">Sex</span>
          <select name="sex" value={form.sex} onChange={handleChange}>
            {SEXES.map((sex) => (
              <option key={sex} value={sex}>
                {sex}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field">
          <span className="field-label">Section</span>
          <input
            type="text"
            name="section"
            value={form.section}
            onChange={handleChange}
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? "Saving…" : "Add Student"}
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate("/Students")}
          >
            Cancel
          </button>
        </div>
      </form>

      {addedStudent && (
        <>
          <div className="student-card">
            <p><span className="field-label">Name:</span>{addedStudent.name}</p>
            <p><span className="field-label">Age:</span>{addedStudent.age}</p>
            <p><span className="field-label">Birthday:</span>{addedStudent.birthday}</p>
            <p><span className="field-label">Student Number:</span>{addedStudent.studentNumber}</p>
            <p><span className="field-label">Course:</span>{addedStudent.course}</p>
            <p><span className="field-label">Year Level:</span>{addedStudent.yearLevel}</p>
            <p><span className="field-label">Sex:</span>{addedStudent.sex}</p>
            <p><span className="field-label">Section:</span>{addedStudent.section}</p>
          </div>
        </>
      )}
    </div>
  );
}

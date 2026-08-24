function Subjects({ SchedCode, SubName, ClassSched }) {
return (
    <div className="subjects">
        <h2>{SchedCode}</h2>
        <p>{SubName}</p>
        <p>{ClassSched}</p>
    </div>
)
}

export default Subjects;
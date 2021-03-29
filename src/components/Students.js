
const Students = ({ students }) => {
    return (
        <>
            {students.map((student) => (
                <div key={student.name}>
                    <h2>{student.name}</h2> 
                    <h3>{student.major}</h3>
                    <p>{student.interest}</p>
                </div>

            ))}

        </>
    )


}

export default Students


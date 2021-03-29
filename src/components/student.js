import React from 'react'

const Student = ( { student }) => {
    return (
        <div>
            <h3>{student.name}</h3>
            <h3>{student.major}</h3>
            <h3>{student.interest}</h3>
        </div>
    )
}

export default Student

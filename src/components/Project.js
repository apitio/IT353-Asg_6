import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Project = ( { project, onDelete }) => {
    return (
        <div className='task'>
            <h3>{project.project_name} <FaTimes 
            style={{color:'red', cursor: 'pointer'}} 
            onClick={() => onDelete(project.project_name)}/></h3>
            <h3>{project.due_date}</h3>

            
        </div>
    )
}

export default Project

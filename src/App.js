import { useState } from 'react'
import Header from './components/Header'
import Students from './components/Students'
import Projects from './components/Projects'


const App = () => {
  const [students, setStudents] = useState ([
    {
        "name": "Alfrin Saldanha",
        "major": "Information Technology",
        "interest": "Developing web applications using technologies such as React, Flask, Python, JavaScript, Docker, AWS"
    },

])


const [projects, setProjects] = useState ([
  {
      "project_name": "PHP Laravel API",
      "due_date": "February 20, 2021"
      },
      {
      "project_name": "Python Django Web application",
      "due_date": "March 20, 2021"
      },
      {
      "project_name": "Angular front end",
      "due_date": "June 20, 2021"
      }
])



const deleteProject = (project_name) => {
  setProjects(projects.filter((project) => project.project_name !== project_name))
  console.log(project_name);
}

  return (
    <div className='container'>
      <Header />
      <Students students={students} />
      {projects.length > 0 ? (
      <Projects projects={projects} onDelete = {deleteProject} />
      ) : (
        <p style={{color: "red"}}>All Projects Deleted!</p>
      )}
    </div>
  );
}

export default App;

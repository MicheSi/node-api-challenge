import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const ProjectList = props => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/projects')
        .then(res => {
            console.log(res)
            setProjects(res.data)
        })
        .catch(err => console.log('Cannot retrieve projects', err))
    }, [])

    return (
        <div className='projectList'>
            <h1>Node API Projects</h1>
            {projects.map(project => (
                <ProjectCard
                 key={project.id}
                 id={project.id}
                 name={project.name}
                 description={project.description}
                />
            ))}

        </div>
    )

}

export default ProjectList;
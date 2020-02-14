import React, {useState} from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';
import axios from 'axios';

const ProjectCard = (props) => {
    const [project, setProject] = useState({
        project: null
    })

    const getDetails = e => {
        e.preventDefault();
        axios
        .get(`http://localhost:5000/api/projects/${props.id}`)
        .then(res => {
            console.log(res)
            setProject(res.data)
            console.log(project)
        })
        .catch(err => console.log('cannot get project details', err))
    }
    return (
        <div className='projectCard'>
            <Card>
                <CardHeader tag="h3">Project: {props.name}</CardHeader>
                <CardBody>
                    <CardTitle>Description:</CardTitle>
                    <CardText>{props.description}</CardText>
                    <Button onClick={getDetails}>See More</Button>
                </CardBody>
            </Card>
      </div>
    );
  };
  
export default ProjectCard;
import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

const ProjectDetails = (props) => {
    console.log(props)
    return (
        <div className='projectDetails'>
            <Card>
                <CardHeader tag="h3">Project: {props.name}</CardHeader>
                <CardBody>
                    <CardTitle>Description:</CardTitle>
                    <CardText>{props.description}</CardText>
                    <CardTitle>Actions:</CardTitle>
                    <CardText>{props.notes}</CardText>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </CardBody>
            </Card>
      </div>
    );
  };
  
export default ProjectDetails;
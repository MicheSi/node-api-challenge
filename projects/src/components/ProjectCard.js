import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

const ProjectCard = (props) => {
    return (
        <div className='projectCard'>
            <Card>
                <CardHeader tag="h3">Project: {props.name}</CardHeader>
                <CardBody>
                    <CardTitle>Description:</CardTitle>
                    <CardText>{props.description}</CardText>
                    <Button>See More</Button>
                </CardBody>
            </Card>
      </div>
    );
  };
  
export default ProjectCard;
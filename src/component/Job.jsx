import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

import ReactMarkdown from "react-markdown";

const Job = ({ job }) => {
  return (
    <Card border="dark" className="mt-4 mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company_name}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.date_posted).toLocaleDateString()}
            </Card.Subtitle>
            <Badge varient="secondary" className="mr-2">
              {job.location}
            </Badge>
            <Button className="mt-2" style={{display:"block", width:"100px"}} href={job.detail_url} variant="primary" size="sm" >Apply Here</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Job;

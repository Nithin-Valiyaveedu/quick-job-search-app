import React, { useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";


const Job = ({ job }) => {
  const [clicked, setClicked] = useState(false);
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
            <Badge bg="dark" className="mr-2">
              {job.location}
            </Badge>
            <Button
              className="mt-2 mb-2"
              style={{ display: "block", width: "100px" }}
              href={job.detail_url}
              target="_blank"
              
              variant="primary"
              size="sm"
            >
              Apply Here
            </Button>

            {clicked ? (
              <>
                <Card.Text>
                  <Button
                    onClick={() => setClicked(false)}
                    variant="primary"
                    size="sm"
                  >
                    Show lesser Details
                  </Button>
                </Card.Text>

                <div className="mt-4">{job.description}</div>
              </>
            ) : (
              <Card.Text>
                <Button
                  onClick={() => setClicked(true)}
                  variant="primary"
                  size="sm"
                >
                  View More Details
                </Button>
              </Card.Text>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Job;

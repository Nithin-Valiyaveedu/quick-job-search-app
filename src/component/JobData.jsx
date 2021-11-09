import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FetchJobs from "../FetchJobs";
import Job from "./Job";

const JobData = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = FetchJobs();
  const allJobs = jobs["jobs"];
  return (
    <Container>
      {loading ? (
        <h1>Loading data...</h1>
      ) : (
        allJobs.map((job, index) => {
          return(
              <Job key={index} job={job} />)
        })
      )}
      {error ? <h1>Try Refreshing again...</h1> : null}
    </Container>
  );
};

export default JobData;

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FetchJobs from "../FetchJobs";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";
const JobData = ({ query }) => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = FetchJobs(params, page);
  const allJobs = jobs["jobs"];
  function handleParamChange(e){
      const param = e.target.name
      const value=e.target.value
      setPage(1)
      setParams(prevParams=>{
          return {...prevParams,[param]:value}
      })
  }

  return (
    <Container>
    <SearchForm params={params} onParamChange={handleParamChange}/>
      <JobsPagination page={page} setPage={setPage} />
      {loading ? (
        <div class="mt-4 text-center">
          <div class="spinner-border" role="status"></div>
        </div>
      ) : (
        allJobs.map((job, index) => {
          return <Job key={index} job={job} />;
        })
      )}
      {error ? <h1>Sorry please try Refreshing again...</h1> : null}
    </Container>
  );
};

export default JobData;

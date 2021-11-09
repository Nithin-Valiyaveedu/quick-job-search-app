import React from 'react'
import { Container } from 'react-bootstrap'
import FetchJobs from '../FetchJobs'


const JobData = () => {
    const {jobs,loading,error } = FetchJobs()
    
    return (
       <Container>
            {loading ? (<h1>Loading...</h1>):(<h1>{jobs.length}</h1>)}
            {error ? (<h1>Try Refreshing again...</h1>): null }
       </Container>
           
      
    )
}

export default JobData

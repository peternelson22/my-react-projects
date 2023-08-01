/* eslint-disable react/prop-types */
import JobDuties from './JobDuties';

const JobInfo = ({ jobInfo, currentItem }) => {
  const { company, dates, duties, title } = jobInfo[currentItem];
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <JobDuties duties={duties} />
    </article>
  );
};
export default JobInfo;

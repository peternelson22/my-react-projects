import { useEffect } from 'react';
import { useState } from 'react';
import JobInfo from './JobInfo';
import Button from './Button';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [jobInfo, setJobInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  const fetchJobs = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobInfo(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <section className='jobs-center'>
      <Button
        currentItem={current}
        setCurrentItem={setCurrent}
        jobInfo={jobInfo}
      />
      <JobInfo jobInfo={jobInfo} currentItem={current} />
    </section>
  );
}

export default App;

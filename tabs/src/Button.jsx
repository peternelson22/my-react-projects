/* eslint-disable react/prop-types */
const Button = ({ currentItem, setCurrentItem, jobInfo }) => {
  return (
    <div className='btn-container'>
      {jobInfo.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrentItem(index)}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default Button;

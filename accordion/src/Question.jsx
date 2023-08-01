import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

/* eslint-disable react/prop-types */
const Question = ({ id, info, title, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  return (
    <article className='question'>
      <header>
        <h5> {title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
export default Question;
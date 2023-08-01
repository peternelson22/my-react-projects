/* eslint-disable react/prop-types */
import Question from './Question';

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => (
        <Question
          key={question.id}
          {...question}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </section>
  );
};
export default Questions;

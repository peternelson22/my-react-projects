import Person from './Person';

/* eslint-disable react/prop-types */
const List = ({ birthdays }) => {
  return (
    <section>
      {birthdays.map((birthday) => (
        <Person key={birthday.id} {...birthday} />
      ))}
    </section>
  );
};
export default List;

/* eslint-disable react/prop-types */
const Categories = ({ categories, filterCategory }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => filterCategory(category)}
          className='btn'
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default Categories;

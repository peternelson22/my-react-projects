import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error('pls enter a value');
      return;
    }

    addItem(name);
    setName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Todo app</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' className='btn'>
          submit
        </button>
      </div>
    </form>
  );
};
export default Form;

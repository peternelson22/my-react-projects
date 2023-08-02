/* eslint-disable react/prop-types */
import Color from './Color';
import { v4 as uuidv4 } from 'uuid';

const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color, index) => (
        <Color key={uuidv4()} color={color} index={index} />
      ))}
    </section>
  );
};
export default ColorList;

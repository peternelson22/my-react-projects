import { toast } from 'react-toastify';

/* eslint-disable react/prop-types */
const Color = ({ color, index }) => {
  console.log(color);
  const { hex, weight } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('color copied to clipboard');
      } catch (error) {
        toast.error('failed to copy to clipboard');
      }
    } else {
      toast.error("can't access clipboard");
    }
  };
  return (
    <article
      onClick={saveToClipBoard}
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
export default Color;

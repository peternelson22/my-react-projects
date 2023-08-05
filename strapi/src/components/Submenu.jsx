import { useRef } from 'react';
import { useGlobalContext } from '../context';
import sublinks from '../data';

const Submenu = () => {
  const submenuContainer = useRef(null);
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;
    if (clientX < left - 1 || clientX > right - 1 || clientX > bottom - 1) {
      setPageId(null);
    }
    //setPageId(null);
  };
  return (
    <div
      ref={submenuContainer}
      onMouseLeave={handleMouseLeave}
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { url, id, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;

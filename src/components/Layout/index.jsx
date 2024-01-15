/* eslint-disable react/prop-types */
import './layout.css';

const Layout = ({ children }) => {
  return (
    <main>
      <header className='header' />
      <div className='content'>{children}</div>
    </main>
  );
};

export default Layout;

/* eslint-disable tailwindcss/no-custom-classname */
import { Footer } from './Footer';
import Header from './Header';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="notion app">
      <div className="viewport"></div>
      <div className="frame">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;

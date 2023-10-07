

import PropTypes from 'prop-types';
import Footer from './Footer';

import leftLine from '../../assets/left-line.png'
import Header from './Header';

export default function MainLayout({ children }) {
    return (
        <div className="md:relative md:container h-auto md:h-screen">
            <img src={leftLine} className='absolute 2xl:block hidden translate-y-1/3 left-0 translate-[50%_50%]' alt="" />
            <Header />
            {children}
           
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

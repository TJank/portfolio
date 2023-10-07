

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MenuItem({
    name,
    href,
    onClick
}) {
    return (
        <Link onClick={onClick} to={href} className="flex items-start text-white group shadow-lg  font-normal text-lg h-[42px]">
            <div className="w-[40px] h-full bg-white transition_linear group-hover:border-white  border border-white"></div>
            <div className="border flex justify-center items-center border-t-white border-b-white xl:w-[180px] lg:w-[100px] w-full h-full border-r-0 border-l-0 group-hover:border-white group-hover:text-primary-100 group-hover:bg-white transition_linear">
                {name}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="42" className='w-[30px] fill-white group-hover:fill-white transition_linear lg:w-[22px]' viewBox="0 0 22 42" fill="none">
                <path d="M0 0L22 21.913V42H0V41H21V22.2857L0 1V0Z" fill="" />
            </svg>
        </Link>
    )
}

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

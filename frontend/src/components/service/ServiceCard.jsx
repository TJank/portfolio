import arrowRight from '../../assets/icons/arrow-right.png'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

export default function ServiceCard({ data }) {
  return (
      <div className="flex flex-col gap-5 items-start self-stretch p-8 rounded-lg bg-primary-100 text-white border border-primary-200 hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="">
              <img height={64} width={64} src={data?.image} alt="" />
          </div>
          <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold leading-8 font-hl">{data?.title}</h2>
              <p className='text-gray-400 font-medium leading-5 font-ff'>{data?.description}</p>
          </div>
          <div className="flex-1 flex items-end">
              <Link to='/contact'>
                  <button className='border border-white flex justify-center items-center gap-2.5 px-[25px] py-2.5 group/button hover:scale-[1.02] transition-all duration-200 ease-out'>
                      <p className='text-white text-lg font-normal font-hl'>Contact Now</p>
                      <img className='w-5 h-5 group-hover/button:w-6 transition-all duration-300 ease-out' src={arrowRight} alt="" />
                  </button>
              </Link>
          </div>
      </div>
  )
}

ServiceCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

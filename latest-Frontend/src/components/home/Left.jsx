import tiger from '../../assets/tiger.png'

import InfiniteImageAnimation from '../motion/InfiniteImageAnimation'
export default function Left() {
  return (
      <div className="order-2 lg:order-1 md:relative">
         
          <InfiniteImageAnimation img={tiger} className='block  md:top-14 md:absolute  md:z-10 md:-right-28' src={tiger} />
         
      </div>
  )
}

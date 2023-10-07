import bottomLine from '../../assets/bottom-line.png';
import borderHome from '../../assets/border-home.png';
import redDotDesktop from '../../assets/red-dot-desktop.png';

export default function Right() {
  return (
      <div className="order-1 lg:order-2 relative lg:p-4 xl:p-10 2xl:p-16 font-ff">
          <img src={borderHome} className='absolute lg:block hidden inset-0 min-h-[762px]' alt="" />

          <img src={bottomLine} className='absolute lg:block hidden right-0 -bottom-36 translate-[50%_50%]' alt="" />
         
          <img className='max-h-[124px] h-full hidden md:block' src={redDotDesktop} alt="" />
          {/* <img className='block md:hidden' src={redDotMobile} alt="" /> */}
          <div className="text-white/80 py-3">
              <p className=' text-2xl md:text-[32px] leading-10 tracking-[0.32px] font-light text-center md:text-left font-ff'>Welcome to <span className='font-bold text-white'>Janky Robotics</span>, where we offer unparalleled software services tailored to meet your <span className='font-bold text-white'>unique needs</span>. Our team of experts specializes in crafting <span className='font-bold text-white'>personalized web applications, leveraging machine learning and data analysis, and providing efficient testing and automation scripting</span>. Discover how our services can transform your business and propel it to new heights.</p>
          </div>
          <img className='max-h-[124px] h-full hidden md:block' src={redDotDesktop} alt="" />
          {/* <img className='block md:hidden' src={redDotMobile} alt="" /> */}


      </div>
  )
}

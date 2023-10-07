import bottomLine from '../assets/bottom-line.png'
import AboutCard from '../components/about/AboutCard'
import AboutUs from '../components/about/AboutUs'
import { aboutData } from '../constant/data'

export default function AboutScreen() {
  return (
    <>
      <div className="container lg:max-w-[1280px] lg:mx-auto font-ff">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-16  pt-24 pb-14 px-4 md:px-0">
          <AboutUs />
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              aboutData?.map((item) => <AboutCard key={item.id} data={item} />)
            }
          </div>
        </div>
      </div>
      <div className="relative w-full mt-10">
        <img src={bottomLine} className='absolute md:block hidden right-0 bottom-0 translate-[50%_50%]' alt="" />
      </div>
    </>
  )
}

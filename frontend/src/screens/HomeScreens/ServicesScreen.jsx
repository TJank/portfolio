
import bottomLine from '../../assets/bottom-line.png'

import ServiceCard from '../../components/service/ServiceCard'
import { servicesData } from '../../constant/data'


export default function ServicesScreen() {
  return (
    <>
      <div className='container lg:max-w-[1280px] lg:mx-auto'>

        <h1 className='text-white  text-[32px] leading-10 tracking-[0.32px] text-center pt-6 md:pt-16 pb-2 font-hl font-bold '>Our Services</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:py-16 py-6 px-4 md:px-0">
          {
            servicesData?.map((item) => <ServiceCard key={item.id} data={item} />)
          }
        </div>
      </div>

      <div className="relative w-full mt-10">
        <img src={bottomLine} className='absolute md:block hidden right-0 -bottom-3 translate-[50%_50%]' alt="" />
      </div>

    </>
  )
}

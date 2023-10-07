
import webDevelopemt from '../assets/icons/web-development.png'
import dataScience from '../assets/icons/data-science.png'
import testing from '../assets/icons/testing.png'
import bottomLine from '../assets/bottom-line.png'

import ServiceCard from '../components/service/ServiceCard'

const data = [
  {
    id: 0,
    title: "Custom Web Application",
    description: "Unlock the full potential of your business with our custom-built, personalized, and full-stack web applications. Whether you need a simple business website, a robust e-commerce platform, or complex business operations services, we have the expertise to bring your vision to life. Contact us today, share your requirements, and let's embark on a journey of digital transformation together.",
    image: webDevelopemt
  },
  {
    id: 1,
    title: "Machine Learning & Data Analysis",
    description: "Gain valuable insights from your business, product, and customer data through our comprehensive machine learning and data analysis services. Our team dives deep into your data, providing you with actionable intelligence to enhance decision-making and optimize your strategies. Contact us now with a description of your requirements and ideal analysis, and let's connect to unlock the power of data-driven decision-making.",
    image: dataScience
  },
  {
    id: 2,
    title: "Testing & Automation Solution",
    description: "Testing & Automation Solutions Streamline your testing processes and reduce manual efforts with our cutting- edge testing and automation scripting solutions.We offer a comprehensive suite of automation testing tools, including smoke, regression, and visual testing.By leveraging continuous integration techniques, we ensure the highest quality and efficiency for your software development lifecycle.",
    image: testing
  }
]
export default function ServicesScreen() {
  return (
    <>
      <div className='container lg:max-w-[1280px] lg:mx-auto'>

        <h1 className='text-white  text-[32px] leading-10 tracking-[0.32px] text-center pt-6 md:pt-16 pb-2 font-hl font-bold '>Our Services</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:py-16 py-6 px-4 md:px-0">
          {
            data?.map((item) => <ServiceCard key={item.id} data={item} />)
          }
        </div>
      </div>

      <div className="relative w-full mt-10">
        <img src={bottomLine} className='absolute md:block hidden right-0 -bottom-3 translate-[50%_50%]' alt="" />
      </div>

    </>
  )
}

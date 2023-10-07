import ContactForm from "../components/form/ContactForm";
import bottomLine from '../assets/bottom-line.png'

export default function ContactScreen() {
  return (
    <>
    <div className="container lg:max-w-[811px] lg:mx-auto px-4 md:px-0 pt-2.5 pb-10">
      <h1 className="text-white/90 text-center text-[32px] font-light py-8 font-ff tracking-[0.32px]">Contact <span className="font-bold text-white">Janky Robotics</span> for Consultation</h1>
      <ContactForm />
    </div>
      <div className="relative w-full mt-12">
        <img src={bottomLine} className='absolute md:block hidden right-0 -bottom-0 translate-[50%_50%]' alt="" />
      </div>
    </>
  )
}

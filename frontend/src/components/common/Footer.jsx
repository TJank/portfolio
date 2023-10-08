import { NavLink, useLocation } from "react-router-dom";
import logo_text from "../../assets/logo_text.svg";
import dribbble from "../../assets/icons/dribbble.svg";
import github from "../../assets/icons/github.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook-f.svg";

export default function Footer() {
  const { pathname } = useLocation();
  if (pathname !== "/") {
    return (
      <div className="container lg:px-24 pt-20 pb-10 px-4 font-ff">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center">
          <div className="flex items-center">
            <img src={logo_text} alt="" />
          </div>
          <ul className="flex items-center gap-8 text-[#C8C8C8]">
            <li><NavLink className={"hover:text-primary-100 hover:font-bold transition_linear"} to={"/"}>Home</NavLink></li>
            <li><NavLink className={"hover:text-primary-100 hover:font-bold transition_linear"} to={"/services"}>Services</NavLink></li>
            <li><NavLink className={"hover:text-primary-100 hover:font-bold transition_linear"} to={"/about"}>About</NavLink></li>
            <li><NavLink className={"hover:text-primary-100 hover:font-bold transition_linear"} to={"/contact"}>Contact</NavLink></li>
          </ul>
          <div className="flex h-[52px] items-center xl:w-[533px] w-full">
            <input type="text" placeholder="Enter your email" className="flex-1 leading-6 rounded-l-lg bg-transparent border-[#B68080] text-[#C8C8C8] focus:border-primary-200 focus:ring-0 focus:outline-none placeholder:text-[#C8C8C8] border-r-0 h-full px-4 py-3.5 transition_linear" />
            <button className="text-primary-100 rounded-r-lg bg-white h-full px-[25px] py-2.5 text-lg hover:bg-primary-200 hover:text-white font-medium transition_linear">Send Message</button>
          </div>
        </div>
        <div className="h-[1px] w-full divider_gradient my-5 md:my-10"></div>
        <div className="flex justify-between items-center flex-col md:flex-row gap-3">
          <p className="text-[#C8C8C8]">© 2022 Janky Robitics, Inc. All rights reserved.</p>
          <div className="flex gap-2 items-center">

            <a href="http://linkedin.com/in/iamazadur" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
            <a href="http://linkedin.com/in/iamazadur" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
            <a href="http://linkedin.com/in/iamazadur" target="_blank" rel="noopener noreferrer"><img src={dribbble} alt="" /></a>
            <a href="http://linkedin.com/in/iamazadur" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
          </div>
        </div>
      </div>
    )
  } else {

    return null
  }
}

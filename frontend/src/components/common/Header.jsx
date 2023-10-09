import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  XMarkIcon,
} from '@heroicons/react/24/outline'
import navIcon from '../../assets/icons/navIcon.png'
import lines from '../../assets/icons/lines.png'
import logo from '../../assets/logo.png'
import mobileLogo from '../../assets/mobile-logo.png'
import MenuItem from '../menu/MenuItem'
import { Link } from 'react-router-dom'


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  return (
    <header className="font-ff">
      <nav className="flex container gap-x-10 items-center justify-between py-4 px-4 md:px-0 md:py-6 bg-transparent " aria-label="Global">
        <div className="flex">
          <Link to="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto hidden lg:block" src={navIcon} alt="" />
            <img className="h-auto w-12 block lg:hidden" src={mobileLogo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <img src={lines} alt='' />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-10">

          <MenuItem href='/' name='Home' />

          <div className="relative">
            <div
              className="menu_text"
              onMouseEnter={() => setPopoverVisible(true)}
              onMouseLeave={() => setPopoverVisible(false)}
            >
              <MenuItem href="/services" name="Services" />
            </div>

            {isPopoverVisible && (
              <div
                onMouseEnter={() => setPopoverVisible(true)}
                onMouseLeave={() => setPopoverVisible(false)}
                className="absolute left-0 top-full z-10 -mt-1 w-screen max-w-md overflow-hidden">
                <div className="shadow-lg ring-1 ring-gray-900/5 mt-2 bg-[#1B0000] text-primary-200 text-center text-2xl leading-6 font-hl clip h-[133px]">

                  <ul className='flex flex-row flex-wrap'>
                    <li className='w-full p-2.5 cursor-pointer hover:bg-primary-100 transition-all duration-200 ease-linear'>Custom Web applications</li>
                    <li className='w-full p-2.5 cursor-pointer hover:bg-primary-100 transition-all duration-200 ease-linear'>Machine learning and data analysis</li>
                    <li className='w-full p-2.5 cursor-pointer hover:bg-primary-100 transition-all duration-200 ease-linear'>Testing and automation solutions</li>
                  </ul>
                </div>
              </div>
            )}
          </div>


          <MenuItem href='/about' name='About' />
          <MenuItem href='/contact' name='Contact' />
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            <img src={logo} width={"85px"} height={"78px"} alt="" />
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto gradient px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon color='white' className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              <MenuItem onClick={() => setMobileMenuOpen(false)} href='/' name='Home' />
              <MenuItem onClick={() => setMobileMenuOpen(false)} href='/services' name='Services' />
              <MenuItem onClick={() => setMobileMenuOpen(false)} href='/about' name='About' />
              <MenuItem onClick={() => setMobileMenuOpen(false)} href='/contact' name='Contact' />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

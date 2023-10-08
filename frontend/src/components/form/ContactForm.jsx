import TextField from "./TextField";

export default function ContactForm() {
    return (
        <>
            <form className='contact_form font-ff md:p-8 p-4 rounded-lg drop-shadow-lg'>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">

                        <div className="sm:col-span-3">
                            <TextField label='First name' placeholder='Bonnie' name='first-name' />
                        </div>

                        <div className="sm:col-span-3">
                            <TextField label='Last name' placeholder='Clyde' name='last-name' />
                        </div>
                        <div className="sm:col-span-3">
                            <TextField label='Email'
                            name="email" type={'email'} placeholder="iamazadur@gmail.com" />
                        </div>
                        <div className="sm:col-span-3">
                            <TextField label='Phone number' name='phone-number' type={'tel'} placeholder='(555) 555-5555' />
                        </div>
                        <div className="sm:col-span-6">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                                Select Service
                            </label>
                            <div className="mt-2">
                                <select
                                    name='service'
                                    id='service'
                                    className="block w-full rounded-lg px-[14px] py-[16px] bg-transparent border border-[#B68080] placeholder:text-[#C8C8C8] text-[#C8C8C8] font-normal text-base leading-6 focus:ring-0 focus:border-[#B68080]"
                                >
                                    <option className="text-white bg-primary-200" value=''>Select a service</option>
                                    <option className="text-white bg-primary-200" value=''>Consultation</option>
                                    <option className="text-white bg-primary-200" value=''>Custom Software</option>
                                    <option className="text-white bg-primary-200" value=''>Website Development</option>
                                </select>


                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    name="description"
                                    id="description"
                                    rows="5"
                                    className="block w-full rounded-lg px-[14px] py-[16px] bg-transparent border border-[#B68080] placeholder:text-[#C8C8C8] text-[#C8C8C8] font-normal text-base leading-6 focus:ring-0 focus:border-[#B68080]"
                                    placeholder='Tell us more about your project'
                                ></textarea>

                            </div>
                        </div>
                    </div>
                    <button className='bg-white border-white border  text-primary-100 text-lg px-6 py-2.5 shadow-md rounded-md font-medium transition_linear hover:bg-primary-200 hover:text-white hover:border-primary-200'>Send Message</button>
                </div>

            </form>



        </>
    )
}

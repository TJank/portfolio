import { Form, Formik } from "formik";
import * as yup from 'yup';
import TextField from "./TextField";
import TextArea from "./TextArea";
import SelectField from "./SelectField";
import ErrorMessage from "./ErrorMessage";

export default function ContactForm() {

    const initialValues = {
        firstName: '',
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "",
        description: "",
    }
    const validationSchema = yup.object({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: yup.string().required('Phone number is required'),
        service: yup.string().required('Service is required'),
        description: yup.string().required('Description is required'),
    })
    
    const onSubmit = values => {
        console.log(values)
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className='contact_form font-ff md:p-8 p-4 rounded-lg drop-shadow-lg'>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">

                            <div className="sm:col-span-3">
                                <TextField label='First name' placeholder='Bonnie' name='firstName' />
                                <ErrorMessage name='firstName' />
                            </div>

                            <div className="sm:col-span-3">
                                <TextField label='Last name' placeholder='Clyde' name='lastName' />
                                <ErrorMessage name='lastName' />
                            </div>
                            <div className="sm:col-span-3">
                                <TextField label='Email'
                                    name="email" type={'email'} placeholder="iamazadur@gmail.com" />
                                <ErrorMessage name='email' />
                            </div>
                            <div className="sm:col-span-3">
                                <TextField label='Phone number' name='phoneNumber' type={'tel'} placeholder='(555) 555-5555' />
                                <ErrorMessage name='phoneNumber' />
                            </div>
                            <div className="sm:col-span-6">
                                <SelectField label='Service' name='service' placeholder='Select a service' options={[
                                    { value: '', label: 'Select a service' },
                                    { value: 'Web Development', label: 'Web Development' },
                                    { value: 'Machine Learning', label: 'Machine Learning' },
                                    { value: 'Testing and Automation', label: 'Testing and Automation' },
                                ]}
                                />
                                <ErrorMessage name='service' />
                            </div>
                            <div className="sm:col-span-6">
                                <TextArea label='Description' name='description' placeholder='Tell us more about your project' />
                                <ErrorMessage name='description' />
                            </div>
                        </div>
                        <button type="submit" className='bg-white border-white border  text-primary-100 text-lg px-6 py-2.5 shadow-md rounded-md font-medium transition_linear hover:bg-primary-200 hover:text-white hover:border-primary-200'>Send Message</button>
                    </div>

                </Form>
            </Formik>



        </>
    )
}

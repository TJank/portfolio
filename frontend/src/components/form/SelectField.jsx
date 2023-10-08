import { Field } from 'formik'
import React from 'react'

export default function SelectField({ name, label, placeholder, options }) {
    return (
        <Field name={name}>
            {
                ({ field }) => (
                    <>
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                            {label}
                        </label>
                        <div className="mt-2">
                            <select
                                {...field}
                                placeholder={placeholder}
                                className="block w-full rounded-lg px-[14px] py-[16px] bg-transparent border border-[#B68080] placeholder:text-[#C8C8C8] text-[#C8C8C8] font-normal text-base leading-6 focus:ring-0 focus:border-[#B68080]"
                            >
                                {
                                    options?.map((item, key) => <option key={key} className="text-white bg-primary-200" value={item?.value}>{item.label}</option>)
                                }
                               
                            </select>
                        </div>
                    </>
                )
            }
        </Field>


    )
}
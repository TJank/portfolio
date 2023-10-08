import React from 'react'
import { ErrorMessage as EM } from 'formik'

export default function ErrorMessage({ name }) {
    return (
        <EM name={name}>
            {msg => <div className='text-[#00FF00] pt-1'>{msg}</div>}
        </EM>
    )
}

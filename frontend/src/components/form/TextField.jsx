
import { Field } from 'formik'
import PropTypes from 'prop-types'

export default function TextField({
    label,
    placeholder,
    type,
    name,
    autoComplete,
    value,
    onChange,
}) {
    return (
        <Field name={name}>
            {
                ({ field }) => (
                    <>
                        <label htmlFor={name} className="block text-sm font-medium text-white">
                            {label}
                        </label>
                        <div className="mt-2">
                            <input
                                type={type}
                                {...field}
                                placeholder={placeholder}
                                autoComplete={autoComplete}
                                className="block w-full rounded-lg px-[14px] py-[16px] bg-transparent border border-[#B68080] placeholder:text-[#C8C8C8] text-[#C8C8C8] font-normal text-base leading-6 focus:ring-0 focus:border-[#B68080]"

                            />
                        </div>
                    </>
                )
                }
        </Field>
    )
}

TextField.defaultProps = {
    type: 'text',
    autoComplete: 'off',
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    autoComplete: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}
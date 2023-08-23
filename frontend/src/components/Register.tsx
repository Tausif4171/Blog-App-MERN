import React, { useState } from 'react'
import * as Yup from 'yup';
import errorIcon from '../assets/icons/errorIcon.svg'

import './toast.css'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    console.log({ errors })

    async function register(e: any) {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.status === 200) {
            alert('Registration Successfully!')
        }
        else {
            alert('Registration Failed!')
        }
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required.')
            .matches(/^[A-Za-z]*$/, 'Only letters are allowed in the email field.')
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            // Validate the form data against the schema
            await validationSchema.validate({ email }, { abortEarly: false });

            // Form data is valid, perform form submission logic here...
            console.log('Form data submitted:', email);
            register(e);
            setErrors({})
        } catch (validationErrors: any) {
            // Yup validation errors occurred, set the errors state accordingly
            const errorsObject: any = {};
            (validationErrors as Yup.ValidationError).inner.forEach((error: any) => {
                errorsObject[error.path] = error.message;
            });
            setErrors(errorsObject);
        }
    };


    return (
        <div>
            <form className='flex flex-col w-[25%] mx-auto my-[80px]' onSubmit={handleSubmit}>
                <label className='text-[22px] text-[#051729] font-semibold'>Sign Up to your account</label>
                <div className='flex flex-col'>
                    <input
                        placeholder='Enter your email'
                        className={`mt-3 rounded p-2 outline-none ${errors.email ? 'border-[1px] border-solid border-[#D72C0D] bg-[#FFF4F4]' : 'outline-none'
                            }`}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <div className="mt-[4px] gap-[8px] text-[#D72C0D] flex flex-row text-[14px]">
                            <img src={errorIcon} />
                            <p>{errors.email}</p>
                        </div>
                    )}
                    <input placeholder='Enter your password' className='mt-3 rounded p-2 outline-none' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button className='bg-[#555] rounded-[4px] mt-6 text-[#fff] p-2 outline-none'>Register</button>
            </form>

            {/* <div className="flex justify-center items-center space-x-[-10px]">
                <div className="">
                    <img src={errorIcon} alt="Image 1" className="w-[40px] h-[40px] rounded-lg object-cover transition-transform transform hover:scale-110" />
                </div>
                <div className="">
                    <img src={errorIcon} alt="Image 2" className="w-[56px] h-[56px] rounded-lg object-cover transition-transform transform hover:scale-110" />
                </div>
                <div className="">
                    <img src={errorIcon} alt="Image 3" className="w-[40px] h-[40px] rounded-lg object-cover transition-transform transform hover:scale-110" />
                </div>
            </div> */}

        </div>
    )
}

export default Register
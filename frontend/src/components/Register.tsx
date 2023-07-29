import React, { useState } from 'react'
import * as Yup from 'yup';


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
                {/* <label className='align-center items-center'>Login</label> */}
                <div className='flex flex-col'>
                    <input
                        placeholder='Enter your email'
                        className={`mt-3 rounded p-2 ${errors.email ? 'border-[1px] border-solid border-[red]' : 'outline-none'
                            }`}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <div className="mt-[0.25rem] text-[red]">
                            X {errors.email}
                        </div>
                    )}
                    <input placeholder='Enter your password' className='mt-3 rounded p-2 outline-none' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button className='bg-[#555] rounded-[4px] mt-6 text-[#fff] p-2 outline-none'>Register</button>
            </form>
        </div>
    )
}

export default Register
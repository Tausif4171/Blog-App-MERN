import React, { useState } from 'react'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

    return (
        <div>
            <form className='flex flex-col w-[25%] mx-auto my-[80px]' onSubmit={register}>
                {/* <label className='align-center items-center'>Login</label> */}
                <div className='flex flex-col'>
                    <input placeholder='Enter your email' className='mt-3 rounded p-2 outline-none' value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder='Enter your password' className='mt-3 rounded p-2 outline-none' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button className='bg-[#555] rounded-[4px] mt-6 text-[#fff] p-2 outline-none'>Register</button>
            </form>
        </div>
    )
}

export default Register
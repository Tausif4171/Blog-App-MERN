import React from 'react'

function Login() {
    return (
        <div>
            <form className='flex flex-col w-[25%] mx-auto my-[80px]'>
            {/* <label className='align-center items-center'>Login</label> */}
                <div className='flex flex-col'>
                    <input placeholder='Enter your email' className='mt-3 rounded p-2 outline-none'/>
                    <input placeholder='Enter your password' className='mt-3 rounded p-2 outline-none'/>
                </div>
                <button className='bg-[#555] rounded-[4px] mt-6 text-[#fff] p-2'>Login</button>
            </form>
        </div>
    )
}

export default Login
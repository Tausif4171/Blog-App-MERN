import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [email, setEmail] = useState('')
    console.log({ email })
    const profile = async () => {
        await fetch('http://localhost:4000/profile', {
            credentials: 'include',
            method: 'GET'
        })
            .then(response => {
                response.json().then(info => {
                    setEmail(info.email)
                })
            })
        // console.log(response)
    }
    useEffect(() => {
        profile()
    }, [])
    return (
        <div className='sticky top-0'>
            <header className='flex flex-row justify-around items-center bg-[#fff] w-full h-[50px] text-[#000]'>
                <Link to={'/'} className='text-[22px]'>MyBlog</Link>
                <nav>

                    <ul className='flex flex-row gap-4 text-[16px] cursor-pointer'>

                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/'}><li>About</li></Link>
                        <Link to={'/'}><li>Blog</li></Link>
                        {
                            email ? <><Link to={'/login'}><li>Create</li></Link>
                                <Link to={'/register'}><li>logout</li></Link></> : <>   <Link to={'/login'}><li>Login</li></Link>
                                <Link to={'/register'}><li>Register</li></Link></>
                        }

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
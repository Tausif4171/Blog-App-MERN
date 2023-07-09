import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='sticky top-0'>
            <header className='flex flex-row justify-around items-center bg-[#fff] w-full h-[50px] text-[#000]'>
                <Link to={'/'} className='text-[22px]'>MyBlog</Link>
                <nav>
                    <ul className='flex flex-row gap-4 text-[16px]'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
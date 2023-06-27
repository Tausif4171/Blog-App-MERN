import React from 'react'

function Header() {
    return (
        <div className='flex flex-row justify-around bg-[#000] w-full h-[50px] text-[#fff] p-3'>
            <div>
                <h1>MyBlog</h1>
            </div>
            <div>
                <ul className='flex flex-row gap-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
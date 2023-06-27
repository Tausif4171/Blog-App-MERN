import React from 'react'

function Header() {
    return (
        <div className='flex flex-row justify-around items-center bg-[#fff] w-full h-[50px] text-[#000]'>
            <div>
                <h1 className='text-[22px]'>MyBlog</h1>
            </div>
            <div>
                <ul className='flex flex-row gap-4 text-[16px]'>
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
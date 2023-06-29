import React from 'react'

function Header() {
    return (
        <main>
            <header className='flex flex-row justify-around items-center bg-[#fff] w-full h-[50px] text-[#000]'>
                <a href='' className='text-[22px]'>MyBlog</a>
                <nav>
                    <ul className='flex flex-row gap-4 text-[16px]'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </main>
    )
}

export default Header
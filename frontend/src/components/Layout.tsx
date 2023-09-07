import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        // <main>
        //     <Header />
        //     <Outlet />
        // </main>
        <main className='h-screen overflow-auto'>
            <Header />
            <Outlet />
            <footer className=' bottom-0 fixed flex justify-center items-center w-full mb-3'>
                <p className=' text-[16px] font-semibold '>Copyright &copy; 2023 MyBlog</p>
            </footer>
        </main>
    )
}

export default Layout

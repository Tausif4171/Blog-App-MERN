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
        </main>
    )
}

export default Layout

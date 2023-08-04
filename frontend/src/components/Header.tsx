import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const profile = async () => {
        try {
            const response = await fetch('http://localhost:4000/profile', {
                credentials: 'include',
                method: 'GET'
            });

            if (response.ok) {
                const info = await response.json();
                setEmail(info.email);
                setLoggedIn(true);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const logout = async () => {
        try {
            const response = await fetch('http://localhost:4000/logout', {
                credentials: 'include',
                method: 'POST'
            });

            if (response.ok) {
                setLoggedIn(false);
                navigate('/'); // Redirect to the home page after logout
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    useEffect(() => {
        profile();
    });

    return (
        <div className='sticky top-0'>
            <header className='flex flex-row justify-around items-center bg-[#fff] w-full h-[50px] text-[#000]'>
                <Link to={'/'} className='text-[22px] text-[#222222] font-bold'>
                    MyBlog
                </Link>
                <nav>
                    <ul className='flex flex-row gap-4 text-[16px] cursor-pointer'>
                        <Link to={'/'}><li className='hover:text-[#222222] text-[#606060] font-medium'>Home</li></Link>
                        <Link to={'/'}><li className='hover:text-[#222222] text-[#606060] font-medium'>About</li></Link>
                        <Link to={'/'}><li className='hover:text-[#222222] text-[#606060] font-medium'>Blog</li></Link>
                        {loggedIn ? (
                            <>
                                <Link to={'/login'}><li className='hover:text-[#222222] text-[#606060] font-medium'>Create</li></Link>
                                <li onClick={logout} className='hover:text-[#222222] text-[#606060] font-medium'>Logout</li>
                            </>
                        ) : (
                            <>
                                <Link to={'/login'}><li className='hover:text-[#222222] text-[#606060] font-medium'>Login</li></Link>
                                <Link to={'/register'}><li className='hover:text-[#222222] text-[#606060] font-medium'>Register</li></Link>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;

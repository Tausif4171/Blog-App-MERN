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
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <div className='w-[30%] mb-10 bg-slate-50'>
                    <img src='https://techcrunch.com/wp-content/uploads/2023/06/oak-park-river-forest-high-school.jpg?w=1390&crop=1' className='w-full' />
                    <h1>High school changes every student’s password to ‘Ch@ngeme!’</h1>
                    <p>
                        After a cybersecurity audit mistakenly reset everyone’s password, a high school changed every student’s password to
                        “Ch@ngeme!” giving every student the chance to hack into any other student’s account, according to emails obtained by
                        TechCrunch.
                    </p>
                </div>

                <div className='w-[30%] mb-10 bg-slate-50'>
                    <img src='https://techcrunch.com/wp-content/uploads/2023/06/oak-park-river-forest-high-school.jpg?w=1390&crop=1' className='w-full' />
                    <h1>High school changes every student’s password to ‘Ch@ngeme!’</h1>
                    <p>
                        After a cybersecurity audit mistakenly reset everyone’s password, a high school changed every student’s password to
                        “Ch@ngeme!” giving every student the chance to hack into any other student’s account, according to emails obtained by
                        TechCrunch.
                    </p>
                </div>

                <div className='w-[30%] mb-10 bg-slate-50'>
                    <img src='https://techcrunch.com/wp-content/uploads/2023/06/oak-park-river-forest-high-school.jpg?w=1390&crop=1' className='w-full' />
                    <h1>High school changes every student’s password to ‘Ch@ngeme!’</h1>
                    <p>
                        After a cybersecurity audit mistakenly reset everyone’s password, a high school changed every student’s password to
                        “Ch@ngeme!” giving every student the chance to hack into any other student’s account, according to emails obtained by
                        TechCrunch.
                    </p>
                </div>
            </div>

        </main>
    )
}

export default Header
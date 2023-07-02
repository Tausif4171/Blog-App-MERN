import React from 'react'

function Header() {
    return (
        <main>

            <header className='flex flex-row justify-around items-center bg-[#fff] w-full h-[50px] text-[#000] sticky top-0'>
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

            <div className='flex flex-col justify-center items-center min-h-screen mt-16'>
                <div className='w-[30%] mb-10 bg-slate-50'>
                    <img src='https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1448152453.jpg?w=1390&crop=1' className='w-full' />
                    <h1>Inflection lands $1.3B investment to build more ‘personal’ AI</h1>
                    <p>
                        As first reported by Forbes, Inflection AI, an AI startup aiming to create “personal AI for everyone,” has closed a $1.3 billion funding
                        round led by Microsoft, Reid Hoffman, Bill Gates, Eric Schmidt and new investor Nvidia.
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
                    <img src='https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-1174418589-1.jpg?w=1390&crop=1' className='w-full' />
                    <h1>Crypto losses halved in Q2 2023 to $204M</h1>
                    <p>
                        As if the pessimism around crypto wasn’t enough, the industry has historically been hounded by hackers and scammers looking
                        to make a quick buck.
                    </p>
                </div>
            </div>

        </main>
    )
}

export default Header
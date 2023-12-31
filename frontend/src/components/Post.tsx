import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'
import moment from 'moment'
import { Link } from 'react-router-dom'

interface IPost {
    _id: string,
    title: string,
    summary: string,
    content: string,
    cover: string,
    createdAt: string,
    author: any
}

function Post({ _id, title, summary, content, cover, createdAt, author }: IPost) {
    // const notify = () => toast.success("Wow so easy!", {
    //     position: toast.POSITION.BOTTOM_LEFT,
    //     className: 'toast-message'
    // });
    console.log({ cover })
    return (
        <div className='flex flex-row justify-center items-center'>
            <div className='w-full bg-slate-50'>
                <Link to={`/post/${_id}`}>
                    <img src={'http://localhost:4000/' + cover.replace(/\\/g, '/')} className='w-[280px] h-[250px]' />
                </Link>
                <div className='p-4'>
                    <Link to={`/post/${_id}`}>
                        <h1 className='text-[20px] font-medium mb-2'>{title}</h1>
                    </Link>
                    <div className='pb-2'>
                        <p className='flex gap-[8px] text-[13px]'><a className='font-semibold'>{author?.email}</a><time>{moment(createdAt).format('D-MM-YYYY h:mmA')}</time></p>
                    </div>
                    <p className=''>
                        {summary}
                    </p>
                    {/* <button onClick={notify}>Notify!</button> */}
                    {/* <ToastContainer /> */}
                </div>
            </div>

            {/* <div className='w-[50%] lg:w-[30%] mb-10 bg-slate-50'>
                <img src='https://techcrunch.com/wp-content/uploads/2023/06/oak-park-river-forest-high-school.jpg?w=1390&crop=1' className='w-full' />
                <div className='p-4'><h1 className='text-[20px] font-medium mb-2'>High school changes every student’s password to ‘Ch@ngeme!’</h1>
                    <div className='pb-2'>
                        <p className='flex gap-[8px] text-[13px]'><a className='font-semibold'>Rahul Dravid</a><time>5-07-2023 10:18</time></p>
                    </div>
                    <p className=''>
                        After a cybersecurity audit mistakenly reset everyone’s password, a high school changed every student’s password to
                        “Ch@ngeme!” giving every student the chance to hack into any other student’s account, according to emails obtained by
                        TechCrunch.
                    </p>
                </div>
            </div>

            <div className='w-[50%] lg:w-[30%] mb-10 bg-slate-50'>
                <img src='https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-1174418589-1.jpg?w=1390&crop=1' className='w-full' />
                <div className='p-4'><h1 className='text-[20px] font-medium mb-2'>Crypto losses halved in Q2 2023 to $204M</h1>
                    <div className='pb-2'>
                        <p className='flex gap-[8px] text-[13px]'><a className='font-semibold'>Rahul Jain</a><time>1-07-2023 9:00</time></p>
                    </div>
                    <p className=''>
                        As if the pessimism around crypto wasn’t enough, the industry has historically been hounded by hackers and scammers looking
                        to make a quick buck.
                    </p>
                </div>
            </div> */}
        </div>
    )
}

export default Post
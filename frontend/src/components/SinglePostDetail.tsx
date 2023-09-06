import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SinglePostDetail() {
    const [userInfo, setUserInfo] = useState<any>(null)
    const [postInfo, setPostInfo] = useState<any>(null)
    const { id } = useParams()
    console.log({ id }, { postInfo }, { userInfo })

    const profile = async () => {
        try {
            const response = await fetch('http://localhost:4000/profile', {
                credentials: 'include',
                method: 'GET'
            });

            if (response.ok) {
                const info = await response.json();
                console.log({ info })
                setUserInfo(info)
                // setEmail(info.email);
                // setLoggedIn(true);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then((response: any) => {
            console.log({ response })
            response.json().then((postInfo: any) => {
                setPostInfo(postInfo)
            })
        })
        profile()
    }, [])

    return (
        <div className='flex flex-col justify-center items-center mt-[100px] w-[100%]'>
            {postInfo && <div className='flex flex-col justify-center items-center bg-slate-100 rounded-lg py-10 px-12'>
                {postInfo?.cover && <img src={'http://localhost:4000/' + postInfo.cover.replace(/\\/g, '/')} />}
                <h1 className=' flex justify-center items-center text-[22px]'>
                    {postInfo?.title}
                </h1>
                <time className='text-[12px]'>{moment(postInfo?.createdAt).format('D-MM-YYYY h:mmA')}</time>
                <p className=' font-semibold'>by {postInfo?.author.email}</p>
                <p dangerouslySetInnerHTML={{ __html: postInfo?.content }} />
                <p>{postInfo?.summary}</p>

                {
                    postInfo.author._id === userInfo?.id && (
                        <>
                            <div className='mt-8'>
                                <button
                                    className='flex flex-row justify-center items-center bg-[#000] rounded-[5px] px-4 gap-x-[8px]'
                                // onClick={handleSubmit}
                                >
                                    <span className='text-[15px] font-medium text-[#ffff] mt-[-1px] font-InstrumentMedium py-[6px]'>
                                        Edit this post
                                    </span>
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
            }


        </div>
    )
}

export default SinglePostDetail
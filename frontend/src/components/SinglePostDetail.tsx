import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SinglePostDetail() {
    const [postInfo, setPostInfo] = useState<any>(null)
    const { id } = useParams()
    console.log({ id }, { postInfo })
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then((response: any) => {
            console.log({ response })
            response.json().then((postInfo: any) => {
                setPostInfo(postInfo)
            })
        })
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
            </div>
            }

        </div>
    )
}

export default SinglePostDetail
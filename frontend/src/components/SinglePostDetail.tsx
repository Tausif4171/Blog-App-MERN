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
        <div className='flex justify-center items-center mt-[100px]'>
            <h1 className=' flex justify-center items-center text-[22px]'>
                {postInfo?.title}
            </h1>
        </div>
    )
}

export default SinglePostDetail
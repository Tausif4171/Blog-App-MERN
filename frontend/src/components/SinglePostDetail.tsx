import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SinglePostDetail() {
    const [postInfo, setPostInfo] = useState(null)
    const { id } = useParams()
    console.log({ id },{postInfo})
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then((response: any) => {
            console.log({ response })
            response.json().then((postInfo: any) => {
                setPostInfo(postInfo)
            })
        })
    }, [])
    return (
        <div>SinglePostDetail</div>
    )
}

export default SinglePostDetail
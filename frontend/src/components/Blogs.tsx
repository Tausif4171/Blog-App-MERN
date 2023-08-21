import React, { useState, useEffect } from 'react'
import Post from './Post'

const Blogs = () => {
    const [posts, setPost] = useState([])

    console.log({ posts })

    useEffect(() => {
        const response = fetch('http://localhost:4000/create').then(response => {
            response.json().then(post => {
                console.log({ post })
                setPost(post)
            })
        })
    }, [])

    return (
        <div className='flex flex-row justify-center items-center gap-5 min-h-screen w-full'>
            {posts.length > 0 ? posts.map((post: any) => <Post {...post} />) : <h1>Create post!</h1>}
        </div>
    )
}

export default Blogs
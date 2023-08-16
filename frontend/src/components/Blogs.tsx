import React, { useState, useEffect } from 'react'
import Post from './Post'

const Blogs = () => {
    const [posts, setPost] = useState(null)

    // console.log({posts})

    useEffect(() => {
        const response = fetch('http://localhost:4000/create').then(response => {
            response.json().then(post => {
                console.log({ post })
            })
        })
    }, [])

    return (
        <div>
            <Post />
        </div>
    )
}

export default Blogs
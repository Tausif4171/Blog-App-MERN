import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [title, setTitle] = useState<any>('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState<any>(null);
    console.log({ title }, { summary }, { content }, { files })
    const navigate = useNavigate()
    const { id } = useParams()

    let test = ''
    if (files) {
        const parts = files.split("\\");
        const filename = parts[parts.length - 1];
        test = filename
        console.log(filename); // Output: 3b94226b9a0c2075c4e32d6b26a027f4.png
    } else {
        console.log("No file selected");
    }

    const updatePost = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/post/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, summary, content, files }),
            });

            if (response.ok) {
                // Handle successful update, e.g., show a success message
                console.log('Post updated successfully');
            } else {
                // Handle error response from the server
                console.error('Error updating post');
            }
            navigate(`/post/${id}`)
        } catch (error) {
            // Handle network errors
            console.error('Network error:', error);
        }
    };


    const fetchPostDetailsBasedOnId = () => {
        const response = fetch(`http://localhost:4000/post/${id}`).then(response => response.json().then(postDetail => {
            console.log({ postDetail })
            setTitle(postDetail.title)
            setSummary(postDetail.summary)
            setFiles(`http://localhost:4000/${postDetail.cover}`);
            setContent(postDetail.content)
        }
        ))
    }

    useEffect(() => {
        fetchPostDetailsBasedOnId()
    }, [])

    return (
        <div className='flex justify-center items-center mt-[100px]'>
            <form className='flex flex-col gap-y-2 w-[30%]' onSubmit={updatePost}>
                <input type='text' placeholder='please enter title' className='flex justify-items-center p-2 outline-none' value={title} onChange={e => setTitle(e.target.value)} />
                <input type='text' placeholder='please enter summary' className='flex justify-items-center p-2 outline-none' value={summary} onChange={e => setSummary(e.target.value)} />
                <div>
                    {files && (
                        <img src={files} alt="Post Cover" style={{ maxWidth: '100%' }} />
                    )}
                </div>
                <input
                    type="file"
                    // value={test}
                    onChange={(e) => setFiles(e.target.files)}
                />
                {/* {test} */}

                {/* <textarea placeholder='enter message' className='flex justify-items-center p-2' /> */}
                <ReactQuill theme="snow" className='bg-[#fff]' value={content} onChange={setContent} />
                <button className='w-[100%] bg-[#555] text-[#fff] p-2 mt-4 rounded-md'>Update</button>
            </form>
        </div>
    )
}

export default EditPost
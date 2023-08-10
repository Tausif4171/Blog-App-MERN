import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


function CreatePost() {
    const [title, setTitle] = useState<any>('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState<FileList | null>(null);
    console.log({ title }, { summary }, { content })

    const createPost = async () => {
        const formData = { 'title': title, 'summary': summary, 'content': content }
        const response = await fetch('http://localhost:4000/create', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
        console.log({ response })
    }
    return (
        <div className='flex justify-center items-center mt-[100px]'>
            <form className='flex flex-col gap-y-2 w-[30%]' onSubmit={createPost}>
                <input type='text' placeholder='please enter title' className='flex justify-items-center p-2' value={title} onChange={e => setTitle(e.target.value)} />
                <input type='text' placeholder='please enter summary' className='flex justify-items-center p-2' value={summary} onChange={e => setSummary(e.target.value)} />
                <input type="file" onChange={e => setFiles(e.target.files)} />
                {/* <textarea placeholder='enter message' className='flex justify-items-center p-2' /> */}
                <ReactQuill theme="snow" className='bg-[#fff]' value={content} onChange={setContent} />
                <button className='w-[100%] bg-[#555] text-[#fff] p-2 mt-4 rounded-md'>Create</button>
            </form>
        </div>
    )
}

export default CreatePost
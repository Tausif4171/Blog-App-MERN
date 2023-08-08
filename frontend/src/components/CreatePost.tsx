import React from 'react'

function CreatePost() {
    return (
        <div className='flex justify-center items-center mt-[100px]'>
            <form className='flex flex-col gap-y-2 w-[30%]'>
                <input type='text' placeholder='please enter title' className='flex justify-items-center p-2' />
                <input type='text' placeholder='please enter summary' className='flex justify-items-center p-2' />
                <input type='file' />
                <textarea placeholder='enter message' className='flex justify-items-center p-2' />
                <button className='w-[100%] bg-[#555] text-[#fff] p-2 mt-4 rounded-md'>Create</button>
            </form>
        </div>
    )
}

export default CreatePost
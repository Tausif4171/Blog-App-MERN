import React, { useState } from 'react'
import './toast.css'
function Login() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div>
            <form className='flex flex-col w-[25%] mx-auto my-[80px]'>
                {/* <label className='align-center items-center'>Login</label> */}
                <div className='flex flex-col'>
                    <input placeholder='Enter your email' className='mt-3 rounded p-2 outline-none' />
                    <input placeholder='Enter your password' className='mt-3 rounded p-2 outline-none' />
                </div>
                <button className='bg-[#555] rounded-[4px] mt-6 text-[#fff] p-2'>Login</button>
            </form>

            {/* <button className="ripple">Button</button> */}

            {/* <div>
                <button onClick={handleOpenModal}>Open Modal</button>
                {isModalOpen && (
                    <div className={` ${isModalOpen ? 'modal-content' : 'animate-fade-out'} modal fixed left-1/2 top-1/4 bg-[#fff] w-[459px] rounded-[8px] h-auto shadow-md`}>
                        <div >
                            <h3 className="modal-heading">Modal Title</h3>
                            <p>Modal Content</p>
                            <button onClick={handleCloseModal}>Close Modal</button>
                        </div>
                    </div>
                )}
            </div> */}

            <div>
                <button onClick={handleOpenModal}>Open Modal</button>
                <div className={`modal-overlay ${isModalOpen ? 'visible' : 'hidden'}`}>
                    <div className={`modal-content ${isModalOpen ? 'visible' : 'hidden'}`}>
                        <h3 className="modal-heading">Modal Title</h3>
                        <p>Modal Content</p>
                        <button onClick={handleCloseModal}>Close Modal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
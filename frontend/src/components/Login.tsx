// import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import './toast.css'
import { useNavigate } from 'react-router-dom'
function Login() {
    // let [isOpen, setIsOpen] = useState(false)

    // function closeModal() {
    //     setIsOpen(false)
    // }

    // function openModal() {
    //     setIsOpen(true)
    // }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const login = async (e: any) => {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        console.log(response)
        if (response.status === 200) {
            navigate('/')
        }
        else {
            alert('please enter correct credential!')
        }
    }

    return (
        <div>
            <form className='flex flex-col w-[25%] mx-auto my-[80px]' onSubmit={login}>
                <label className='text-[22px] text-[#051729] font-semibold'>Sign In to your account</label>
                <div className='flex flex-col'>
                    <input
                        placeholder='Enter your email'
                        className='mt-3 rounded p-2 outline-none'
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder='Enter your password'
                        className='mt-3 rounded p-2 outline-none'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
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

            {/* <div>
                <button onClick={handleOpenModal}>Open Modal</button>
                <div className={`modal-overlay ${isModalOpen ? 'visible' : 'hidden'}`}>
                    <div className={`modal-content ${isModalOpen ? 'visible' : 'hidden'}`}>
                        <h3 className="modal-heading">Modal Title</h3>
                        <p>Modal Content</p>
                        <button onClick={handleCloseModal}>Close Modal</button>
                    </div>
                </div>
            </div> */}

            {/* <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title

                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Payment successful
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent
                                            you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition> */}
        </div>
    )
}

export default Login
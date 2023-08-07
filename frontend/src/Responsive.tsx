import React from 'react'

function Responsive() {
    return (
        <div className="md:flex">
            {/* Left-hand side */}
            <div className="w-full md:w-1/2 flex flex-col h-screen">
                {/* Header */}
                <header className="bg-gray-200 p-4 border-b border-gray-400">
                    {/* Insert your header content here */}
                    <div>Header Icon</div>
                </header>

                {/* Content */}
                <div className="flex-grow p-4 flex flex-col justify-center">
                    <form className="space-y-4">
                        {/* Form fields */}
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                        />
                        {/* Add other form fields here */}

                        {/* Button */}
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <footer className="bg-gray-200 p-4 border-t border-gray-400">
                    {/* Insert your footer content here */}
                    <div>&copy; 2022 Reserved Copyright</div>
                </footer>
            </div>

            {/* Right-hand side */}
            <div className="md:w-1/2 hidden md:block">
                {/* Insert your image here */}
                <img src="your-image-url" alt="Your Image" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default Responsive
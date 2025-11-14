"use client"
import React from 'react'
import Link from 'next/link'

const projectcard = () => {
    return (
        <>
            <div className="card m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <Link href={"https://github.com/zainarshad16/Password-Manager-App"} target='_blank'>
                    <div className="bg-gray-900 flex flex-col  border hover:border-gray-400 border-gray-600  text-white p-5 rounded-lg hover:bg-gray-950 transition-all duration-300 relative w-full h-full">
                        <img className='invert absolute top-6 right-5' src="link.svg" alt="link" />
                        <div className="flex items-center mb-2 gap-2">
                            <img className='rounded-full' width={23} src="guthub.png" alt="" />
                            <h1 className="text-lg font-bold">Password-Manager-App</h1>
                        </div>
                        <p className="mb-4 text-sm text-gray-300">PassOp is a secure password manager web app built with Vite, React, and Tailwind CSS, with a MongoDB backend to safely store and manage user credentials.</p>
                        <div className='flex items-center gap-4 mb-1'>
                            <div className='flex items-center gap-1'>
                                <div className="dot h-3 w-3 bg-yellow-200 rounded-full">
                                </div>
                                <span> JavaScript</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="star.svg" alt="star" />
                                <span>0</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="branch.svg" alt="star" />
                                <span>1</span>
                            </div>
                        </div>
                        <div className="update text-sm text-gray-500">
                            Updated a month ago
                        </div>
                    </div>
                </Link>

                <Link href={"https://github.com/zainarshad16/Spotify-Frontend-Clone"} target='_blank'>
                    <div className="bg-gray-900 border-gray-600  flex flex-col border hover:border-gray-400 text-white p-5 rounded-lg hover:bg-gray-950 transition-all duration-300 relative w-full h-full">
                        <img className='invert absolute top-6 right-5' src="link.svg" alt="link" />
                        <div className="flex items-center mb-2 gap-2">
                            <img className='rounded-full' width={23} src="guthub.png" alt="" />
                            <h1 className="text-lg font-bold">Spotify-Frontend-Clone</h1>
                        </div>
                        <p className="mb-9 text-sm text-gray-300">A frontend clone of UltraEdit website. It is my first static website clone without JS but fully responsive.</p>
                        <div className='flex items-center gap-4 mb-1'>
                            <div className='flex items-center gap-1'>
                                <div className="dot h-3 w-3 bg-yellow-200 rounded-full">
                                </div>
                                <span> JavaScript</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="star.svg" alt="star" />
                                <span>0</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="branch.svg" alt="star" />
                                <span>1</span>
                            </div>
                        </div>
                        <div className="update text-sm text-gray-500">
                            Updated a month ago
                        </div>
                    </div>
                </Link>

                <Link href={"https://github.com/zainarshad16/iTask-Your-Task-Manager--TodoList-App--React-Project-"} target='_blank'>
                    <div className="bg-gray-900 border-gray-600 border hover:border-gray-400 flex flex-col text-white p-5 rounded-lg hover:bg-gray-950 transition-all duration-300 relative w-full h-full">
                        <img className='invert absolute top-6 right-5' src="link.svg" alt="link" />
                        <div className="flex items-center mb-2 gap-2">
                            <img className='rounded-full' width={23} src="guthub.png" alt="" />
                            <h1 className="text-lg font-bold">iTask-TodoList App</h1>
                        </div>
                        <p className="mb-3 text-sm text-gray-300">A modern and responsive To-Do App built with Vite and React that lets users add, edit, and manage daily tasks efficiently.</p>
                        <div className='flex items-center gap-4 mb-1'>
                            <div className='flex items-center gap-1'>
                                <div className="dot h-3 w-3 bg-yellow-200 rounded-full">
                                </div>
                                <span> JavaScript</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="star.svg" alt="star" />
                                <span>0</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="branch.svg" alt="star" />
                                <span>1</span>
                            </div>
                        </div>
                        <div className="update text-sm text-gray-500">
                            Updated a month ago
                        </div>
                    </div>
                </Link>

                <Link href={"https://github.com/zainarshad16/X.com-twitter-Frontend-Clone--Tailwind-CSS-Project-"} target='_blank'>

                    <div className="bg-gray-900 border-gray-600  border hover:border-gray-400 flex flex-col text-white p-5 rounded-lghover:bg-gray-950 transition-all duration-300 relative w-full h-full">
                        <img className='invert absolute top-6 right-5' src="link.svg" alt="link" />
                        <div className="flex items-center mb-2 gap-2">
                            <img className='rounded-full' width={23} src="guthub.png" alt="" />
                            <h1 className="text-lg font-bold">X.com Frontend-Clone</h1>
                        </div>
                        <p className="mb-4 text-sm text-gray-300">A frontend clone of X.com (Twitter). It is a static frontend including HTML, Tailwind CSS without JS, along with fully responsive.</p>
                        <div className='flex items-center gap-4 mb-1'>
                            <div className='flex items-center gap-1'>
                                <div className="dot h-3 w-3 bg-red-500 rounded-full">
                                </div>
                                <span> HTML</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="star.svg" alt="star" />
                                <span>0</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="branch.svg" alt="star" />
                                <span>1</span>
                            </div>
                        </div>
                        <div className="update text-sm text-gray-500">
                            Updated a month ago
                        </div>
                    </div>
                </Link>

                <Link href={"https://github.com/zainarshad16/Netflix-Frontend-Clone"} target='_blank'>
                    <div className="bg-gray-900 border-gray-600 border hover:border-gray-400 flex flex-col text-white p-5 rounded-lg hover:bg-gray-950 transition-all duration-300 relative w-full h-full">
                        <img className='invert absolute top-6 right-5' src="link.svg" alt="link" />
                        <div className="flex items-center mb-2 gap-2">
                            <img className='rounded-full' width={23} src="guthub.png" alt="" />
                            <h1 className="text-lg font-bold">Netflix-Frontend-Clone</h1>
                        </div>
                        <p className="mb-8 text-sm text-gray-300">It is a Netflix clone. The website only contains static frontend without JS but is fully responsive.</p>
                        <div className='flex items-center gap-4 mb-1'>
                            <div className='flex items-center gap-1'>
                                <div className="dot h-3 w-3 bg-red-500 rounded-full">
                                </div>
                                <span> HTML</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="star.svg" alt="star" />
                                <span>0</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='invert' src="branch.svg" alt="star" />
                                <span>0</span>
                            </div>
                        </div>
                        <div className="update text-sm text-gray-500">
                            Updated a month ago
                        </div>
                    </div>
                </Link>


            </div>


        </>
    )
}

export default projectcard

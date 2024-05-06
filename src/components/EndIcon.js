import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const EndIcon = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 px-4 py-4">
                <div>
                    <div className="flex justify-center items-center h-full">
                        <div className="cursor-pointer justify-start">
                            <h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl '>Eatify</h1><br />
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="w-8 h-8 mr-2 text-blue-500" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="w-8 h-8 mr-2 text-blue-500" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 mr-2 text-blue-500" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="h-64 flex items-center justify-between bg-gray-200 p-4">
                    {/* Image */}
                    <img
                        src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
                        alt="Social Media Icon"
                        className="h-full w-full object-cover"
                    />

                    {/* Links */}
                    <div className="flex space-x-4">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndIcon
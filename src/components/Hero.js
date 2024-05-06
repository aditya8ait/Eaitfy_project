import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero2 from './Hero2';

const Hero = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 px-4 py-4">
                <div class="h-64 flex items-center justify-center bg-gray-200">
                    <div class="flex">
                        <button class="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md">CONTINUE WITH <br></br>USER 1</button>
                        <button class="px-4 py-2 bg-green-500 text-white rounded-md">CONTINUE WITH <br></br>USER 2</button>
                    </div>

                </div>
                <div class="h-64 flex items-center justify-center bg-gray-200">
                    <img class="w-full h-full object-cover" src='https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60' alt="Burger" />
                </div>
            </div>

            <Hero2 />
        </>
    )
}

export default Hero
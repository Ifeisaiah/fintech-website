import React, { useState } from "react";

function FrontPage() {
    const words = ['better', 'best', 'smart'];
    const [keyWord,setKeyWord] = useState(words[0]);

    return(
        <div className="pt-[10vh] min-h-[100vh] " id="frontpage">
           <div className="md:flex md:flex-wrap md:justify-between md:items-center relative">
                <div className="w-[40%] ml-2">
                    <h1 className="title capitalize text-5xl lg:text-6xl tracbg-slate-900 tracking-wide font-semibold">the {keyWord} <br />solution for businesses today</h1>
                    <p className="my-6 leading-loose text-lg tracking-wide">
                        We are bringing banking application for your business to a new level of technology never seen before.
                    </p>
                    <div className="flex justify-between">
                        <button className="capitalize border-2 border-sky-600 px-4 h-14 rounded-full">get started now</button>
                        <div className="flex items-center md:flex md:flex-wrap md:justify-between md:items-center relative relative">
                            <Img src="http://images.unsplash.com/photo-1691175085195-a743156f9b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            zIndex="40" />
                            <Img src="https://images.unsplash.com/photo-1690984806714-f1899508d7ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            zIndex="30" />
                            <Img src="https://images.unsplash.com/photo-1568394824200-457c8c3cb6dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            zIndex="20" />
                            <Img src="https://images.unsplash.com/photo-1690983316606-87b1d720f1cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            zIndex="10" />
                            <button className="bg-sky-600 px-4 h-14 rounded-full z-0 -ml-4">20k active users</button>
                        </div>
                    </div>
                </div>
                <div class="relative font-mono text-black mr-44 -mt-10">
                    <div class="w-60 h-[450px] rounded z-10 -rotate-90 bg-gradient-to-tl from-indigo-100 via-[#007ea7] to-indigo-200 relative shadow-lg">
                        <img src="https://th.bing.com/th/id/R.e2b387f599e16ef6deab1796d01baea4?rik=a7LEeBmyxThhzw&pid=ImgRaw&r=0"
                        class="absolute top-8 right-6 w-10 h-14 object-cover rotate-90" />
                        <div class="absolute top-10 space-y-2">
                            <h2 class="font-bold text-lg px-4">Masterbank</h2>
                            <span class="text-2xl block font-thin"><i class="fa-solid fa-wifi rotate-180"></i></span>
                        </div>
                        <div class="absolute bottom-8">
                            <span class="rotate-90 block my-8">04/25</span>
                            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
                            class="block w-10 h-10 object-cover rotate-90" />
                        </div>
                        <span class="absolute block rotate-90 text-base bottom-32 -right-8">1234 5673 9872 4756 <br/> Isaiah Ifeoluwa</span>

                    </div>
                    <div class="w-60 h-[450px] -mt-[380px] -ml-[65px] hidden lg:block rounded z-10 -rotate-90 bg-gradient-to-tl from-indigo-100 via-[#007ea7] to-indigo-200 relative shadow-lg">
                        <img src="https://th.bing.com/th/id/R.e2b387f599e16ef6deab1796d01baea4?rik=a7LEeBmyxThhzw&pid=ImgRaw&r=0"
                        class="absolute top-8 right-6 w-10 h-14 object-cover rotate-90" />
                        <div class="absolute top-10 space-y-2">
                            <h2 class="font-bold text-lg px-4">Masterbank</h2>
                            <span class="text-2xl block font-thin"><i class="fa-solid fa-wifi rotate-180"></i></span>
                        </div>
                        <div class="absolute bottom-8">
                            <span class="rotate-90 block my-8">04/25</span>
                            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
                            class="block w-10 h-10 object-cover rotate-90" />
                        </div>
                        <span class="absolute block rotate-90 text-base bottom-32 -right-8">1234 5673 9872 4756 <br/> Isaiah Ifeoluwa</span>
                    </div>

                    <div class="w-60 h-[450px] hidden lg:block -mt-[350px] -mr-[60px] rounded z-10 -rotate-90 bg-gradient-to-tl from-indigo-100 via-[#007ea7] to-indigo-200 relative shadow-lg">
                        <img src="https://th.bing.com/th/id/R.e2b387f599e16ef6deab1796d01baea4?rik=a7LEeBmyxThhzw&pid=ImgRaw&r=0"
                        class="absolute top-8 right-6 w-10 h-14 object-cover rotate-90" />
                        <div class="absolute top-10 space-y-2">
                            <h2 class="font-bold text-lg px-4">Masterbank</h2>
                            <span class="text-2xl block font-thin"><i class="fa-solid fa-wifi rotate-180"></i></span>
                        </div>
                        <div class="absolute bottom-8">
                            <span class="rotate-90 block my-8">04/25</span>
                            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
                            class="block w-10 h-10 object-cover rotate-90" />
                        </div>
                        <span class="absolute block rotate-90 text-base bottom-32 -right-8">1234 5673 9872 4756 <br/> Isaiah Ifeoluwa</span>

                    </div>
                </div>

           </div>
           <div class="flex justify-between md:mt-6 md:py-6 lg:-mt-14 lg:2py-6 float-end space-x-6 leading-10 tracking-wide">
            <div>
                <span class="md:text-5xl text-2xl font-semibold">+$500M</span>
                <p class="text-sm text-gray-200">in assets under management</p>
            </div>
            <div>
                <span class="md:text-5xl text-2xl font-semibold">+30M</span>
                <p class="text-sm text-gray-200">in monthly trading volume</p>
            </div>
            <div>
                <span class="md:text-5xl text-2xl font-semibold">+8</span>
                <p class="text-sm text-gray-200">years in fintech</p>
            </div>
        </div> 
        </div>
    )
}

const Img = (props) => {
    return (
        <img src={props.src}
        alt="a test"
        className={`w-12 h-12 rounded-full object-cover -ml-4 ${props.zIndex}`}/>
    )
}

export default FrontPage;

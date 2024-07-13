"use client"
import { motion } from 'framer-motion'
import React from 'react';
import Slider from "react-slick";

import js from '../public/assets/js.svg'
import framer from '../public/assets/framer.svg'
import react from '../public/assets/react1.svg'
import tailwind from '../public/assets/tailwind.svg'
import Next from '../public/assets/next.svg'
import redux from '../public/assets/redux.svg'
import router from '../public/assets/router.svg'
import jquery from '../public/assets/jquery.svg'
import html from '../public/assets/html5.svg'
import css from '../public/assets/css.svg'
import bootstrap from '../public/assets/bootsrap.svg'
import git from '../public/assets/git.svg'
import github from '../public/assets/github1.svg'
import sass from '../public/assets/sass.svg'
import vercel from '../public/assets/vercel.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Skills() {
    console.log(vercel.src);
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        className: 'slick-slider', // Add your custom class name here
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (

        <section id='Skills' className="mx-auto  md:mt-0  max-w-screen-xl p-5 md:p-10 lg:py-28">
            <motion.h2
    whileInView={{

        opacity: 1,
        transition: { duration: 1.3, ease: "easeInOut" },
    }}
    initial={{ opacity: 0 }}
    viewport={{ once: true }} // Ensures animation runs only once
                className='heading'>  My {" "} <span className='text-purple'> Skills</span> </motion.h2>
            <div

                className='mb-6 mx-auto mt-10  '>

                <Slider  {...settings}>
                    <div className='flex   box justify-center relative items-center'>
                        <div className=' p-8 cursor-grab border-white  w-full text-white'>
                            <img src={html.src} className=' z-50 w-96' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Html5</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>Html5</h3>
                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={css.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Css</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>CSS</h3>
                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={js.src} className=' z-50' width={400} alt="js" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>js</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>JavaScript</h3>

                    </div>
                    <div className='flex    box justify-center relative items-center'>
                        <div className='   p-8 cursor-grab border-white  w-full text-white'>
                            <img src={framer.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>FramerMotion</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>FramerMotion</h3>

                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='   p-8 cursor-grab border-white  w-full text-white'>
                            <img src={react.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>React</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>React.js</h3>
                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={tailwind.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Tailwind</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>Tailwind</h3>

                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={Next.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Next.js</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>Next.js</h3>

                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={redux.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Redux</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>Redux</h3>

                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={router.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>React-Router</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>React-Router</h3>

                    </div>

                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={jquery.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>jquery</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>jquery</h3>

                    </div>

                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={bootstrap.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Bootstrap</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>Bootstrap</h3>

                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={git.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Git</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>Git</h3>

                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={github.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Github</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>Github</h3>

                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={sass.src} className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Sass</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>Sass</h3>

                    </div>
                    <div className='flex   box justify-center relative items-center'>
                        <div className='  p-8 cursor-grab border-white  w-full text-white'>
                            <img src={vercel.src}className=' z-50' width={400} alt="" />
                            <p className='text-4xl   text-white font-bold overlay  bg-black absolute  transition-opacity delay-100 duration-400 ease-linear opacity-0 left-1 right-1 top-1 bottom-1 flex justify-center items-center h-full 
                            w-[98%]'>Vercel</p>
                        </div>
                        <h3 className='text-3xl font-md text-center  text-white'>Vercel</h3>

                    </div>
                </Slider>
                <h4 className="flex pt-12 items-center text-2xl justify-center text-white gap-5"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg> Swipe <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></h4>
            </div>

        </section >
    )
}

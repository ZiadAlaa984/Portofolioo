"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

export default function About() {
  return (

        <section id='About' className="mx-auto  md:mt-0  max-w-screen-xl p-5 md:p-10 lg:py-28">
            <motion.h2
             whileInView={{

        opacity: 1,
        transition: { duration: 1.3, ease: "easeInOut" },
    }}
    initial={{ opacity: 0 }}
    viewport={{ once: true }} // Ensures animation runs only once
                className='heading'>    <span className='text-purple'> About {" "}</span>  Me</motion.h2>
          <div className='mb-6 mx-auto mt-10  '>
              <motion.h4
                      whileInView={{

        opacity: 1,
        transition: { duration: 1.3, delay:1 ,ease: "easeInOut" },
    }}
    initial={{ opacity: 0 }}
    viewport={{ once: true }} // Ensures animation runs only once

            transition={{ delay: 1.5, duration: 1 }}
          >
                      <TextGenerateEffect
            words="Hello again! I am happy to see you here. My name is Ziad alaa, 20 years old,I study at the Suez Canal University of Computers and Information, Passionate about creating engaging user experiences, translates designs into functional websites and applications with creativity and expertise. Committed to staying updated with industry trends."
            className="text-center md:tracking-wider mb-4 text-sm font-light md:text-lg lg:text-2xl xl:text-4xl"
          />
</motion.h4>
            </div>

        </section >
  )
}

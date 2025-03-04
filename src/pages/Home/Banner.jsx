/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "motion/react"
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[500px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                    animate={{ y: [40, 70, 40]}}
                    transition={{duration: 8 , repeat: Infinity}}
                        src={team1}
                        className="max-w-sm border-l-4 border-b-4 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl" />
                    <motion.img
                    animate={{ x: [140, 200, 140]}}
                    transition={{duration: 8, delay: 4 , repeat: Infinity}}
                        src={team2}
                        className="max-w-sm border-l-4 border-b-4 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1 
                    animate={{y: -100}}
                    className="text-5xl font-bold">Box Office News!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
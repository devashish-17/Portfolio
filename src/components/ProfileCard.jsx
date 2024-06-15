import React from 'react';
import { photo1 } from "../assets/exportImg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ProfileCard = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 shadow-lg rounded-lg mx-auto my-2 md:my-8">
                <div className="flex-shrink-0 mb-2">
                    <img
                        src={photo1}
                        alt="Adam"
                        className="h-auto rounded-lg object-cover"
                        width={600}
                    />
                </div>

                <div className="flex flex-col justify-between space-y-4 md:space-y-10 items-center md:items-start">
                    <div></div>
                    <div>
                        <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2 font-mono">Hello, I'm !</h1>
                        <div className='flex'>
                            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-serif'> Devashish Revadkar</h1>
                        </div>
                        <p className="text-blue-900 text-lg md:text-xl font-mono font-bold mb-6 hidden md:block">Developing Skills in Data {' '}
                            <TypeAnimation sequence={['Analysis 📊', 1000, 'Science 🔍', 1000, 'Engineering 🛠️', 1000]} className='font-bold' speed={50} repeat={Infinity} />
                        </p>
                        <p className="text-blue-900 text-lg md:text-xl font-mono font-bold mb-6 md:hidden">Developing Skills in Data {' '}
                            <TypeAnimation sequence={['Analysis📊', 1000, 'Science🔍', 1000, 'Engineering', 1000]} className='font-bold' speed={50} repeat={Infinity} />
                        </p>
                    </div>

                    <div></div>
                    
                    <div className='flex space-x-12 text-2xl md:text-3xl items-stretch'>
                        <a href='https://github.com/devashish-17' className='hover:cursor-pointer hover:text-blue-700' target="_blank">
                            <FaGithub />
                        </a>
                        <a href='https://linkedin.com/in/devashish-revadkar-2b5921216' className='hover:cursor-pointer hover:text-blue-700' target="_blank">
                            <FaLinkedin />
                        </a>
                        <a href='https://x.com/devashish_dr17' className='hover:cursor-pointer hover:text-blue-700' target="_blank">
                            <FaXTwitter />
                        </a>                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProfileCard;

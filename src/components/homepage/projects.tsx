'use client';
import React from 'react'
import { DiJava, DiJavascript } from 'react-icons/di'
import config from '../../settings';
const Projects = () => {
    const basePath = (config.Settings.basePath===undefined)?"":config.Settings.basePath;
    const cardData = [
        {
            icon:`${basePath}/api-interface-svgrepo-com.webp`,
            heading: "Java",
            content: "Worked on a Caching layer for salesforce made using Spring Boot"
        },
        {
            icon:`${basePath}/cloud-acceleration-svgrepo-com.webp`,
            heading: "JavaScript",
            content: "Developed and Maintained a wrapper for ElasticSearch for Search and Suggestions"
        },
    ];

    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>
                {cardData.map((data,i) => 
                    <div key={i} className='flex flex-col items-center justify-center mx-auto my-4 p-4 bg-slate-50 rounded-md shadow-md'>
                    <img 
                        className='w-32 md'
                        src={data.icon} alt='Hello WOrld'/>
                    <p className='text-3xl font-sans font-bold text-gray-700'>{data.heading}</p>
                    <p className='text-center text-lg py-2 font-sans'>{data.content}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default Projects

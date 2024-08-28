import { blog_data } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Blogcard({image, title, description, category}) {
    return (
        // <div className='flex justify-center items-center min-h-screen bg-yellow-400 font-FigTree text-base'>
            <div className='flex flex-col justify-center bg-white p-5 rounded-xl border-2 border-black h-full max-lg:w-[375px] lg:w-[384px] shadow-[10px_10px_0px_1px_rgba(0,0,0,1)]'>
                <Image src={image} width={400} height={400} alt='illustration'
                    className='rounded-tl-xl rounded-tr-xl  ' />
                <div className='mt-6'>
                    <button className='bg-yellow-400 px-4 py-2 rounded-lg font-extrabold cursor-default'>{category}</button>
                    <p className='mt-4 font-bold'>Published 21 Dec 2023</p>
                    <h2 className='font-extrabold text-[20px] mt-4 mb-4 hover:text-yellow-400 hover:cursor-pointer'>{title}</h2>
                    <p className='text-Grey'>
                        {description}
                    </p>
                    <div className='mt-4 flex justify-start items-center gap-4'>
                        <Image src={blog_data[0].author_img} alt='avatar'
                            className='w-10' />
                        <p className='font-extrabold text-black'>{blog_data[0].author}</p>
                    </div>
                </div>
            </div>
        // </div>
    )
}

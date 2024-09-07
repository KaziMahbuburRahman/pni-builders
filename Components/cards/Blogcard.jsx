import { blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'


export default function Blogcard({ image, title, description, category, id,  aspectRatio = '16:9' }) {

    return (
        // <div className='flex justify-center items-center min-h-screen bg-yellow-400 font-FigTree text-base'>
        <div className='h-full max-w-[90%]max-lg:w-[375px] lg:w-[384px] flex flex-col justify-center  bg-white p-5 rounded-xl border-2 border-black  shadow-[10px_10px_0px_1px_rgba(0,0,0,1)]'>
            <Link href={`blogs/${id}`}>
                <Image src={image} 
                width={400} height={200}

                alt='illustration'
                
                    className='rounded-tl-xl rounded-tr-xl max-h-[200px] ' />
            </Link>

            <div className='mt-6'>
                <button className='bg-yellow-400 px-4 py-2 rounded-lg font-extrabold cursor-default'>{category}</button>
                <p className='mt-4 font-bold'>Published 21 Dec 2023</p>
                <Link href={`blogs/${id}`}>
                <h2 className='font-extrabold text-[20px] mt-4 mb-4 hover:text-yellow-400 hover:cursor-pointer'>{title}</h2>
                </Link>
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

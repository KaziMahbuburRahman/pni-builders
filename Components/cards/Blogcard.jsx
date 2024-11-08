import { blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import DOMPurify from 'dompurify';

export default function Blogcard({ image, title, description, category, id,  aspectRatio = '16:9' }) {
    // Helper function to limit text length and append ellipsis
      // Helper function to limit text length, replace non-breaking spaces, and append ellipsis
      const truncateDescription = (text, maxLength) => {
        // Sanitize and remove all HTML tags
        let cleanText = DOMPurify.sanitize(text, { ALLOWED_TAGS: [] });
        
        // Replace &nbsp; with spaces and handle other HTML entities if necessary
        cleanText = cleanText.replace(/&nbsp;/g, ' ');

        // Ensure newlines or multiple spaces are correctly rendered
        cleanText = cleanText.replace(/\s+/g, ' ').trim();

        // Truncate the text to the specified length
        return cleanText.length > maxLength
            ? cleanText.substring(0, maxLength) + '...'
            : cleanText;
    };
    return (
        // <div className='flex justify-center items-center min-h-screen bg-[#c01d2e] font-FigTree text-base'>
        <div className='h-full max-w-[90%]max-lg:w-[375px] lg:w-[384px] flex flex-col justify-center  bg-white p-5 rounded-xl border-2 border-black  shadow-[10px_10px_0px_1px_rgba(0,0,0,1)]'>
            <Link href={`blog/${id}`}>
                <Image src={image} 
                width={400} height={200}

                alt='illustration'
                
                    className='rounded-tl-xl rounded-tr-xl max-h-[200px] ' />
            </Link>

            <div className='mt-6'>
                <button className='bg-[#c01d2e] px-4 py-2 rounded-lg font-extrabold cursor-default'>{category}</button>
                <p className='mt-4 font-bold'>Published 21 Dec 2023</p>
                <Link href={`blog/${id}`}>
                <h2 className='font-extrabold text-[20px] mt-4 mb-4 hover:text-yellow-400 hover:cursor-pointer'>{title}</h2>
                </Link>
                <div className='text-Grey'>
                    {/* Truncate description to 100 characters */}
                    {truncateDescription(description, 100)}
                </div>
                
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

import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'dompurify';

export default function BlogPage({ data }) {
    const { title, description, image, authorImg, category } = data;

    return (
        <div className="w-full h-full bg-white dark:bg-gray-800">
            <div className="w-full mx-auto py-10 bg-white dark:bg-gray-800">
                {/* Breadcrumbs */}
                <div className="w-[94%] mx-auto flex gap-1 items-center text-gray-500 sm:text-[12px] xs:text-[10px] font-semibold dark:text-gray-400">
                    <Link href={"/blog"}>
                        <div>Blog</div>
                    </Link>
                    <div className="font-semibold text-md">{'>'}</div>
                    <div>{title}</div>
                </div>

                {/* Thumbnail Section */}
                <section
                    className="w-[92%] mx-auto bg-cover bg-center flex items-center justify-center py-10 rounded-lg"
                    style={{ backgroundImage: `url('https://trickbd.com/wp-content/themes/trickbd-theme/images/author_head_bg.png')` }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between w-full lg:w-[80%] md:w-[90%] sm:w-[96%] gap-6">
                        {/* Blog Image */}
                        <div className="relative">
                            <Image
                                src={image}
                                alt={title}
                                className="main_img"
                                width={350}
                                height={350}
                            />
                            {/* <Image
                                src="https://trickbd.com/wp-content/themes/trickbd-theme/images/folding.png"
                                alt="Fold"
                                className="fold absolute top-0 left-0"
                                width={100}
                                height={100}
                            /> */}
                        </div>

                        {/* Blog Details */}
                        <div className="content flex justify-center md:justify-start md:items-start items-center flex-col text-center md:text-left">
                        <button className='bg-red-400 px-4 py-2 rounded-lg font-extrabold cursor-default w-[100px]'>{category}</button>

                            <h1 className="text-2xl font-bold my-2">
                                <Link href="#single_post_content">{title}</Link>
                            </h1>

                            {/* Author Section (Responsive) */}
                            <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-4 items-center justify-center pt-4">
                                <div className="flex gap-2 items-center">
                                    <Image
                                        src={authorImg}
                                        alt="Blogger Profile"
                                        className="md:w-[2.2rem] md:h-[2.2rem] xs:w-[2rem] xs:h-[2rem] rounded-full"
                                        width={35}
                                        height={35}
                                    />
                                    <h2 className="text-sm font-semibold dark:text-white">Samuel Abera</h2>
                                </div>
                                <div className="dark:text-gray-500 hidden xs:block">|</div>

                                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">MAY 20, 2024</h3>

                                <div className="dark:text-gray-500 hidden xs:block">|</div>
                                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">5 MIN READ</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Content */}
                {/* dark:bg-gray-800 */}
                <div className="py-6 bg-white px-8 md:px-0">
                    <div className="md:w-[80%] xs:w-[90%] mx-auto pt-4 editorJs">
                        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></span>

                        {/* Share on Social Media */}
                        <p className='text-black font font-semibold my-4'>Share this article on social media</p>
                        <div className='flex gap-2'>
                            <Image src={assets.facebook_icon} alt="Facebook" />
                            <Image src={assets.twitter_icon} alt="Twitter" />
                            <Image src={assets.googleplus_icon} alt="Google Plus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

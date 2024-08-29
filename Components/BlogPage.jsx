import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage({ data }) {
    console.log(data.title)
    return (
        <div className="w-full h-full bg-white dark:bg-gray-800">
            <div className="w-full mx-auto py-10 bg-white dark:bg-gray-800">
                {/* Breadcrumbs */}
                <div className="w-[94%] mx-auto flex gap-1 items-center text-gray-500 sm:text-[12px] xs:text-[10px] font-semibold dark:text-gray-400">
                    <Link href={"/"}><div>Home</div></Link>
                    {/* <div className="font-semibold text-md">{'>'}</div>
                    <div>Framework</div> */}
                    <div className="font-semibold text-md">{'>'}</div>
                    <div>{data.title}</div>
                </div>

                {/* Title */}
                <h1 className="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-4 pt-8 dark:text-white">
                    {data.title}
                </h1>

                {/* Blog Cover */}
                <Image
                    src={data.image}
                    alt="Blog Cover"
                    className="xl:w-[80%] xs:w-[96%] mx-auto lg:h-[560px] md:h-[480px] rounded-lg"
                    width={700}
                    height={560}
                />

                {/* Blog Info */}
                <div className="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-4">
                    <div className="flex gap-2 items-center">
                        <Image
                            src={blog_data[0].author_img}
                            alt="Blogger Profile"
                            className="md:w-[2.2rem] md:h-[2.2rem] xs:w-[2rem] xs:h-[2rem] rounded-full"
                            width={35}
                            height={35}
                        />
                        <h2 className="text-sm font-semibold dark:text-white">Samuel Abera</h2>
                    </div>
                    <div className="dark:text-gray-500">|</div>

                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">MAY 20, 2024</h3>

                    <div className="dark:text-gray-500">|</div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">5 MIN READ</h4>
                </div>

                {/* Blog Content */}
                <div className="py-6 bg-white dark:bg-gray-800">
                    <div className="md:w-[80%] xs:w-[90%] mx-auto pt-4">
                        <p className="mx-auto text-md dark:text-gray-300">
                            In the world of CSS frameworks, there are plenty of contenders vying for your attention. But for me,
                            Tailwind CSS stands out from the pack. Here is why Tailwind CSS is my go-to for building modern
                            websites:
                        </p>

                        <h1 className="font-semibold text-lg mt-4 dark:text-white">1. Utility-First Philosophy</h1>
                        <p className="mt-2 text-md dark:text-gray-300">
                            Tailwind ditches bulky pre-built components and instead offers a massive toolbox of utility classes.
                            These classes, like "text-red-500" or "flex justify-center," target specific styles (color, layout)
                            and can be easily combined to achieve your desired look. This gives you ultimate control and keeps
                            your CSS nice and lean.
                        </p>

                        <h1 className="font-semibold text-lg mt-4 dark:text-white">2. Rapid Prototyping</h1>
                        <p className="mt-2 text-md dark:text-gray-300">
                            Need to get a design off the ground quickly? Tailwinds utility classes make it a breeze. Forget
                            digging through stylesheets - just apply classes directly in your HTML. This lets you iterate on
                            designs faster and see the visual changes instantly.
                        </p>

                        <h1 className="font-semibold text-lg mt-4 dark:text-white">3. Responsive Out of the Box</h1>
                        <p className="mt-2 text-md dark:text-gray-300">
                            Tailwinds utility classes are inherently responsive, meaning they adapt to different screen sizes.
                            No need for complex media queries - just add a responsive variant to your class (e.g. "text-lg" for
                            large screens). This saves you time and ensures your website looks sharp on any device.
                        </p>

                        <h1 className="font-semibold text-lg mt-4 dark:text-white">4. Customization King</h1>
                        <p className="mt-2 text-md dark:text-gray-300">
                            Don't be fooled by Tailwind's utility-first approach. You can still create custom themes and
                            components. Need a specific button style? No problem, define it with custom CSS and reuse it
                            throughout your project. Tailwind integrates seamlessly with your existing workflow.
                        </p>

                        <h1 className="font-semibold text-lg mt-4 dark:text-white">5. Framework Agnostic</h1>
                        <p className="mt-2 text-md dark:text-gray-300">
                            Tailwind plays well with others. Whether you're using React, Vue, Angular, or plain JavaScript,
                            Tailwind integrates without a hitch. This flexibility makes it a valuable asset for any project
                            regardless of your preferred framework.
                        </p>

                        <h1 className="font-semibold text-lg mt-4 dark:text-white">Conclusion</h1>
                        <p className="mt-2 text-md dark:text-gray-300">
                            Tailwind CSS offers a unique approach to styling that prioritizes speed, customization, and
                            responsiveness. It's a powerful tool that can streamline your workflow and help you build beautiful,
                            modern websites. So, if you're looking for a CSS framework that empowers you to create with freedom,
                            give Tailwind CSS a try!
                        </p>
                        <p className='text-black font font-semibold my-4'>Share this article on social media</p>
                        <div className='flex'>
                            <Image src={assets.facebook_icon} />
                            <Image src={assets.twitter_icon} />
                            <Image src={assets.googleplus_icon} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

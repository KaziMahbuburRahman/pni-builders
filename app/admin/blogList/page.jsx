"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";


function Index() {
    const [show, setShow] = useState(null);
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog')
        setBlogs(response.data.blogs)
        console.log(response.data.blogs)
    }
    useEffect(()=>{
        fetchBlogs();
    },[])
    return (
        <>
            
    <div className="overflow-x-auto container editor mx-auto flex flex-col text-gray-800 max-w-4xl">
    <table className="lg:min-w-[95%] max-w-[95%] shadow-md border mx-auto border-gray-100 m-5">
        <thead>
            <tr className="bg-[#0095FF] text-white">
                <th className="py-4 px-6 text-lg text-left border-b">Blog Title</th>
                <th className="py-4 px-6 text-lg text-left border-b">Author</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
        </thead>
        <tbody>
            
           {
            
            blogs.map(blog=> (<tr className="hover:bg-gray-50 border-b transition duration-300">
               
                <td className="py-4 px-6 border-b text-xl font-medium">{blog.title}</td>
                <td className="py-4 px-6 border-b text-lg font-medium">{blog.author}</td>
                <td className="py-4 px-6 border-b text-end">
                    <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                </td>
            </tr>)
            )
           }
            {/* <tr className="hover:bg-gray-50 border-b transition duration-300">
                <td className="py-4 px-4 flex justify-start">
                    <img src="https://source.unsplash.com/64x64/?phone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">Samsung s22</td>
                <td className="py-4 px-6 border-b text-lg font-medium">$599.99</td>
                <td className="py-4 px-6 border-b text-end">
                    <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                </td>
            </tr> */}
            
        </tbody>
    </table>
</div>

  
        </>
    );
}

export default Index;

"use client"
import { blog_data } from '@/Assets/assets'
import BlogPage from '@/Components/BlogPage'
import React, { useEffect, useState } from 'react'

export default function page({ params }) {
    const [data, setData] = useState(null);
    const fetchBlogData = () => {
        console.log(params.id)


        for (let i = 0; i < blog_data.length; i++) {

            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i])
                // console.log(blog_data[i])
                break;
            }

        }
    }

    useEffect(() => {
        fetchBlogData()
    }, [])
    return (
        <div>{params.id}
            {
                data ? <BlogPage data={data} /> : ""
            }
        </div>

    )
}

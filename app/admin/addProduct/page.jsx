"use client"
import BasicSelect from "@/Components/AdminComponents/BasicSelect"
import Dropfile from "@/Components/AdminComponents/Dropfile"
import NewPost from "@/Components/AdminComponents/NewPost"
import axios from "axios"
import Image from "next/image"
import React, { useState } from "react"
import { toast } from "react-toastify"

export default function page() {
  const [image, setImage] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => {
      const newData = { ...data, [name]: value }
      console.log(newData)
      return newData;
    })
    console.log(data);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('author', data.author)
    formData.append('authorImg', data.authorImg)
    formData.append('image', image)
    const response = await axios.post('/api/blog', formData);
    if (response.data.success) {
      toast.success(response.data.msg)
      // reset the form after the success toast
      setImage(false)
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png"
      })
    }
    else {
      toast.error("Error", error);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="container editor mx-auto  flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      {/* <Dropfile /> */}
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      {/*<!-- Component: Dropzone file input --> */}
      <div
        className="relative my-6 container editor mx-auto  flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg">
        <input
          onChange={(e) => setImage(e.target.files[0])}
          // onClick={console.log("Hello world")}
          id="image"
          // name="image"
          type="file"
          hidden
          required

        />
        <label
          htmlFor="image"
          className="relative flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-slate-300 px-3 py-6 text-center text-sm font-medium transition-colors"
        >
          {!image ? (<span className="inline-flex h-12 items-center justify-center self-center rounded-full bg-slate-100/70 px-3 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="File input icon"
              role="graphics-symbol"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
              />
            </svg>
          </span>) : <Image className='mt-4' src={URL.createObjectURL(image)} alt='thumbnail' width={500} height={500} />}
          {!image ? <span className="text-slate-500">
            Drag & drop or
            <span className="text-emerald-500"> upload a file</span>
          </span> : ""}
        </label>
      </div>
      {/* <NewPost /> */}
      <div>

        <style>
          {`
          body {background:white !important;}
        `}
        </style>
        <div className="editor mx-auto  flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <input
            onChange={onChangeHandler}
            value={data.title}
            name="title"
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Title"
            type="text"
          />
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Describe everything about this post here"
          ></textarea>

          {/* icons */}
          <div className="icons flex text-gray-500 m-2">
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">
              0/300
            </div>
          </div>

          {/* <BasicSelect /> */}
          <div className="my-6 container editor mx-auto flex flex-col text-gray-800">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select an option
            </label>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
              id="countries"

              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >

              <option value="Startup">Startup</option>
              <option value="News">News</option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>

          {/* buttons */}
          <div className="buttons flex">
            <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
              Cancel
            </div>
            <button type="submit" className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* <button type="submit" className="mt-6 container editor mx-auto  flex-col  border-gray-300 p-4 shadow-lg max-w-2xl inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Create Post</span>
      </button> */}
    </form>
  )
}

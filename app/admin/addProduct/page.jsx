import BasicSelect from "@/Components/AdminComponents/BasicSelect"
import Dropfile from "@/Components/AdminComponents/Dropfile"
import NewPost from "@/Components/AdminComponents/NewPost"
import React from "react"

export default function page() {
  return (
    <div className="container editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      <Dropfile />
      <NewPost />
      <BasicSelect />
      <button className="mt-6 container editor mx-auto w-10/12 flex-col  border-gray-300 p-4 shadow-lg max-w-2xl inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Create Post</span>
      </button>
    </div>
  )
}

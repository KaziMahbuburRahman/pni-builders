"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
// TinyMCE Editor
import { Editor as TinyMCEEditor } from "@tinymce/tinymce-react";
import { plugins } from "@/Components/Editor/constants/plugins";
import { toolbars } from "@/Components/Editor/constants/toolbars";

export default function Page() {
  const [loading, setLoading] = useState(true); // Loading state for the editor
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "", // will be updated by the editor content
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png",
  });

  // To capture editor content
  const onEditorInputChange = (newValue, editor) => {
    setData((prev) => ({ ...prev, description: newValue }));
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description); // use editor content
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        // Reset form after success
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Alex Bennett",
          authorImg: "/author_img.png",
        });
      } else {
        toast.error("Error submitting the post");
      }
    } catch (error) {
      toast.error("Error submitting the post: " + error.message);
    }
  };

  const API_KEY = process.env.NEXT_PUBLIC_TINY_MCE_API_KEY;

  return (
    <form
      onSubmit={onSubmitHandler}
      className="container editor mx-auto flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
    >
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      {/* Dropzone for Image Upload */}
      <div className="relative my-6 container editor mx-auto flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg">
        <input
          onChange={(e) => setImage(e.target.files[0])}
          id="image"
          type="file"
          hidden
          required
        />
        <label
          htmlFor="image"
          className="relative flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-slate-300 px-3 py-6 text-center text-sm font-medium transition-colorsx"
        >
          {!image ? (
            <span className="inline-flex h-12 items-center justify-center self-center rounded-full bg-slate-100/70 px-3 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
            </span>
          ) : (
            <Image
              className="mt-4"
              src={URL.createObjectURL(image)}
              alt="thumbnail"
              width={500}
              height={500}
            />
          )}
          {!image ? (
            <span className="text-slate-500">
              Drag & drop or{" "}
              <span className="text-emerald-500">upload a file</span>
            </span>
          ) : (
            ""
          )}
        </label>
      </div>

      <div className="editor flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        {/* Title Input */}
        <input
          onChange={onChangeHandler}
          value={data.title}
          name="title"
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
        />
        {/* Loading state for TinyMCE */}
        {loading && (
          <div className="text-center text-gray-500 mb-4">
            Loading editor...
          </div>
        )}

        {/* TinyMCE Editor */}
        <TinyMCEEditor
          onEditorChange={onEditorInputChange}
          value={data.description}
          apiKey={API_KEY}
          init={{
            height: 300,
            plugins: plugins,
            toolbar: toolbars,
            menubar: false, // Customize to match your old editor
            branding: false,
          }}
          onInit={() => setLoading(false)}
        />

        {/* Category Selection */}
        <div className="my-6">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            name="category"
            onChange={onChangeHandler}
            value={data.category}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="Startup">Startup</option>
            <option value="News">News</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="buttons flex">
          <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
            Cancel
          </div>
          <button
            type="submit"
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

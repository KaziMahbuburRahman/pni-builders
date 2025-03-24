"use client";
import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import Blogcard from "./cards/Blogcard";
import axios from "axios";
import Tab from "./Tab";
import { TabsProvider } from "./TabsProvider";
import { TabsBtn } from "./TabsBtn";

export default function BlogList() {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="border bg-white/10 dark:bg-black/40 backdrop-blur-sm rounded-md p-4 relative my-10">
        <TabsProvider defaultValue={menu}>
          <div className="flex flex-wrap justify-center items-center mt-2">
            <div className="flex flex-wrap justify-center items-center w-fit dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-md border relative">
              {categories.map((category) => (
                <TabsBtn key={category} value={category} setMenu={setMenu}>
                  <div
                    onMouseEnter={() => setMenu(category)}
                    className={`relative z-10 px-4 py-1 transition-colorsx duration-300 ${
                      menu === category
                        ? "text-white rounded-sm"
                        : "hover:bg-gray-300"
                    }`}
                  >
                    {category}
                  </div>
                </TabsBtn>
              ))}
            </div>
          </div>
        </TabsProvider>
      </div>

      {/* Blog List */}
      <div className="container px-5 py-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => (
            <Blogcard
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              id={item._id}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}

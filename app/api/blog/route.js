const { NextResponse } = require("next/server")
import { ConnectDB } from '@/lib/config/db';
import BlogModel from '@/lib/models/BlogModel';
import { writeFile } from 'fs/promises'
const fs = require('fs')
const LoadDB = async () => {
    await ConnectDB();
}
LoadDB();
//API Endpoint to get all blogs
export async function GET(request) {
    // console.log("blog get hit")
    //check if any id available then search with that id
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId)
        return NextResponse.json({ blog });
    }
    else {
        const blogs = await BlogModel.find({})
        return NextResponse.json({ blogs })
    }

}
//API Endpoint for uploading blogs
export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    const imageName = image.name.replace(/\s+/g, '_');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timestamp}_${imageName}`
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${imageName}`;
    // console.log(imgUrl)

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: imgUrl,
        authorImg: `${formData.get('authorImg')}`,
    }
    await BlogModel.create(blogData);
    console.log("Blod saved")
    return NextResponse.json({ success: true, msg: "Blog Added" });
}

//Creating API Endpoint to delete Blog

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public/${blog.image}`,(err)=>{
        if (err) {
            console.error('Error deleting file:', err);
          } else {
            console.log('File successfully deleted');
          }
    });
    
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"})
}
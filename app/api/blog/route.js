const { NextResponse } = require("next/server")
import { ConnectDB } from '@/lib/config/db';
import BlogModel from '@/lib/models/BlogModel';
import { writeFile } from 'fs/promises'

const LoadDB = async () => {
    await ConnectDB();
}
LoadDB();

export async function GET(request) {
    console.log("blog get hit")
    return NextResponse.json({ msg: "API Working" })
}

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
import { updateProduct } from "api/updateAPI";
import fs from "fs";
import path from "node:path";
import { v4 as uuiv4 } from 'uuid';

export async function POST(request) {
  console.log("req");
  //const req = fileUpload.array("files");
   const formData = await request.formData();
  let recordData = formData.get("data");
  const images = formData.getAll("files") as File[];

  //console.log("images",typeof images, images);
  const savePath = path.join( "public","uploads", "images");
  let imageArray=[]
  //for (let i=0;i<images.length;i++ ){
  for (let image of images) {
    try {
      const buffer = await image.arrayBuffer();
      await fs.writeFileSync(path.join(savePath, image.name),Buffer.from(buffer, 'base64'))
      imageArray.push( path.join(savePath, image.name))
      console.log(typeof image,typeof images,"of",image.name)
    }catch (error) {
      console.log(error);
    } 
  }
    
    recordData={recordData, imgUrl:JSON.stringify(imageArray)}
    console.log("recordData",recordData);
    try {
      await updateProduct(recordData);
    } catch (error) {
      console.log(error);
    } 
 
 
  
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

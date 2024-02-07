import { updateProduct } from "api/updateAPI";
import fs from "fs";
import path from "node:path";
import { v4 as uuiv4 } from 'uuid';

export async function POST(request) {
  console.log("req");
  //const req = fileUpload.array("files");
   const formData = await request.formData();
  let recordData = JSON.parse((formData.get("data"))); // formData.get("data");
  console.log(recordData,"recordData");
  const images = formData.getAll("files") as File[];

  //console.log("images",typeof images, images);
  //path to save image in public/uploads/images
  const savePath = path.join( "public","uploads", "images");
  console.log("savePath", savePath);
  let imageUrlArray=(recordData.imgurl)
  console.log("imageUrlArray", imageUrlArray);
  //for (let i=0;i<images.length;i++ ){
  for (let image of images) {
    try {
      const buffer = await image.arrayBuffer();
      await fs.writeFileSync(path.join(savePath, image.name),Buffer.from(buffer, 'base64'))
      //add new file path /uploads/images to be able to show on front
      imageUrlArray.push( path.join("/", "uploads", "images", image.name)) 
      
      console.log(typeof image,typeof images,"of",image.name)
    }catch (error) {
      console.log("try Image writting", error);
    } 
  }
    
    recordData={...recordData, imgurl:JSON.stringify(imageUrlArray)}

    console.log("recordData-save",recordData);
    try {
      await updateProduct(recordData);
    } catch (error) {
      console.log("updat record fail",error);
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

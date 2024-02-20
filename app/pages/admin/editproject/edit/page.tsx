"use client";
import { useEffect, useState } from "react";
import { useGetProjectsSWR } from "../../api/useSWRAPI";
import { parseProducts } from "@/utils/utils";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Page ({searchParams}){
    const [inputState, setInputState]=useState({id:"",subtitle:"", title:"",imgurl:[""],description:""} )
    const [files, setFiles]=useState([])
    const {id}=searchParams
    const handleInputChange=(field, value)=>{
        const updateData={...inputState, [field]:value}
        setInputState(updateData)
    }
    const handleImageUpload=(imgFiles)=>{
        console.log(imgFiles[0], "imgs",files)
        
        for (let i=0;i<imgFiles.length;i++){
            const fileReader = new FileReader ()
            let updateUrl= inputState.imgurl
            fileReader.onload=()=>{
                updateUrl.push( fileReader.result)
                setInputState(  {...inputState,imgurl:updateUrl})    
           
           }
            fileReader.readAsDataURL(imgFiles[i])
        }
        let updateFiles = files
        updateFiles.push(imgFiles[0])
        setFiles( updateFiles)
    }
    const handleSave= async()=>{
        let formData = new FormData ()
        formData.append("data", JSON.stringify(inputState))
       // console.log("files", files)
        formData.append("files",files) //the files is a array of files.
        const res= await fetch("api/")

    }
    const handleCancel=()=>{
        setInputState(parseProducts(data.res)[0])
    }
    //console.log (id)
    const {data, isLoading, error}=useGetProjectsSWR(`../api/projects?id=${id}`)
    useEffect(()=>{
        if (data && data.res) {
            console.log (data.res,"data.res")
            const uData= parseProducts(data.res)[0]
            setInputState(uData)} },[data])
// "api/projects?id=${id}"-->http://localhost:3000/pages/admin/editproject/api/projects?id=2
//`../api/projects?id=${id}`--> http://localhost:3000/pages/admin/api/projects?id=2
    //useEffect(()=>{},[])    
if (isLoading) return <div>Loading</div>
    //console.log(inputState,data.res[0])
   return (
        <div className="w-5/6 m-auto mt-12">
            <label htmlFor="">Title</label>
           <div> <input className="w-full border-sky-500 border-2 " type="text" 
           
           value={inputState.title} onChange={(e)=> handleInputChange("title",e.target.value)} /> </div>
            <label htmlFor="">Images</label>
           <div ><input className="w-auto border-sky-500 border-2" type="file" onChange={(e)=>handleImageUpload(e.target.files)} /></div>
           <div className="flex justify-center">
            {inputState.imgurl.map(i=> <Image key={i} src={i} alt="img" width={200}height={200}/>)}
           </div>
           <label htmlFor="">Deascription</label>
           <div><textarea className="w-full border-sky-500 border-2" name="" id="" cols="30" rows="10" value={inputState.description} onChange={(e)=>handleInputChange("description", e.target.value)}></textarea></div>
            <div><Button onClick={handleSave}>Save</Button> <Button onClick={handleCancel}>Cancel</Button> </div>
           </div>
)}
      

/*updateUrl.push( fileReader.result)
export default function Page({ searchParams }) {
  const [inputState, setInputState] = useState({
    id: "",
    subtitle: "",
    title: "",
    imgurl: [""],
    description: "",
  });
  const [files, setFiles] = useState([]);
  const { id } = searchParams;
  const handleInputChange = (field, value) => {
    const updateData = { ...inputState, [field]: value };
    setInputState(updateData);
  };
  const handleImageUpload = (imgFiles) => {
    console.log(imgFiles, "imgs", imgFiles.length);

    for (let i = 0; i < imgFiles.length; i++) {
      const fileReader = new FileReader();
      let updateUrl = inputState.imgurl;
      fileReader.onload = () => {
        updateUrl.push(fileReader.result);
        setInputState({ ...inputState, imgurl: updateUrl });
        /*updateUrl.push( fileReader.result)
           setInputState({...inputState, imgurl:updateUrl})};




      fileReader.readAsDataURL(imgFiles[i]);
    }
    setFiles(imgFiles);
  };
  const handleSave = () => {
    const formData = new FormData();
    
    await fetch("../api/projects", {
     method : "POST",
     body :   });
  };
  const handleCancel = () => {
    setInputState(parseProducts(data.res)[0]);
  };
  //console.log (id)
  const { data, isLoading, error } = useGetProjectsSWR(
    `../api/projects?id=${id}`,
  );
  useEffect(() => {
    if (data && data.res) {
      console.log(data.res);
      const uData = parseProducts(data.res)[0];
      setInputState(uData);
    }
  }, [data]);
  // "api/projects?id=${id}"-->http://localhost:3000/pages/admin/editproject/api/projects?id=2
  //`../api/projects?id=${id}`--> http://localhost:3000/pages/admin/api/projects?id=2
  //useEffect(()=>{},[])
  if (isLoading) return <div>Loading</div>;
  //console.log(inputState,data.res[0])
  return (
    <div className="w-5/6 m-auto mt-12">
      <label htmlFor="">Title</label>
      <div>
        {" "}
        <input
          className="w-full border-sky-500 border-2 "
          type="text"
          value={inputState.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />{" "}
      </div>
      <label htmlFor="">Images</label>
      <div>
        <input
          className="w-auto border-sky-500 border-2"
          type="file"
          onChange={(e) => handleImageUpload(e.target.files)}
        />
      </div>
      <div className="flex justify-center">
        {inputState.imgurl.map((i) => (
          <Image key={i} src={i} alt="img" width={200} height={200} />
        ))}
      </div>
      <label htmlFor="">Deascription</label>
      <div>
        <textarea
          className="w-full border-sky-500 border-2"
          name=""
          id=""
          cols="30"
          rows="10"
          value={inputState.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        ></textarea>
      </div>
      <div>
        <Button onClick={handleSave}>Save</Button>{" "}
        <Button onClick={handleCancel}>Cancel</Button>{" "}
      </div>
    </div>
  );
}
*/
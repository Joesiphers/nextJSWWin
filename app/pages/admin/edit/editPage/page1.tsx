export default function EditPage({ searchParams }) {
 retrun (<div>Loading</div> )
}
/*
import { useState,useEffect} from "react"
import useSWR from "swr";
import Image from "next/image";
c
const parseProducts = (productsArray) => {
  let productsDataObj = (productsArray);
  //console.log(productsArray)
  let updateData = [];
  for (let i of productsDataObj) {
    updateData.push({ ...i, imgurl: JSON.parse(i.imgurl) });
    }
    return updateData
  }
const tdcss = "border-solid border-2 border-indigo-600";
const EditPage=({ searchParams }) => {
  const { id } = searchParams;
  console.log(searchParams, id, "searching")

  const [productsData, setproductsData] = useState([]);
 const [prevproductsData, setPrevproductsData] = useState(null);
 const [files, setFiles] = useState<
   { id: number; file: File | null; url: string | ArrayBuffer | null }[] >([]);

const fetcher = (...args) => fetch(...args).then((res) => res.json());
 const { data, isLoading, error } = useSWR(`api/products?id=${id}`, fetcher);
 //console.log(data, isLoading, error)
 useEffect(()=>{
  if(data && data.res){ setproductsData (parseProducts(data.res))}
},[data])
if (isLoading) return <div>Loading</div>
if (error ) return <div>Error</div>

  const handleEdit = (id) => {
    setEditableRowId(id);
    setPrevproductsData(productsData);
  };
  const handleCancel = () => {
    setproductsData(prevproductsData);
    setEditableRowId(null);
    setFiles([]);
  };

  const handleSave = async (id) => {
    const toSaveData = productsData.filter((item) => item.id === id);
    const toAddFiles = Object.values(files).filter((item) => item.id === id);
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(toSaveData[0]));
    for (let i = 0; i < toAddFiles.length; i++) {
      formdata.append("files", toAddFiles[i].file);
    }
    // formdata.append("files", toAddFiles);
    console.log("tosave", toSaveData, toAddFiles);
    const response = await fetch(`api/products`, {
      method: "POST",
      body: formdata,
    }).then((res) => res.text());
    console.log("response", JSON.stringify(response));
    setEditableRowId(null);
    // Implement logic to save changes to the backend or update state as needed
  };

  const handleInputChange = (id, field, value) => {
    const updatedData = productsData.map((item) =>
      item.id === id ? { ...item, [field]: value } : item,
    );
    setproductsData(updatedData);
  };
  const handleImageUpload = (e, id) => {
    const choosedFiles = e.target.files;
    console.log("files seee5", e);
    for (let i = 0; i < choosedFiles.length; i++) {
      const fileReader = new FileReader();
      const file = choosedFiles[i];
      fileReader.onload = () => {
        setFiles((prevFiles) => [
          ...prevFiles,
          { id, file, url: fileReader.result },
        ]);
      };
      fileReader.readAsDataURL(file);
    }
    console.log("files", files);
  };
  const handleDeleteImage = (id, url) => {
    const updateFiles = files.filter((item) => {
      return item.url !== url;
    });
    //delete the just upload but not saved images
    setFiles(updateFiles);
    //delete the existing images
    let deleteImageUrlInProductsData = [];
    const productsArray = productsData;
    for (let p of productsArray) {
      if (p.id === id) {
        //p.imgurl = p.imgurl.filter((u) => u !== url);
        let newimgurl = p.imgurl.filter((u) => u !== url);
        const newdata = { ...p, imgurl: newimgurl };
        console.log("i.imgurl", newdata, "productsData", productsData);
        deleteImageUrlInProductsData.push(newdata);
      } else {
        deleteImageUrlInProductsData.push(p);
      }
    }
    console.log("deleteImageUrlInProductsData", deleteImageUrlInProductsData);
    setproductsData(deleteImageUrlInProductsData);
  };
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setproductsData(updatedData);
  };

  const addNewProduct = () => {
    const addProductData = [
      ...productsData,
      {
        id: productsData.length + 1,
        title: "",
        subtitle: "",
        image_url: "",
        description: "",
      },
    ];
    setproductsData(addProductData);
    setEditableRowId(productsData.length + 1);
  };
  
  return (   <> 
      <div className={tdcs}>{item.id}</div>
      <div className={tdcss }>
        <input
          className="w-full border-solid border-2 border-indigo-300"
          type="text"
          value={item.title}
          onChange={(e) => handleInputChange(item.id, "title", e.target.value)}
        />
      </div>

      <div className={tdcss}>
        <textarea
          className="w-full border-solid border-2 border-indigo-300"
          value={item.subtitle}
          onChange={(e) =>
            handleInputChange(item.id, "subtitle", e.target.value)
          }
        />
      </div>
      <div className={tdcss }>
        <input
          className="w-full border-solid border-2 border-indigo-300"
          type="file"
          multiple
          onChange={(e) => handleImageUpload(e, item.id)}
        />
        {files[0] &&
          files.map(
            (i, index) =>
              item.id === i.id && (
                <span key={i.name + index}>
                  <Image
                    src={i.url}
                    alt="img"
                    width={38}
                    height={38}
                    className="inline"
                  />
                  <button onClick={() => handleDeleteImage(i.id, i.url)}>
                    Del
                  </button>
                </span>
              ),
          )}
        {item.imgurl.map((url, index) => (
          <span key={index}>
            <Image
              src={url}
              alt="img"
              width={38}
              height={38}
              className="inline"
            />
            <button onClick={() => handleDeleteImage(item.id, url)}>Del</button>
          </span>
        ))}
      </div>
      <div className={tdcss }>
        <textarea
          className="w-full border-solid border-2 border-indigo-300"
          rows={5}
          type="text"
          value={item.description}
          onChange={(e) =>
            handleInputChange(item.id, "description", e.target.value)
          }
        />
      </div>
      <div className={tdcss}>
        <span>
          <button onClick={() => handleSave(item.id)}>Save</button>
          <button onClick={() => handleCancel(item.id)}>Cancel</button>
        </span>
          </div>
       </>)
}
export default EditPage;

}*/

}
}
"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const tdcss = "border-solid border-2 border-indigo-600";
const EditableTable = ({ searchParams }) => {
  //const params = useSearchParams();
  const { products } = searchParams;
  const [data, setData] = useState(JSON.parse(products));
  const [editableRowId, setEditableRowId] = useState(null);
  const [prevData, setPrevData] = useState(data);
  const [files, setFiles] = useState<
    { id: number; file: File | null; url: string | ArrayBuffer | null }[]
  >([]);
  const handleEdit = (id) => {
    setEditableRowId(id);
    setPrevData(data);
  };

  const handleSave = async (id) => {
    setEditableRowId(null);
    const toSaveData = data.filter((item) => item.id === id);
    const toSaveFiles = Object.values(files).filter((item) => item.id === id);
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(toSaveData[0]));
    for (let i = 0; i < toSaveFiles.length; i++) {
      formdata.append("files", toSaveFiles[i].file);
    }
    // formdata.append("files", toSaveFiles);

    console.log("tosave", toSaveData, toSaveFiles);

    const response = await fetch(`api/products`, {
      method: "POST",
      body: formdata,
    }).then((res) => res.text());
    console.log("response", JSON.stringify(response));

    // Implement logic to save changes to the backend or update state as needed
  };

  const handleInputChange = (id, field, value) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [field]: value } : item,
    );
    setData(updatedData);
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
    const updatedData = files.filter((item) => {
      //console.log(item.id, item, item.file.name, index);
      return item.url !== url;
    });
    setFiles(updatedData);
  };
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const handleCancel = () => {
    setEditableRowId(null);
    setData(prevData);
    setFiles([]);
  };
  const addNewProduct = () => {
    const addData = [
      ...data,
      {
        id: data.length + 1,
        title: "",
        subtitle: "",
        image_url: "",
        description: "",
      },
    ];
    setData(addData);
    setEditableRowId(data.length + 1);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Image URL</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className={tdcss + " w-2/12"}>
                {editableRowId === item.id ? (
                  <input
                    className="w-full border-solid border-2 border-indigo-300"
                    type="text"
                    value={item.title}
                    onChange={(e) =>
                      handleInputChange(item.id, "title", e.target.value)
                    }
                  />
                ) : (
                  item.title
                )}
              </td>
              <td className={tdcss + " w-3/12"}>
                {editableRowId === item.id ? (
                  <textarea
                    className="w-full border-solid border-2 border-indigo-300"
                    type="text"
                    value={item.subtitle}
                    onChange={(e) =>
                      handleInputChange(item.id, "subtitle", e.target.value)
                    }
                  />
                ) : (
                  item.subtitle
                )}
              </td>
              <td className={tdcss + " w-2/12"}>
                {editableRowId === item.id ? (
                  <input
                    className="w-full border-solid border-2 border-indigo-300"
                    type="file"
                    multiple
                    onChange={(e) => handleImageUpload(e, item.id)}
                  />
                ) : null}
                <Image
                  src={item.imgurl}
                  alt="img"
                  width={38}
                  height={38}
                  className="inline"
                />
                {files[0]
                  ? files.map((i, index) =>
                      item.id === i.id ? (
                        <>
                          <Image
                            key={index}
                            src={i.url}
                            alt="img"
                            width={38}
                            height={38}
                            className="inline"
                          />
                          <button
                            onClick={() => handleDeleteImage(i.id, i.url)}
                          >
                            Del
                          </button>
                        </>
                      ) : null,
                    )
                  : null}
              </td>
              <td className={tdcss + " w-5/12"}>
                {editableRowId === item.id ? (
                  <textarea
                    className="w-full border-solid border-2 border-indigo-300"
                    rows={5}
                    type="text"
                    value={item.description}
                    onChange={(e) =>
                      handleInputChange(item.id, "description", e.target.value)
                    }
                  />
                ) : (
                  item.description
                )}
              </td>
              <td className={tdcss}>
                {editableRowId === item.id ? (
                  <span>
                    <button onClick={() => handleSave(item.id)}>Save</button>
                    <button onClick={() => handleCancel(item.id)}>
                      Cancel
                    </button>
                  </span>
                ) : (
                  <span>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addNewProduct}>Add new--</button>
      <button>Transmit</button>
      <Image
        src="/uploads/images/xx.jpg"
        alt="img"
        width={38}
        height={38}
        className="inline"
      />
    </>
  );
};

export default EditableTable;

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
  const handleEdit = (id) => {
    setEditableRowId(id);
    setPrevData(data);
  };

  const handleSave = async (id) => {
    setEditableRowId(null);
    const toSaveData = data.filter((item) => item.id === id);
    console.log("tosave", toSaveData, id);
    const response = await fetch(`api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSaveData),
    }).then((res) => res.text());
    console.log("response", JSON.stringify(response));

    console.log("response", response);
    // Implement logic to save changes to the backend or update state as needed
  };

  const handleInputChange = (id, field, value) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [field]: value } : item,
    );
    setData(updatedData);
  };
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const handleCancel = () => {
    setEditableRowId(null);
    setData(prevData);
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
                    type="text"
                    value={item.imgurl}
                    onChange={(e) =>
                      handleInputChange(item.id, "imgurl", e.target.value)
                    }
                  />
                ) : (
                  <Image
                    src={item.imgurl}
                    alt="img"
                    width={38}
                    height={38}
                    className="inline"
                  />
                )}
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
    </>
  );
};

export default EditableTable;

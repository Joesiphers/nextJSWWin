{editableRowId === item.id ? editStyle=true : editStyle=false}
   
    <input
      className="w-full border-solid border-2 border-indigo-300"
      type="file"
      multiple
      onChange={(e) => handleImageUpload(e, item.id)}
      

    />
  
  {JSON.parse(item.imgurl).map((url, index) => (
    <Image
      key={index}
      src={url}
      alt="img"
      width={38}
      height={38}
      className="inline"
    />
  ))}

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
            
          </>
        )}
        const DelIcon =(<button
        onClick={() => handleDeleteImage(i.id, i.url)}
      >
        Del
      </button>)
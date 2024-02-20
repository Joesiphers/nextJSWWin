export const parseProducts = (dataArray:[{}] ) => {
    //console.log(productsArray)
    let updateData = [];
    for (let i of dataArray) {
      updateData.push({ ...i, imgurl: JSON.parse(i.imgurl) });
      }
  return updateData}
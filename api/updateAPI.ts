import { dbquery } from "utils/db"; /*import from absolute path need to edit jsconfig.json*/
export async function updateProduct(recordData) {
  //pattern recordData = {id:idNumber, column1: value1, column2: value2, column3: value3}
  const fields = Object.keys(recordData);
  const values = Object.values(recordData);

  const updateQuery = `
    UPDATE products 
    SET title = $2, subtitle = $3, imgUrl = $4, description = $5
    WHERE id = $1
    RETURNING *;    `;
  console.log(updateQuery, recordData.id);
  //const res = dbquery(updateQuery);
  return dbquery(updateQuery, values);
}
/*    SET title = ${values[1]}  subtitle = ${values[2]} imgUrl = ${values[3]} desctription = ${values[4]}

/*const query = `
UPDATE products
SET column1 =$1, column2 = $2
WHERE id = $1`;
const fields = Object.keys(recordData);
const values = Object.values(recordData);
/*  const query = `
  INSERT INTO pipe_know (${fields})
  VALUES (${valueNumber}) 
  RETURNING *;`;
  */

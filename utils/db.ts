const DATABASE_URL =
  "ppostgres://Joesiphers:j7ZgVUoK4tPn@ep-frosty-haze-09169370.ap-southeast-1.aws.neon.tech/neondb?options=endpoint%3Dep-frosty-haze-09169370";
import { Pool } from "pg";
export async function dbquery(query, values = []) {
  const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { require: true },
  });
  try {
    const client = await pool.connect();
    console.log("quering : ", query, values);
    const res = await client.query(query, values);
    client.release();
    return res;
  } catch (error) {
    return error;
  }
}

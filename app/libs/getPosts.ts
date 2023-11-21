import { sql } from '@vercel/postgres'

export const getPosts = async () => {
  const { rows } = await sql`SELECT * FROM table1`
  return rows
}

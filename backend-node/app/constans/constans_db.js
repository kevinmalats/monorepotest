import dotenv from 'dotenv';
dotenv.config();
export const CONFIG = {
    connection : process.env.DB_CONNECTION
}
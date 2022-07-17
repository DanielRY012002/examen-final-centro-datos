import { Pool } from 'pg'


export const pool=new Pool({
    host:'database-1.cav34ixbsqiy.us-east-1.rds.amazonaws.com',
    user:'postgres',
    password:'daniel123',
    database:'bdcomandantes',
    port:5432,
    ssl:{rejectUnauthorized:false}
});
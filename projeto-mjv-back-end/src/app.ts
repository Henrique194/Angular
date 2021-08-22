import express from 'express';
import cors from 'cors';
import { createConnection as connection } from 'typeorm';
import { ProductService } from './services/product.service';
import router from "./routes"

const port = 4201;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router)
const service = new ProductService();

app.listen(port, async () => {    
    const connectionResult = await connection();
    console.log(` Connection Status: ${ connectionResult.isConnected ? 'ON' : 'OFF' } `);
});

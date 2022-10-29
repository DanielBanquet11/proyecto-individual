import  express  from 'express';
import dotenv from "dotenv";
import cors  from "cors";
import conectarDB from './config/db.js';

dotenv.config(); // para trabajar con las variables de entorno


const PORT = process.env.PORT || 4000;


const app = express();
// para trabajar con documentos JSON
app.use(express.json());

conectarDB();

// Middleware
app.use('/', (req, res)=>{
     res.json("Hola mundo expressJS")
});


app.listen(PORT, () =>{
    console.log(`servidor encedido en el puerto # ${PORT}`)
})

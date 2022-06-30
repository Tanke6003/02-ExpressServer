import express, {Application} from "express";
import userRoutes from "../routes/userRoutes";
import cors from "cors";
import db from "../database/connection";


class Server{

    private app : Application;
    private port :string;
    private paths={
        users:'/users'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "1200";
        //connection database
        this.dbConnection();
        //llamada a middlewares(Metodos Iniciales)
        this.midddlewares();
        //Definir las rutas
        this.routes();
    }

    async dbConnection(){
        try {
            
            await db.authenticate();
            console.log("database online");

        } catch (error:any) { 
            throw new Error( error );
        }
    }

    midddlewares(){

        //CORS
        this.app.use(cors());
        //Lectura del Body
        this.app.use(express.json());
        //Carpeta Publica
        this.app.use(express.static("public"));
    }

    routes(){

        this.app.use(this.paths.users,userRoutes);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("Servidor Api corriendo en puerto: " + this.port + " ");
        });
    }
}

export default Server;
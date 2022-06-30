import { DataTypes } from "sequelize";
import db from "../database/connection";

const User = db.define(
    "User",{
        PkUser:{type:DataTypes.INTEGER,
        primaryKey:true},
        User:{ type:DataTypes.STRING},
        Password:{ type:DataTypes.STRING},
        available:{type:DataTypes.BOOLEAN},
        CreatedDate:{type:DataTypes.DATE},
    },{tableName:"user"}
);

export default User;
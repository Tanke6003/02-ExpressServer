import { Request, Response } from "express";
import User from "../models/userModel";


export const getUsers = async(req:Request,res:Response)=>{

    const users = await User.findAll();

    res.json(users);
}

export const getUser = async(req:Request,res:Response)=>{

    const { idUser } = req.params;
    const user = await User.findByPk(idUser);
    if(!user){
        res.status(404).json({
            msg:`no existe Usuario con el idUser: ${idUser} `
        })
    }
    res.json(user);
}

export const postUser = async(req:Request,res:Response)=>{

    const { body } = req;
    try {
        if(await User.findOne({where:{User:body.User}}))
            return res.status(400).json({msg:"ya existe un usuario con ese nickname"})
        const user = User.build(body);
        await user.save();
        return res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:"contacte con el amdinistrador"
        })
    }
}

export const putUser = (req:Request,res:Response)=>{

    const { idUser } = req.params;
    const { body } = req;

    res.json({
        msg: "putUser",
        body,
        idUser
    });
}

export const deleteUser = (req:Request,res:Response)=>{

    const { idUser } = req.params;

    res.json({
        msg: "deleteUser",
        idUser
    });
}


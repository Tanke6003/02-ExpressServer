import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUser } from "../controllers/userController";

const router = Router();

router.get("/",          getUsers);
router.get("/:idUser",   getUser);
router.post("/",         postUser);
router.put("/:idUser",   putUser);
router.delete("/:idUser",deleteUser);

export default router;
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.findAll();
    res.json(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    const user = yield userModel_1.default.findByPk(idUser);
    if (!user) {
        res.status(404).json({
            msg: `no existe Usuario con el idUser: ${idUser} `
        });
    }
    res.json(user);
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (yield userModel_1.default.findOne({ where: { User: body.User } }))
            return res.status(400).json({ msg: "ya existe un usuario con ese nickname" });
        const user = userModel_1.default.build(body);
        yield user.save();
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "contacte con el amdinistrador"
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    res.json({
        msg: "putUser",
        body,
        idUser
    });
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    const { idUser } = req.params;
    res.json({
        msg: "deleteUser",
        idUser
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map
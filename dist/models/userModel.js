"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const User = connection_1.default.define("User", {
    PkUser: { type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true },
    User: { type: sequelize_1.DataTypes.STRING },
    Password: { type: sequelize_1.DataTypes.STRING },
    available: { type: sequelize_1.DataTypes.BOOLEAN },
    CreatedDate: { type: sequelize_1.DataTypes.DATE },
}, { tableName: "user" });
exports.default = User;
//# sourceMappingURL=userModel.js.map
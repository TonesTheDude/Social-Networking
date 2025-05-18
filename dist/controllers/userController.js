import { UserModel } from "../models/index.js";
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        console.log(users);
        return res.json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const singleUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const updateOneUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const deleteOneUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

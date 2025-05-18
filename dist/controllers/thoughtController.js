import { ThoughtsModel } from "../models/index.js";
export const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await ThoughtsModel.find();
        console.log(thoughts);
        return res.json(thoughts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const createThoughts = async (req, res) => {
    try {
        const thoughts = await ThoughtsModel.create(req.body);
        return res.json(thoughts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const singleThought = async (req, res) => {
    try {
        const thoughts = await ThoughtsModel.findById(req.params.id);
        return res.json(thoughts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const updateOneThought = async (req, res) => {
    try {
        const thoughts = await ThoughtsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(thoughts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const deleteOneThought = async (req, res) => {
    try {
        const thoughts = await ThoughtsModel.findByIdAndDelete(req.params.id);
        return res.json(thoughts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const addReaction = async (req, res) => {
    try {
        const thought = await ThoughtsModel.findByIdAndUpdate(req.params.thoughtID, { $addToSet: { reactions: req.body } }, { new: true });
        return res.json(thought);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
export const removeReaction = async (req, res) => {
    try {
        console.log(req.params);
        const thought = await ThoughtsModel.findByIdAndUpdate(req.params.thoughtID, { $pull: { reactions: { reactionID: req.params.reactionID } } }, { new: true });
        return res.json(thought);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

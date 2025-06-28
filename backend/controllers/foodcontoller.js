import foodmodel from "../models/foodmodel.js";
import fs from "fs"
//add food item
export const addfood = async (req, res) => {
    const image = req.file ? req.file.filename : null;
    const { name, description, price, category } = req.body;
    if (!name) {
        console.log("Name is required");
    }
    if (!price) {
        console.log("Price is required");
    }
    if (!category) {
        console.log("Category is required");

    }
    try {
        const newfood = new foodmodel({ name, description, price, image, category })
        const savedfood = await newfood.save()
        res.status(200).json({
            message: "The item added successfully",
            savedfood
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: "An error has occured"
        })
    }

}
//all food list
export const foodlist = async (req, res) => {
    try {
        const list = await foodmodel.find()
        res.status(200).json({
            message: "All documents got successfully",
            list
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Error occured in retriving"
        })
    }

}
//remove food item
export const deletefood = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteitem = await foodmodel.findByIdAndDelete(id)
        res.status(200).json({
            message: "Item deleted successfully",
            deleteitem
        })
    } catch (error) {
        res.status(404).json({
            message: "Error in deleting",
        })
    }

}
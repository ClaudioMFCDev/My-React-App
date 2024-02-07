//imp0ortamos el modelo

import BlogModel from "../models/BlogModel.js";

//Metodos del crud

//mostrar todos los registros
export const getAllBlogs = async (req, res)=> {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs)
    } catch (error) {
        res.json( {message: error.message})
    }
}
//buscar 1 solo registro
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{id: req.params.id}
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message})
    }
}
//crear un registro
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
        
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}
//actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id}
        }) 
        res.json({
            "mesagge": "Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({mesagge: error.mesagge})
    }
}
//eliminar un registro
export const delateBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id 
            }
        })
        res.json({
            "mesagge": "Registro eliminado exitosamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
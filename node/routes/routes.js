import express from 'express'
import { createBlog, delateBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'

const router = express.Router()

router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', delateBlog);

export default router
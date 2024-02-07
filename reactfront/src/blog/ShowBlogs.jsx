import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[] )

//proced mostrar todos los blogs
const getBlogs = async ()=> {
    const res = await axios.get(URI)
    setBlog(res.data)
}

//Proc eliminar blog
const deleteBlog = async (id)=> {
    await axios.delete(`${URI}${id}`)
    getBlogs()
}

//devolvemos una vista

return(

    <div className='container' >
        <div className='row'>
            <div className='col'>
                <Link to='/create' className='btn btn-primary mx-2 my-2'><i className="fa-solid fa-plus-minus"></i></Link>
            <table className="table table-striped">
                <thead className='table-primary' >
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map ( (blog) => (
                        <tr key={blog.id}>
                            <td> { blog.title } </td>
                            <td> { blog.content } </td>
                            <td>
                                <Link to={`/edit/${blog.id}`} className='btn btn-info mx-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                                
                                <button onClick={ ()=> deleteBlog(blog.id) } className='btn btn-danger' ><i className="fa-solid fa-trash-can"></i></button>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>
            </div>
        </div>
    </div>

)

}

export default CompShowBlogs
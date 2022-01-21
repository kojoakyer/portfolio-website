import React from 'react'
import Post from '../Post/Post'
import './Blog.css'

function Blog() {
    return (
        <div className='mainCon'>
            <div className="blogTitle">
			    <h1>My Blog</h1>
			    <h3>Latest Story From Our Blog</h3>
		    </div>
            <div className='blog'>
                <Post/>
            </div>
        </div>
    )
}

export default Blog

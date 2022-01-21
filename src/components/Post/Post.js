import React from 'react'
import './Post.css'
import { data } from './BlogData'

function Post() {


  return (
    <>
    {data.map((post)=>{
      return(
        <div className='post'>
        <div className="imgContainer">
            <img className='postImg' src={post.img} alt=''/>
        </div>
      
        <div className="postInfo">
                <span className="postTitle">{post.title}</span>
        </div>
        <div className="postItems">
               <span className="postDate"><i className='fa fa-calendar'/>{post.date}</span>
            </div>
        <p className='postDesc'>{post.desc}
          </p>
          <div className="postBtn">
            <button className='blogBtn'>read more</button>
          </div>
      </div>
      )
    })
  }
  </>

  )
}

export default Post



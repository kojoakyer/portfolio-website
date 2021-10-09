import React, { useState } from 'react'
import './Works.scss'
import { ArrowBackIos, ArrowForwardIos} from '@material-ui/icons'


function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)

    function handleClick(way){
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2 )
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1:0)
    }

    const data =[
        {
            id:'1',
            icon:'./assets/img2.jpg',
            title:'web design',
            desc:'lorem ipseun ',
            img: './assets/img3.jpg'
        },
        {
            id:'2',
            icon:'./assets/img4.jpg',
            title:'mobile app',
            desc:'lorem ipseun ',
            img: './assets/img4.jpg'
        },
        {
            id:'3',
            icon:'./assets/img5.jpg',
            title:'web app',
            desc:'lorem ipseun ',
            img: './assets/img2.jpg'
        },
    ]
    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
               {data.map((d, index)=>{
                   return(
                    <div className="container">
                       <div className="item">
                       <div className="left">
                           <div className="leftContainer">
                               <div className="imgContainer">
                                   <img src={d.img} alt="" />
                               </div>
                               <h2>{d.title}</h2>
                               <p>{d.desc}</p>
                               <span>Projects</span>
                           </div>
                       </div>
                       <div className="right">
                           <img src={d.img} alt="" />
                       </div>
                   </div>
               </div>
                   )
               })} 
               
            </div>

            <ArrowBackIos className='icon iconright' onClick={()=>handleClick('left')}/>
            <ArrowForwardIos className='icon iconleft' onClick={()=>handleClick('')}/>
        
        </div>
    )
}

export default Works

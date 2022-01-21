import React, { useEffect, useState } from 'react'
import { frontendapps,backendapps , featuredapps} from './Data'
import './Portfolio.scss'
import PortfolioList from './PortfolioList'

function Portfolio() {

    const [selected, setSelected]=useState('feature');
    const [data, setData]=useState([])

    const List =[
        {
            id:'feature',
            title:'Featured-Apps'
        },
        {
            id:'frontend',
            title:'Fullstack-Apps'
        },
        {
            id:'backend',
            title:'Frontend-Apps'
        }
    ]

    useEffect(()=>{

        switch(selected){
            case 'frontend':
                setData(frontendapps);
                break;
            case 'backend':
                setData(backendapps);
                break;   
            default:
                setData(featuredapps);
        }

    },[selected])




    return (
        <div className='portfolio' id='portfolio'> 
           <h2>Featured <span>Portfolio</span></h2>
           <ul>
               {List.map((item, index)=>{
                   return(
                       <PortfolioList title={item.title} active={selected===item.id} setselected={setSelected} id={item.id}/>
                   )
               })}
          </ul>      
          <div className="container">
              {data.map((d, index)=>{
                  return(
                    <div className="item">
                         <div className="imgContainer">
                             <img src={d.img} alt="" />
                         </div>
                         <div className="portfolioDesc">
                             <h3>{d.title}</h3>
                             <a href={d.visit}>code</a>
                             <a href={d.source}>Source</a>
                         </div>
                         
                    </div>
                  )
              })}

              
            </div>  
        </div>
    )
}

export default Portfolio

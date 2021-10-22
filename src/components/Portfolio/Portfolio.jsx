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
            title:'Frontend-Apps'
        },
        {
            id:'backend',
            title:'Backend-Apps'
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
           <h1>Projects</h1>
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
                         <h3>{d.title}</h3>
                         <div className="descContainer">
                            <p>{d.descr}</p>
                         </div>
                         <div className="stack"><h4>stack</h4></div>
                         <div className="tagContainer">
                             {d.tag.map((t, index)=>{
                                 return(
                                     <ul>
                                         <li>{t}</li>
                                     </ul>
                                 )
                             })}
                         </div>
                         <div className="utilityList">
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

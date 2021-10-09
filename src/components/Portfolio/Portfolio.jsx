import React, { useEffect, useState } from 'react'
import { brandingPorfolio, designPorfolio, featuredPorfolio, mobilePorfolio, webPorfolio } from './Data'
import './Portfolio.scss'
import PortfolioList from './PortfolioList'

function Portfolio() {

    const [selected, setSelected]=useState('feature');
    const [data, setData]=useState([])

    const List =[
        {
            id:'feature',
            title:'Feature'
        },
        {
            id:'web app',
            title:'Web App'
        },
        {
            id:'design',
            title:'Design'
        },
        {
            id:'mobile app',
            title:'Mobile App'
        },
        {
            id:'branding',
            title:'Branding'
        }
    ]

    useEffect(()=>{

        switch(selected){
            case 'feature':
                setData(featuredPorfolio);
                break;
            case 'web app':
                setData(webPorfolio);
                break;   
            case 'design':
                setData(designPorfolio);
                break;
            case 'mobile app':
                setData(mobilePorfolio);
                break;
            case 'branding':
                setData(brandingPorfolio);
                break; 
            default:
                setData(featuredPorfolio);
        }

    },[selected])




    return (
        <div className='portfolio' id='portfolio'> 
           <h1>Portfolio</h1>
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
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                  )
              })}

              
            </div>  
        </div>
    )
}

export default Portfolio

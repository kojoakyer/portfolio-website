 import React from 'react'
import './PortfolioList.scss'

function PortfolioList({title ,id, active, setselected }) {
    return (
        
            <li className={active ? 'portfolioList active' : 'portfolioList'} onClick={()=>setselected(id)}>{title}</li>

    )
}

export default PortfolioList

import React from 'react'
import './Testimonials.scss'

function Testimonials() {

    const data =[
        {
            id:'1',
            icon:'./assets/img2.jpg',
            name:'Jason York',
            title:'CEO of NYT Ltd',
            desc:'lorem ipseun m ipsum dolor sit amet consectetur adipisicing elit. Sed, architecto delenistrum voluptatum.',
            img: './assets/img3.jpg'
        },
        {
            id:'2',
            icon:'./assets/img4.jpg',
            name:'Dan Lok',
            title:'CEO of Yokd INC',
            desc:'lorem ipseun m ipsum dolor sit amet consectetur adipisicing elit. Sed, architecto delenistrum voluptatum.',
            img: './assets/img4.jpg'
        },
        {
            id:'3',
            icon:'./assets/img5.jpg',
            name:'Pearl Agbove',
            title:'CEO labbelle',
            desc:'lorem ipseu Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, architecto delenistrum voluptatum. ',
            img: './assets/img2.jpg'
        },
    ]
    return (
        <div className='testimonials' id='testimonials' >
          <div className="test_container">
              {data.map((d, index)=>{
                  return(
                   <div className="card">
                      <div className="top">
                        <i className='fas fa-angle-right'></i>
                        <img className='userImg' src={d.img} alt="" />
                        <i className='fab fa-youtube'></i>
                      </div>
                     <div className="center">
                      {d.desc}
                     </div>
                     <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                  )
              })}
           
         </div>            
       </div>
    )
}

export default Testimonials

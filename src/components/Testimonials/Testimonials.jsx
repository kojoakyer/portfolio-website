import React from 'react'
import './Testimonials.scss'

function Testimonials() {

    const data =[
        {
            id:'1',
            icon:'./assets/img2.jpg',
            name:'Jason York',
            title:'CEO of NYT Ltd',
            desc:'“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”.',
            img: './assets/img3.jpg'
        },
        {
            id:'2',
            icon:'./assets/img4.jpg',
            name:'Dan Lok',
            title:'CEO Branded Inc',
            desc:'“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”.',
            img: './assets/img4.jpg'
        },
        {
            id:'3',
            icon:'./assets/img5.jpg',
            name:'Andre Ansah',
            title:'CEO Creanos Imc',
            desc:'“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”.. ',
            img: './assets/img2.jpg'
        },
    ]
    return (
        <div className='testimonials' id='testimonials' >
            <h2>Client <span>Testimonials</span></h2>
          <div className="test_container">
              {data.map((d, index)=>{
                  return(
                   <div className="card">
                      <div className="top">
                        <img className='userImg' src={d.img} alt="" />
                      </div>
                     <div className="center">
                      <p>{d.desc}</p>
                     </div>
                     <div className="bottom">
                        <h4>{d.name}, {d.title}</h4>
                    </div>
                </div>
                  )
              })}
           
         </div>            
       </div>
    )
}

export default Testimonials

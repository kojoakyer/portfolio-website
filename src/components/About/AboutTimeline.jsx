import React from 'react'
import './About.css'
import { timelineData } from './AboutData'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School } from '@material-ui/icons';

function AboutTimeline() {
    return (
        <div className='about'>
            <div className="headingContainer">
                 <h2 className='heading'>My <span className='span'>Journey</span></h2>
            </div>
          

            <VerticalTimeline>
                {timelineData.map((element, index)=>{
                    return(
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        key={element.key}
                        date={element.date}
                        dateClassName='date'
                        contentStyle={{ background: '#fff', color: 'black' }}
                        contentArrowStyle={{ borderRight: '10px solid  #fff)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                        icon={<School/>}
                        >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{element.School}</h4>
                            <p>{element.description}</p>

                        </VerticalTimelineElement>

                    )
                })}
            </VerticalTimeline>
            
        </div>
    )
}

export default AboutTimeline

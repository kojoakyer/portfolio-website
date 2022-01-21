import React, { Fragment } from "react";

import { Fade } from "react-reveal";

import { skillsSection } from "./SkillsData";
import './Skills.css'

const Skills = () => {
	return (
        <div className="main">
		<Fade bottom duration={1000} distance="40px">
			<div className="skillTitle">
				<h1>{skillsSection.title}</h1>
				<h3>{skillsSection.subTitle}</h3>
			</div>
			<div className="skillWrapper">
				<div className="col">
					<img src="assets/web.png" alt="" />
				</div>
				<div className="skillCol">
				<div className="iconCol">
					{skillsSection.softwareSkills.map((skill)=>{
						return(
							<>
							<div className="icons">
								<div className='skill'>{skill.fontAwesomeClassname}</div>
							</div>
							</>
						)
					})}					
					</div>
					<div className="skillDesc">
						<ul>
						{skillsSection.skills.map((i)=>{
							return(
						
								<li>{i.li}</li>
						    
							)
						})}
						</ul>
				   </div>
				   </div>
			</div>
		</Fade>
        </div>
	);
};

export default Skills;

import React from 'react'
import { dataabout, skills, worktimeline } from '../../content_option'
import "./skills.css"

const Skills = () => {
  return (
      <div className='skills'>
          <div className="container scroll">
              <div className="sks">
                  <div className="about-me">
                      <div className="am-header"><h1>About Me</h1><hr /></div>
                      <div className="am-title-desc">
                           <h2 className="am-title">{ dataabout.title }</h2>
                      <div className="am-desc" dangerouslySetInnerHTML={{__html:dataabout.aboutme }}></div>
                      </div>
                      
                      <div className="am-title-desc">
                           <h2 className="am-title">Experience</h2>
                          <div className="am-desc">{
                              worktimeline && worktimeline.map((timeline, i ) => (
                                  <div key={i} className="each-timeline">
                                      <p className="am-role">{ timeline.jobtitle }</p>
                                      <p className="am-coy">{ timeline.where }</p>
                                      <p className="am-duration">{timeline.date} - { timeline.endDate }</p>
                               </div>
                           ))
                          }</div>
                     </div>
                      <div className="am-title-desc">
                           <h2 className="am-title">My Skills</h2>
                          <div className="am-desc">{
                              skills && skills.map((skill, i) => (
                                  <div key={i} className="each-skill">
                                      <div className="am-skill">{ skill.name }</div>
                                      <div className="am-icon">{ skill.icon }</div>
                               </div>
                           ))
                          }</div>
                     </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Skills
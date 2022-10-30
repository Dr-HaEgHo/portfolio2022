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
                              worktimeline && worktimeline.map(timeline => (
                                  <div className="each-timeline">
                                      <div className="am-role">{ timeline.jobtitle }</div>
                                      <div className="am-coy">{ timeline.where }</div>
                                      <div className="am-duration">{timeline.date} - { timeline.endDate }</div>
                               </div>
                           ))
                          }</div>
                     </div>
                      <div className="am-title-desc">
                           <h2 className="am-title">My Skills</h2>
                          <div className="am-desc">{
                              skills && skills.map(skill => (
                                  <div className="each-skill">
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
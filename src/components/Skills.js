import { useEffect, useState } from 'react'
import { activeSkillProgress, fatchData } from '../utilits'

const Skills = ({ dark }) => {
  const [data, setData] = useState({})
  useEffect(async () => {
    setData(await fatchData('/static/info.json'))
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', activeSkillProgress)
  }, [])

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Code is Life</span>
                <h3>I constantly learn new technologies to stay updated</h3>
                <p>
                  The most common methods for building robust applications are
                  modular architecture and scalable infrastructure
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {data &&
                  data.skills &&
                  data.skills.map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill.value}
                      data-color={skill.color}
                      key={i}
                    >
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.value}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="right">
              <img src={`img/skills/${dark ? 2 : 1}.jpg`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills

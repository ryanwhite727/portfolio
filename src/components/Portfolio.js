import Isotope from 'isotope-layout'
import { useEffect, useRef, useState } from 'react'
import { dataImage, portfolioHover } from '../utilits'
import DetailsPopup from './popup/DetailsPopup'
import PortfolioProjects from '/public/static/portfolio.json'

const Portfolio = () => {
  useEffect(() => {
    dataImage()
    portfolioHover()
  }, [])

  // Isotope
  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*')
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope('.gallery_zoom', {
        itemSelector: '.grid-item',
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item',
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      })
    }, 500)
    return () => isotope.current.destroy()
  }, [])
  useEffect(() => {
    if (isotope.current) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` })
    }
  }, [filterKey])
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key)
  }
  const activeBtn = (value) => (value === filterKey ? 'current' : '')

  // Popup
  const [popup, setPopup] = useState(false)
  const [project, setProject] = useState(null)

  const categories = [
    {
      label: 'All',
      filter: '*',
    },
    {
      label: 'Frontend',
      filter: 'frontend',
    },
    {
      label: 'Backend',
      filter: 'backend',
    },
    {
      label: 'Fullstack',
      filter: 'fullstack',
    },
    {
      label: 'Data Engineering',
      filter: 'data-engineering',
    },
    {
      label: 'Other',
      filter: 'other',
    },
  ]

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup
        open={popup}
        close={() => {
          setPopup(false)
          setProject(null)
        }}
        project={project}
      />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              {categories.map((category, i) => (
                <li key={i}>
                  <a
                    className={`c-pointer ${activeBtn(category.filter)}`}
                    onClick={handleFilterKeyChange(category.filter)}
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {/* <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mockup Shape"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li> */}
              {/* <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Ave Bottle"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://player.vimeo.com/video/337293658?autoplay=1"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Ave Bottle</h3>
                    <span>Vimeo</span>
                  </div>
                </div>
              </li> */}
              {/* <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Magic Art"
                    data-category="Soundcloud"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Magic Art</h3>
                    <span>Soundcloud</span>
                  </div>
                </div>
              </li> */}
              {/* <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Scott Felix"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/5.jpg">
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Blue Lemon</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li> */}

              {PortfolioProjects.map((project, i) => (
                <li
                  key={i}
                  className={`${project.type} grid-item`}
                  onClick={() => {
                    setPopup(true)
                    setProject(project)
                  }}
                >
                  <div className="inner">
                    <div
                      className="entry dizme_tm_portfolio_animation_wrap"
                      data-title={project.title}
                      data-category={project.category}
                    >
                      <a className="portfolio_popup" href="#">
                        <img src={project.thumbnail} alt="image" />
                        <div
                          className="main"
                          data-img-url={project.thumbnail}
                        />
                      </a>
                    </div>
                    <div className="mobile_title">
                      <h3>{project.title}</h3>
                      <span>{project.category}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  )
}
export default Portfolio

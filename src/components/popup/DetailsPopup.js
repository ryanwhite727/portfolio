const DetailsPopup = ({ open, close, project }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? 'opened' : ''}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src={project && project.thumbnail} alt="image" />
              <div
                className="main"
                data-img-url={project && project.thumbnail}
                style={{
                  backgroundImage: `url(${project && project.thumbnail})`,
                }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>{project && project.title}</h3>
              <span>
                <a href="#">Detail</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>{project && project.dec}</p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Client</span>
                    <span>Alvaro Morata</span>
                  </li>
                  <li>
                    <span className="first">Category</span>
                    <span>
                      <a href="#">{project && project.category}</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {project && project.additionalImages.length > 0 && (
              <div className="additional_images">
                <ul>
                  {project.additionalImages.map((addImage, index) => (
                    <li key={`${project.title}-add-image-${index}`}>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src="img/thumbs/4-2.jpg" alt="image" />
                          <div
                            className="main"
                            data-img-url={addImage}
                            style={{
                              backgroundImage: `url(${addImage})`,
                            }}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailsPopup

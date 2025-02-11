import { useForm } from '@formspree/react'
import { useEffect, useState } from 'react'
import { fatchData } from '../utilits'

const Contact = () => {
  const [data, setData] = useState({})
  const [state, handleSubmit] = useForm('xwpvnvje')
  useEffect(async () => {
    setData(await fatchData('/static/info.json'))
  }, [])
  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 11:00 a.m. and 5:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  {/* <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                  </li> */}
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                  </li> */}
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              {state.succeeded && (
                <div className="contact-message">
                  <h3>Thank you for contacting me!</h3>
                  <p>I will get back to you as soon as possible.</p>
                </div>
              )}
              <div className="fields">
                <form
                  onSubmit={handleSubmit}
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your Name"
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder="Your Email"
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          name="phone"
                          type="number"
                          placeholder="Your Phone"
                        />
                      </li>
                      <li>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Subject"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here"
                      defaultValue={''}
                    />
                  </div>
                  <div className="dizme_tm_button wow">
                    {/* <a id="send_message" onClick={handleSubmit} className="anchor">
                      <span>Submit Now</span>
                    </a> */}
                    <button id="send_message" type="submit" disabled={state.submitting}>
                      <span>Submit Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <img src="img/brushes/contact/2.png" alt="image" />
            </div>
          </div>
          <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height={375}
                  style={{ width: '100%' }}
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4075.205064476586!2d-81.52228212423728!3d35.11760417277448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88571d60e6322345%3A0xbc7435d8b0423fc6!2s202%20S%20John%20St%2C%20Blacksburg%2C%20SC%2029702!5e1!3m2!1sen!2sus!4v1738603327739!5m2!1sen!2sus"
                />
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                <br />
              </div>
            </div>
            {/* Get your API here https://www.embedgooglemap.net */}
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/contact/1.png" alt="image" />
        </div>
      </div>
    </div>
  )
}
export default Contact

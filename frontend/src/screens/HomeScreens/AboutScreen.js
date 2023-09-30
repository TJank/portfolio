import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function AboutScreen() {
  return (
    <div>
      {/* About Section  */}
      <div className='about'>
          <strong>About Us</strong>
            <small>{"   "}We do things personally.</small>
            <p>
              We are a software development company that specializes in web applications, data analysis, and automation services. 
              We are committed to providing our clients with the best possible service, and we believe that our personal approach 
              sets us apart from the competition.
            </p>
       </div>       
        <div className='ourcompany'><strong className='section-title'>Our company principles</strong></div>
        <div className='values'>
          <div className='principles'>
            <small>Personal</small>
            <p>
              We understand that every business is unique, and that's why we offer web applications tailored to your 
              specific wants, needs, and requirements. Our team works closely with you to ensure that the web applications 
              we develop align perfectly with your vision and goals. With our personalized approach, we empower you to stand 
              out from the competition and achieve success online.
            </p>
          </div>

          <div className='respect'>
            <small>Respect</small>
            <p>
              At <b>Janky Robotics</b>, we hold respect as a core value. We treat your business, time, clients, 
              and data with the utmost respect and confidentiality. We prioritize the security and privacy of 
              your information, ensuring that your valuable assets are safeguarded at all times. Trust us to handle 
              your sensitive data and deliver solutions that meet the highest standards of professionalism and integrity.
            </p>
          </div>

          <div className='dependable'>
            <small>Dependable</small>
            <p>
              Although we may be smaller in size, we are just as dependable as the big players in the industry. 
              Our agile and efficient development processes enable us to provide quick deployments and updates 
              without compromising on quality. You can rely on us to deliver your projects on time, ensuring that your 
              business operations run smoothly and efficiently. Moreover, we are always available to address any 
              emergencies or urgent requirements that may arise.
            </p>
          </div>

          <div>
            <small>Service</small>
            <p>
              At <b>Janky Robotics</b>, we take great pride in providing the best service possible,
              tailored to you and your unique needs. Our team goes above and beyond to ensure your satisfaction, 
              putting your requirements and objectives at the forefront. We are dedicated to building long-term 
              partnerships with our clients, supporting your growth and success with our unwavering commitment to excellence.
            </p>
          </div>
       </div>
    </div>
  )
}

export default AboutScreen
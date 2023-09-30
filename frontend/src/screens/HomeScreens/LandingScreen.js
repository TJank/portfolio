import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function LandingScreen() {
  return (
    <div>
      {/* Welcome Section */}
          <div className='top'>
            <div className='top-content'>
              <strong>Software Services unlike any other <br /><small>The most personal website builder you can find.</small></strong>
              
              <p>
                Welcome to <b>Janky Robotics</b>, where we offer unparalleled software services tailored to meet your unique needs. 
                Our team of experts specializes in crafting personalized web applications, leveraging machine learning and data 
                analysis, and providing efficient testing and automation scripting. 
                Discover how our services can transform your business and propel it to new heights.
              </p>
            </div>
            <img src='/static/images/computer.jpg'/>
          </div>
          <div className="custom-shape-divider-bottom-1687040090">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
      {/* About Section  */}
      {/* <div className='about'>
          <strong>About Us</strong>
            <small>{"   "}We do things personally.</small>
            <p>
              We are a software development company that specializes in web applications, data analysis, and automation services. 
              We are committed to providing our clients with the best possible service, and we believe that our personal approach 
              sets us apart from the competition.
            </p>
       </div>        */}
        {/* <figure>
          <figcaption>Our company principles are:</figcaption>
          <ul>
              <li>
                <strong>Personal:</strong> We tailor our web applications to the individual needs of our clients. 
                We understand that every business is different, and we want to create a solution 
                that meets your specific requirements.
              </li>

              <li>
                <strong>Respect:</strong> We respect your business, time, clients, and data. We treat your information with 
                the utmost confidentiality, and we will always be available to answer your questions.
              </li>
              <li>
                <strong>Dependable:</strong> We are a small company, but we are just as dependable as the big guys. 
                We will always meet our deadlines, and we will always be available to help you with 
                any problems you may encounter.
              </li>
              <li>
                <strong>Service:</strong> We take pride in providing our clients with the best possible service. 
                We are always available to answer your questions, and we will always go the extra mile to 
                make sure you are satisfied.
              </li>
          </ul>
        </figure> */}
        {/* <div className='ourcompany'><strong className='section-title'>Our company principles</strong></div>
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
       </div> */}


      {/* Our Services */}
      {/* <div className='services'>
        <strong>Our Services</strong>
        <div className='services-content'>
          <div>
            <label htmlFor="cwa" className='service'>Custom Web Applications</label>
            <input type='checkbox' id='cwa'/>
            <p>
              Unlock the full potential of your business with our custom-built, personalized, and full-stack web applications. 
              Whether you need a simple business website, a robust e-commerce platform, or complex business operations services, 
              we have the expertise to bring your vision to life.
              <Link to='/contact'>Contact us</Link> today, share your requirements, and let's embark on a journey of digital 
              transformation together. <label className='close' htmlFor="cwa">close</label>
            </p>
          </div>

          <div>
            <label htmlFor="mlda" className='service'>Machine Learning & Data Analysis</label>
            <input type='checkbox' id='mlda'/>
            <p>
              Gain valuable insights from your business, product, and customer data through our comprehensive machine learning 
              and data analysis services. Our team dives deep into your data, providing you with actionable intelligence to 
              enhance decision-making and optimize your strategies. 
              <Link to='/contact'>Contact us</Link> now with a description of your requirements and ideal analysis, and let's 
              connect to unlock the power of data-driven decision-making. <label className='close' htmlFor="mlda">close</label>
            </p>
          </div>
        
          <div>
            <label htmlFor="tas" className='service'>Testing & Automation Solutions</label>
            <input type='checkbox' id='tas'/>
            <p>
              Streamline your testing processes and reduce manual efforts with our cutting-edge testing and automation scripting 
              solutions. We offer a comprehensive suite of automation testing tools, including smoke, regression, and visual testing. 
              By leveraging continuous integration techniques, we ensure the highest quality and efficiency for your software 
              development lifecycle.<span><Link to='/contact'>Contact us</Link></span> today for a consultation and discover how our automation solutions can save you 
              time and effort. <label className='close' htmlFor="tas">close</label>
            </p>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default LandingScreen
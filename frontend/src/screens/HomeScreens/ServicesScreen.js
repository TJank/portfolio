import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function ServicesScreen() {
  return (
    <div>
      {/* Our Services */}
      <div className='services'>
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
      </div>
    </div>
  )
}

export default ServicesScreen
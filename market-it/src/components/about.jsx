import React from 'react'
// import Review from './review'
import Newsletter from './newsletter'
const About = () => {
  return (
    <div className="about">
        <div className='about-main'>
          <h2 className="about-header">How We Came To Be</h2>
          <div className="container">
            <div className="flex about-flex">
              <div className="problem">
                <h2 className="problem-header">The Problem</h2>
                <p><span className="front-qoute">"</span> I diligently saved funds for an entire year with the intent of purchasing aspecific laptop that my daughter had expressed her desire for. Upon arriving the store, I discovered that the price of the laptop has unexpectedly doubled. This revelation brought me considerable distress. I really wished there was a pay in installments store where I can buy laptops. <span className="back-qoute">"</span></p>
              </div>
              <div className="solution">
                <h2 className="solution-header">Our Response</h2>
                <p>In Africa, there are so many people who have lost out on devices and probably opportunities indirectly. Thus we decided to create an app-store where you can buy things at once, in installment or you save to buy.</p>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
   </div>
  )
}

export default About
// Write your code here

import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="mobile-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
    </div>
    <div className="desktop-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
        alt="about"
      />
    </div>
  </div>
)

export default About

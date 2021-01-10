import PropTypes from 'prop-types'
import React from 'react'
import introbg from '../images/introbg.jpg'
import aboutbg from '../images/aboutbg.jpg'
import servicesbg from '../images/servicesbg.jpg'
import IntroContent from '../content/Intro-Content.yaml'
import ServicesContent from '../content/Services-Content.yaml'
import AboutContent from '../content/About-Content.yaml'
import ContactContent from '../content/Contact-Content.yaml'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={introbg} alt="" />
          </span>
          <h3>
            {IntroContent.subheading1}
          </h3>
          <p>
            {IntroContent.para1}
          </p>
          <h3>
            {IntroContent.subheading2}
          </h3>
          <p>
            {IntroContent.para2}
          </p>
          <h3>
            {IntroContent.subheading3}
          </h3>
          <p>
            {IntroContent.para3}
          </p>
          <h3>
            {IntroContent.subheading4}
          </h3>
          <p>
            {IntroContent.para4}
          </p>
          <h3>
            {IntroContent.subheading5}
          </h3>
          <p>
            {IntroContent.para5}
          </p>
          <h3>
            {IntroContent.subheading6}
          </h3>
          <p>
            {IntroContent.para6}
          </p>
          <h3>
            {IntroContent.subheading7}
          </h3>
          <p>
            {IntroContent.para7}
          </p>
          <h3>
            {IntroContent.subheading8}
          </h3>
          <p>
            {IntroContent.para8}
          </p>
          <h3>
            {IntroContent.subheading9}
          </h3>
          <p>
            {IntroContent.para9}
          </p>
          <h3>
            {IntroContent.subheading10}
          </h3>
          <p>
            {IntroContent.para10}
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={servicesbg} alt="" />
          </span>
          <h3>
            {ServicesContent.subheading1}
          </h3>
          <p>
            {ServicesContent.para1}
          </p>
          <h3>
            {ServicesContent.subheading2}
          </h3>
          <p>
            {ServicesContent.para2}
          </p>
          <h3>
            {ServicesContent.subheading3}
          </h3>
          <p>
            {ServicesContent.para3}
          </p>
          <h3>
            {ServicesContent.subheading4}
          </h3>
          <p>
            {ServicesContent.para4}
          </p>
          <h3>
            {ServicesContent.subheading5}
          </h3>
          <p>
            {ServicesContent.para5}
          </p>
          <h3>
            {ServicesContent.subheading6}
          </h3>
          <p>
            {ServicesContent.para6}
          </p>
          <h3>
            {ServicesContent.subheading7}
          </h3>
          <p>
            {ServicesContent.para7}
          </p>
          <h3>
            {ServicesContent.subheading8}
          </h3>
          <p>
            {ServicesContent.para8}
          </p>
          <h3>
            {ServicesContent.subheading9}
          </h3>
          <p>
            {ServicesContent.para9}
          </p>
          <h3>
            {ServicesContent.subheading10}
          </h3>
          <p>
            {ServicesContent.para10}
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={aboutbg} alt="" />
          </span>
          <h3>
            {AboutContent.subheading1}
          </h3>
          <p>
            {AboutContent.para1}
          </p>
          <h3>
            {AboutContent.subheading2}
          </h3>
          <p>
            {AboutContent.para2}
          </p>
          <h3>
            {AboutContent.subheading3}
          </h3>
          <p>
            {AboutContent.para3}
          </p>
          <h3>
            {AboutContent.subheading4}
          </h3>
          <p>
            {AboutContent.para4}
          </p>
          <h3>
            {AboutContent.subheading5}
          </h3>
          <p>
            {AboutContent.para5}
          </p>
          <h3>
            {AboutContent.subheading6}
          </h3>
          <p>
            {AboutContent.para6}
          </p>
          <h3>
            {AboutContent.subheading7}
          </h3>
          <p>
            {AboutContent.para7}
          </p>
          <h3>
            {AboutContent.subheading8}
          </h3>
          <p>
            {AboutContent.para8}
          </p>
          <h3>
            {AboutContent.subheading9}
          </h3>
          <p>
            {AboutContent.para9}
          </p>
          <h3>
            {AboutContent.subheading10}
          </h3>
          <p>
            {AboutContent.para10}
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <h2>{ContactContent.companyName}</h2>
          <h4>{ContactContent.address}</h4>
          {/* <a href="http://www.edmundeastfield.com/"> www.edmundeastfield.com</a> */}
          {/* <br></br> */}
          <p>
          {ContactContent.mailId}
          </p>
          {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

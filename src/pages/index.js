import * as React from 'react'
import Wrapper from '../components/Wrapper'
import SideBySide from '../components/SideBySide'
import Columns from '../components/Columns'
import Column from '../components/Column'
import BasicContent from '../components/BasicContent'

import techLogos from '../images/tech-logos.png'
import selfPic from '../images/self-pic.png'
import photography from '../images/site-thumbnails/photography-final.png'
import greens from '../images/site-thumbnails/mygreens-final.png'
import multiplication from '../images/site-thumbnails/multiplication.png'
import javascriptClock from '../images/site-thumbnails/javascript-clock.png'
import ciena from '../images/company-logos/ciena.png'
import centurylink from '../images/company-logos/centurylink.png'
import directv from '../images/company-logos/directv.png'
import dish from '../images/company-logos/dish.png'
import verizon from '../images/company-logos/verizon.png'
import windstream from '../images/company-logos/windstream.png'
import Testimonials from '../components/Testimonials'

const IndexPage = () => {
  return (
    <>
      <Wrapper>
        <div className="centered-content">
          <h1>Step into My Creative Playground</h1>
          <div className="self-pic">
            <img src={selfPic} alt="self-pic" />
          </div>
          <p className="large">
            I'm a passionate front-end web developer with a strong foundation in
            React, JavaScript, HTML, Sass, and many other front-end web
            technologies
          </p>
        </div>
        <SideBySide
          heading="Crafting Dynamic Web Experiences with Modern Technologies"
          content="I bring hands-on experience with frameworks like Gatsby, CMS applications such as Contentful, Wordpress, and Clickability, and technologies like GraphQL to create dynamic, user-centered, and maintainable web experiences while continuously striving to stay updated with industry trends and expand my skill set. "
          image={techLogos}
          mobileImageStack
          darkBg
        />
        <BasicContent
          bgColor="white"
          heading="Companies I've Done Work For"
          content="I have had the pleasure of contributing to a substantial number of projects with multiple well-regarded companies."
        />

        {/* need to convert this to it's own component at some point */}
        <div className="company-logos">
          <div className="logo-container">
            <img src={ciena} alt="ciena logo" />
            <img src={directv} alt="directv logo" />
            <img src={verizon} alt="verizon logo" />
            <img src={windstream} alt="windstream logo" />
            <img src={centurylink} alt="ciena logo" />
            <img src={dish} alt="dish logo" />
          </div>
        </div>

        <Testimonials
          bgColor="black"
          heading="People i've worked with"
          content="I've been truly fortunate to work with and learn from some very talented and amazing individuals. Here's what they say about me."
          content={
            <Columns>
              <Column caption="This will be a comment" />
              <Column caption="This will be another comment" />
              <Column caption="This will be yet another comment" />
              <Column caption="This will be one more too" />
            </Columns>
          }
        />

        <Columns heading="Current Personal Works in Progress">
          <Column
            link="https://ryanwassomphotography.netlify.app/"
            image={photography}
            alt="Ryan Wassom Photography"
            caption="Ryan Wassom Photography"
          />
          <Column
            link="https://mygreens.netlify.app/"
            image={greens}
            alt="MyGreens Site"
            caption="myGreens"
          />
        </Columns>

        <Columns heading="A Couple Other Silly Things" bgColor="black">
          <Column
            link="https://multiplication-table-ryan.netlify.app/"
            image={multiplication}
            alt="Multiply Me"
            github="https://github.com/tchewa/multiply-me"
          />
          <Column
            link="https://ryanw-javascript-clock.netlify.app/"
            image={javascriptClock}
            alt="Javascript Clock"
            github="https://github.com/tchewa/javascript-clock"
          />
        </Columns>
      </Wrapper>
    </>
  )
}

export default IndexPage

import * as React from 'react'
import Wrapper from '../components/Wrapper'
import SideBySide from '../components/SideBySide'
import Columns from '../components/Columns'
import Column from '../components/Column'
import BasicContent from '../components/BasicContent'
import Testimonials from '../components/Testimonials'

import recommendations from '../components/data/recommendations'

import techLogos from '../images/tech-logos.png'
import selfPic from '../images/self-pic.png'
import photography from '../images/site-thumbnails/photography-final.png'
import greens from '../images/site-thumbnails/mygreens-final.png'
import multiplication from '../images/site-thumbnails/multiplication.png'
import javascriptClock from '../images/site-thumbnails/javascript-clock.png'

import cardCarousel from '../images/site-thumbnails/card-carousel.png'
import CompanyLogos from '../components/CompanyLogos'

const IndexPage = () => {
  return (
    <>
      <Wrapper>
        <BasicContent
          centered
          mainHeading="Step into My Creative Playground"
          largeContent="I'm a passionate front-end web developer with a strong foundation in React, JavaScript, HTML, Sass, and many other front-end web technologies"
          image={selfPic}
        />

        <SideBySide
          heading="Crafting Dynamic Web Experiences with Modern Technologies"
          content="I bring hands-on experience with frameworks like Gatsby, CMS applications such as Contentful, Wordpress, and Clickability, and technologies like GraphQL to create dynamic, user-centered, and maintainable web experiences. I ambitiously work to stay updated and informed of industry trends and continuously strive to expand my skill set."
          image={techLogos}
          alt="tech stack"
          mobileImageStack
          darkBg
          wrapImageBottom
        />

        <BasicContent
          bgColor="white"
          heading="Companies I've Done Work For"
          content="I have had the pleasure of contributing to a substantial number of projects with multiple well-regarded companies."
        />

        <CompanyLogos />

        <Testimonials
          bgColor="black"
          heading="People I've Worked With"
          subheading="I've been truly fortunate to work with and learn from some very talented and amazing individuals. Here's what they've said about me."
          content={recommendations}
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

        <Columns heading="A Couple Other Little Creations" bgColor="black">
          <Column
            link="https://multiplication-table-ryan.netlify.app/"
            image={multiplication}
            alt="Multiply Me"
            bgColor="black"
            github="https://github.com/tchewa/multiply-me"
          />
          <Column
            link="https://codepen.io/tchewa/pen/aVVgJa"
            image={cardCarousel}
            alt="Card Carousel"
            bgColor="black"
            github="https://codepen.io/tchewa/pen/aVVgJa"
          />
          <Column
            link="https://ryanw-javascript-clock.netlify.app/"
            image={javascriptClock}
            alt="Javascript Clock"
            bgColor="black"
            github="https://github.com/tchewa/javascript-clock"
          />
        </Columns>
      </Wrapper>
    </>
  )
}

export default IndexPage

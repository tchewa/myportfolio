import * as React from 'react'
import Wrapper from '../components/Wrapper'
import SideBySide from '../components/SideBySide'
import Columns from '../components/Columns'
import Column from '../components/Column'
import BasicContent from '../components/BasicContent'
import Testimonials from '../components/Testimonials'

import recommendations from '../components/data/recommendations'

import techLogos from '../images/tech-logos.png'
import selfPic from '../images/self-pic-real.png'
import photography from '../images/site-thumbnails/photography-final.png'
import greens from '../images/site-thumbnails/mygreens-final.png'
import multiplication from '../images/site-thumbnails/multiplication.png'
import javascriptClock from '../images/site-thumbnails/javascript-clock.png'
import cardCarousel from '../images/site-thumbnails/card-carousel.png'
import CompanyLogos from '../components/CompanyLogos'
import copytec from '../images/site-thumbnails/copytec.png'
// import hacker from '../images/site-thumbnails/hacker.png'

const IndexPage = () => {
  return (
    <>
      <Wrapper>
        <BasicContent
          centered
          mainHeading={`Crafting Digital Experiences, \nOne Pixel at a Time`}
          content="I'm an experienced front-end web developer with over a decade of experience in corporate environments, specializing in React, JavaScript, HTML, CSS, and a range of other front-end technologies. I've worked with clients of all sizes, from large corporate businesses, to small shops. I'd like to leverage that expertise by helping you build an online presence that not only reflects your business' vision but also helps turn your business hopes and dreams into reality. Let’s create something exceptional together."
          image={selfPic}
        />

        <SideBySide
          heading="Creating Dynamic Web Experiences with Modern Technologies"
          content="I bring hands-on experience with frameworks like Gatsby, CMS applications such as Contentful, Wordpress, and Clickability, and technologies like GraphQL to create dynamic, user-centered, and maintainable web experiences. I ambitiously work to stay updated and informed of industry trends and continuously strive to expand my skill set."
          image={techLogos}
          alt="tech stack"
          mobileImageStack
          darkBg
          wrapImageBottom
        />

        <BasicContent
          bgColor="white"
          heading="Past Collaborations"
          content="I have had the pleasure of contributing to a substantial number of projects with multiple well-regarded companies."
        />

        <CompanyLogos />

        <Testimonials
          bgColor="black"
          heading="Professional Connections"
          subheading="I've been truly fortunate to work with and learn from some very talented and amazing individuals. Here's what they've said about me."
          content={recommendations}
        />

        <Columns heading="Current Works in Progress">
          <Column
            link="https://mygreens.netlify.app/"
            image={copytec}
            alt="CopyTec Site"
            caption="CopyTec"
          />
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

        <Columns heading="Other Little Creations" bgColor="black">
          <Column
            link="https://multiplication-table-ryan.netlify.app/"
            image={multiplication}
            alt="Multiply Me"
            bgColor="black"
            caption="Multiplication Table"
            github="https://github.com/tchewa/multiply-me"
          />
          <Column
            link="https://codepen.io/tchewa/pen/aVVgJa"
            image={cardCarousel}
            alt="Card Carousel"
            bgColor="black"
            caption="Card Carousel"
            codepen="https://codepen.io/tchewa/pen/aVVgJa"
          />
          <Column
            link="https://ryanw-javascript-clock.netlify.app/"
            image={javascriptClock}
            alt="Javascript Clock"
            caption="Javascript Clock"
            bgColor="black"
            github="https://github.com/tchewa/javascript-clock"
          />
        </Columns>

        {/* <Columns heading="Code Challenges" bgColor="white">
          <Column
            link="/hacker-top-10"
            image={hacker}
            alt="Multiply Me"
            noTarget
            singleItem
            bgColor="gray"
            skills="React,Fetch API"
            github="https://github.com/tchewa/myportfolio/blob/master/src/pages/hacker-top-10.js"
          />
        </Columns> */}
      </Wrapper>
    </>
  )
}

export default IndexPage

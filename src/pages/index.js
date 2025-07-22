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

import multiplication from '../images/site-thumbnails/multiplication.png'
import javascriptClock from '../images/site-thumbnails/javascript-clock.png'
import webDevJeopardy from '../images/site-thumbnails/webdev-jeopardy.png'
import cardCarousel from '../images/site-thumbnails/card-carousel.png'
import CompanyLogos from '../components/CompanyLogos'
import copytec from '../images/site-thumbnails/copytec.png'
import imagineLandscape from '../images/site-thumbnails/imagine-landscape.png'
import bbAutoBody from '../images/site-thumbnails/bbautobody.png'
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
          content="With expertise in frameworks like Gatsby, CMS platforms such as Contentful, WordPress, and Clickability, and technologies like GraphQL, I craft user-focused, scalable, and maintainable web solutions. I’m passionate about staying ahead of industry trends, continuously expanding my skill set to deliver cutting-edge digital experiences."
          image={techLogos}
          alt="tech stack"
          mobileImageStack
          darkBg
          wrapImageBottom
        />

        <BasicContent
          bgColor="white"
          heading="Past Collaborations"
          content="I've had the privilege of contributing to impactful projects with renowned companies, including:"
        />

        <CompanyLogos />

        <Testimonials
          bgColor="black"
          heading="Professional Connections"
          subheading="I'm grateful to have worked alongside talented professionals over the years who have helped me feel inspired and challenged. Here’s what they’ve said about me:"
          content={recommendations}
        />

        <Columns heading="Ongoing Digital Creations">
          <Column
            link="/"
            image={imagineLandscape}
            alt="Imagine Landscape"
            caption="Imagine Landscape"
            noTarget
            comingSoon
          />
          <Column
            link="https://copytecpg.com/"
            image={copytec}
            alt="CopyTec Site"
            caption="CopyTec"
            target="_blank"
          />
          <Column
            link="https://www.bbautobody.shop/"
            image={bbAutoBody}
            alt="B&B Truck and Auto Body, LLC"
            caption="B&B Truck and Auto Body, LLC"
            target="_blank"
          />
        </Columns>

        <Columns heading="Fun Side Projects" bgColor="black">
          <Column
            link="https://ryanwassom.w3spaces.com/jeopardy.html"
            image={webDevJeopardy}
            alt="Web Dev Jeopardy"
            caption="Web Dev Jeopardy"
            bgColor="black"
            target="_blank"
          />
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

import * as React from 'react'
import Wrapper from '../components/Wrapper'
import SideBySide from '../components/SideBySide'
import Columns from '../components/Columns'
import Column from '../components/Column'
import BasicContent from '../components/BasicContent'
import Testimonials from '../components/Testimonials'
import Recommendation from '../components/Recommendation'

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
          content={
            <>
              <Recommendation
                content="I have loved working with Ryan for almost six years now. He was cheerful, he was inquisitive, he was a problem-solver, and he was extremely versatile. As a front end developer he was very collaborative, which was helpful when we had tight deadlines and brand restrictions; Ryan was always quick to jump on a call or grab a room and throw out some creative solutions. If you wanted a super talented, reliable, positive force on your team, Ryan’s your man."
                title="Alec Sears, Digital Marketing Manager at Clearlink"
                link="https://www.linkedin.com/in/alec-sears-b18687a4/"
              />

              <Recommendation
                content="I had the pleasure of working with Ryan for almost 6 years at Clearlink. Not only is he a great person, he’s a machine that can crank through tasks like you believe. He has my full recommendation."
                title="Cody Packer, Senior Software Engineer at Clearlink"
                link="https://www.linkedin.com/in/cody-packer/"
              />

              <Recommendation
                content="I had the pleasure of working alongside Ryan Wassom at Clearlink, and I can confidently say he is a must for any team.  During our time working together, Ryan consistently demonstrated  a strong work ethic, a deep commitment to excellence, and an  impressive ability to tackle challenges head-on. One of the  things that really stands out about Ryan is how naturally he  connects with others. He has a genuine interest in seeing his  colleagues succeed, and his approachable nature makes him a  go-to person for advice and support. Whether tackling  challenging projects or just bringing a sense of camaraderie to  the team, Ryan is a constant source of encouragement and  positivity. In short, Ryan is a tremendous asset to any  organization. I’m grateful to have had the opportunity to work  with him and would highly recommend him to any team looking for  a skilled, driven, and dependable professional."
                title="Taylor Dawson, Staff Software Engineer at AudioEye"
                link="https://www.linkedin.com/in/taylor-dawson-482927123/"
              />

              <Recommendation
                content="Ryan worked on my development team for the past 6 years. During his time on the team he could be counted on to deliver completed work at a consistent, efficient, and reliable pace. He was often the highest throughput member of the team sprint-by-sprint. We have some unique implementations with our technology stack and with each one as Ryan became familiar with them he was able to operate as a significant contributing member to the team both in productivity and problem solving. As a teammate in general, Ryan is friendly, approachable, and collaborative. He enjoys getting to know his teammates and supporting them both with their tasks and questions, but also as a friend. His attitude and demeanor sitting in a group setting at the office are often worthwhile attributes that impact the team in a positive way in their day-to-day. I found Ryan to be talented, reliable, and efficient with his work. Any team looking for a quality development resource who can dial in the front-end aspects of their project will find him to be a value add across the board."
                title="Caleb Flanagan, Senior Software Engineering Manager at
                  Clearlink"
                link="https://www.linkedin.com/in/caleb-flanagan-522a7289/"
              />
            </>
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

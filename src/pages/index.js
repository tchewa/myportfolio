import * as React from 'react'
import Wrapper from '../components/Wrapper'
import SideBySide from '../components/SideBySide'
import Columns from '../components/Columns'
import Column from '../components/Column'
import BasicContent from '../components/BasicContent'
import Testimonials from '../components/Testimonials'

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
import linkedin from '../images/linkedin.png'

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
          heading="People I've Worked With"
          subheading="I've been truly fortunate to work with and learn from some very talented and amazing individuals. Here's what they've said about me."
          content={
            <>
              <div className="recommendation-wrapper">
                <p className="recommendation">
                  "I had the pleasure of working with Ryan for almost 6 years at
                  Clearlink. Not only is he a great person, he’s a machine that
                  can crank through tasks like you wouldn’t believe. He has my
                  full recommendation."
                  <span className="recommender-title">
                    - Cody Packer, Senior Software Engineer at Clearlink
                  </span>
                  <img src={linkedin} alt="linkedin logo" />
                </p>

                <p className="recommendation">
                  "I have loved working with Ryan for almost six years now. He
                  was cheerful, he was inquisitive, he was a problem-solver, and
                  he was extremely versatile. As a front end developer he was
                  very collaborative, which was helpful when we had tight
                  deadlines and brand restrictions; Ryan was always quick to
                  jump on a call or grab a room and throw out some creative
                  solutions. If you wanted a super talented, reliable, positive
                  force on your team, Ryan’s your man."
                  <span className="recommender-title">
                    - Alec Sears, Digital Marketing Manager at Clearlink
                  </span>
                  <img src={linkedin} alt="linkedin logo" />
                </p>

                <p className="recommendation">
                  "I had the pleasure of working alongside Ryan Wassom at
                  Clearlink, and I can confidently say he is a must for any
                  team. During our time working together, Ryan consistently
                  demonstrated a strong work ethic, a deep commitment to
                  excellence, and an impressive ability to tackle challenges
                  head-on. One of the things that really stands out about Ryan
                  is how naturally he connects with others. He has a genuine
                  interest in seeing his colleagues succeed, and his
                  approachable nature makes him a go-to person for advice and
                  support. Whether tackling challenging projects or just
                  bringing a sense of camaraderie to the team, Ryan is a
                  constant source of encouragement and positivity. In short,
                  Ryan is a tremendous asset to any organization. I’m grateful
                  to have had the opportunity to work with him and would highly
                  recommend him to any team looking for a skilled, driven, and
                  dependable professional."
                  <span className="recommender-title">
                    - Taylor Dawson, Staff Software Engineer at AudioEye
                  </span>
                  <img src={linkedin} alt="linkedin logo" />
                </p>

                <p className="recommendation">
                  "Ryan worked on my development team for the past 6 years.
                  During his time on the team he could be counted on to deliver
                  completed work at a consistent, efficient, and reliable pace.
                  He was often the highest throughput member of the team
                  sprint-by-sprint. We have some unique implementations with our
                  technology stack and with each one as Ryan became familiar
                  with them he was able to operate as a significant contributing
                  member to the team both in productivity and problem solving.
                  As a teammate in general, Ryan is friendly, approachable, and
                  collaborative. He enjoys getting to know his teammates and
                  supporting them both with their tasks and questions, but also
                  as a friend. His attitude and demeanor sitting in a group
                  setting at the office are often worthwhile attributes that
                  impact the team in a positive way in their day-to-day. I found
                  Ryan to be talented, reliable, and efficient with his work.
                  Any team looking for a quality development resource who can
                  dial in the front-end aspects of their project will find him
                  to be a value add across the board."
                  <span className="recommender-title">
                    - Caleb Flanagan, Senior Software Engineering Manager at
                    Clearlink
                  </span>
                  <img src={linkedin} alt="linkedin logo" />
                </p>
              </div>
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

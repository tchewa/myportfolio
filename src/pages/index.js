import * as React from 'react'
import Wrapper from '../components/Wrapper'
import selfPic from '../images/self-pic.png'
import SideBySide from '../components/SideBySide'
import techLogos from '../images/tech-logos.png'
import techLogosMobile from '../images/tech-logos-mobile.png'

const IndexPage = () => {
  return (
    <>
      <Wrapper>
        <div className="centered-content">
          <h1>Welcome to my online portfolio!</h1>
          <div className="self-pic">
            <img src={selfPic} alt="self-pic" />
          </div>
          <p className="large">
            I'm a passionate front-end web developer with a strong foundation in
            React, JavaScript, HTML, Sass, and many other front-end web
            technologies, with a little PHP experience sprinkled in
          </p>
        </div>
        <SideBySide
          heading="Crafting Dynamic Web Experiences with Modern Technologies"
          content="I bring hands-on experience with frameworks like Gatsby, CMS applications such as Contentful, Wordpress, and Clickability, and technologies like GraphQL to create dynamic, user-centered, and maintainable web experiences while continuously striving to stay updated with industry trends and expand my skill set. "
          image={techLogos}
          mobileImage={techLogosMobile}
        />
      </Wrapper>
    </>
  )
}

export default IndexPage

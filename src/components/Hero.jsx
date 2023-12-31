import React from "react"
import heroImg from "../assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
            temporibus voluptas veniam nostrum odio provident, accusantium
            assumenda totam sunt reprehenderit autem, beatae saepe? Facilis
            iusto enim nisi tempora temporibus?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="some image" />
        </div>
      </div>
    </section>
  )
}

export default Hero

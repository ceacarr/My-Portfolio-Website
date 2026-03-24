 /* @copyright 2026 Cem Acar. 
  @licance Apache-2.0
*/

import { ButtonPrimary, ButtonOutline } from "./Button"

const Hero = () => {
  return (
    <section 
    id="home"
    className="pt-28 lg:pt-35"
    >
        <div className="container lg:grid lg:grid-cols-2 lg:gap-80 ">
        <div>
        <h2 className="headline-1 max-w-[15ch] sm:max-w-20ch lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 ">
          Welcome!
            Building Scalable Modern Websites for the Future
        </h2>
        <div className="flex flex-wrap gap-4 mb-10 ">
  <ButtonPrimary 
    href="/images/CEM ACAR ENG.pdf"
    label="Download CV"
    icon="download"
    download="CEM ACAR ENG.pdf"
    target="_blank"
  />
  <ButtonOutline 
  href="#about"
    label="Scroll Down"
    icon="arrow_downward"

  />
</div>
        </div>
        <div className="image ">
            <figure className="w-full max-w-[360px] md:max-w-[480px] overflow-hidden rounded-3xl shadow-2xl ">
                <img 
                src="/images/image2.jpeg"
                width={256}
                height={256}
                alt="Cem Acar"
                className="w-full h-full"
                 />
            </figure>
        </div>
        </div>
    </section>
  )
}

export default Hero
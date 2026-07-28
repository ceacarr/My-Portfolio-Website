 /* @copyright 2026 Cem Acar. 
  @licance Apache-2.0
*/

const About = () => {
  return (
    <section
    id="about"
    className="section"
    >
        <div className="container">
    
       <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
        <p className="text-zin-300 mb-4 md:mb-8 md:text-xl md:[max-w-[60ch]">
                      Hello! I'm Cem, a 2026 Management Information Systems graduate from Nisantasi University. 
                      I was born in Balıkesir. I'm 24 years old and live in Istanbul.
                      I'm a Front-End Developer with a great passion for developing 
                      user-centric web applications. I have experience developing projects 
                      using JavaScript, HTML, CSS, React, Node.js, and ASP.NET. I'm skilled
                       in full-stack development concepts, including API integration and
                       secure authentication. I aim to gain professional experience using 
                       my technical skills in a collaborative development environment.
        </p>
        <br />
  
        <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
         
             <img 
             src="/images/icons8-code-64.png" 
             alt="Logo" 
             width={25}
             height={25}
             className="ml-auto md:w-[40px] md:h-[40px] opacity-80" />
        </div>
       </div>

        </div>
    </section>
  )
}

export default About
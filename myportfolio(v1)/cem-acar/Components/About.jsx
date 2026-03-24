 /* @copyright 2024 Cem Acar. 
  @licance Apache-2.0
*/
const aboutItems = [
  {
    label: 'Project done',
    number: 5
  },
  {
    label: 'Years of experience',
    number: 1
  }
];
const About = () => {
  return (
    <section
    id="about"
    className="section"
    >
        <div className="container">
    
       <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
        <p className="text-zin-300 mb-4 md:mb-8 md:text-xl md:[max-w-[60ch]">
                     Hello! I'm Cem, a Management Information Systems student at Nisantası University. I was born in Balıkesir. I'm 24 years old and live in Istanbul. 
                     I'm a future Front-End Developer candidate with a great passion for developing user-centric web applications. 
                     I have experience developing projects using JavaScript, HTML, CSS, and ASP.NET, and I'm currently focusing on learning React and Node.js. 
                     I'm skilled in full-stack development concepts, including API integration and secure authentication. 
                     I aim to gain professional experience using my technical skills and in a collaborative development environment.
        </p>
        <br />
  
        <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
            {
                aboutItems.map(({label, number } ,key ) => (
                <div key={key}>
                       <div className="flex items-center md:mb-2">
                       <span className="text-2xl font-semi md:text-4xl">{number}</span>
                       <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                       </div>
                       <p className="text-sm text-zinc-500">{label}</p>
                </div>
            ))
        }
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
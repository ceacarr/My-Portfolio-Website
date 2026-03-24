 /* @copyright 2024 Cem Acar. 
  @licance Apache-2.0
*/

import ProjectCards from "./ProjectCards";

const works = [
  {
    imgSrc: '/images/camp.png',
    title: 'Full Stack CampApp',
    tags: ['API', 'Auth', 'Development'],
    projectLink: 'https://github.com/ceacarr/CampApp'
  },
  {
    imgSrc: '/images/porsche.png',
    title: 'Museum of Porsche',
    tags: ['HTML', 'CSS'],
    projectLink: 'https://github.com/ceacarr/Museum-Of-Porsche'
  },
  {
    imgSrc: '/images/filemanager.png',
    title: 'File Manager',
    tags: ['JWT', 'Multer'],
    projectLink: 'https://github.com/ceacarr/File-Manager'
  },
  {
    imgSrc: '/images/personel.png',
    title: 'Staff Salary Tracking',
    tags: ['Web-design', 'Asp.Net'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/images/calculator.png',
    title: 'Investment Calculator',
    tags: ['React', 'Development'],
    projectLink: 'https://github.com/ceacarr/Investment-Calculator'
  },

];

const Work = () => {
  return (
    <section
    id="work"
    className=""
    >
        <div className="container">
<h2 className="headline-2 mb-8 "> My Portfolio </h2>
<div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
    {works.map(({ imgSrc, title, tags, projectLink }, key) =>(
          <ProjectCards
          key={key}
          imgSrc={imgSrc}
          title={title}
          tags={tags}
          projectLink={projectLink}
          />
    ))}
</div>
        </div>
    </section>
   
  )
}

export default Work
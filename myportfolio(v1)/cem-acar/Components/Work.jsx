 /* @copyright 2026 Cem Acar. 
  @licance Apache-2.0
*/

import ProjectCards from "./ProjectCards";

const works = [
    {
    imgSrc: '/images/editor - Kopya.png',
    title: 'Nexa-Flow Revision',
    desc: 'Nexa Flow is the revised field creation editor screen of a SCADA-like Protocol Industrial IoT Data Acquisition Service full stack project. The existing editor screen was improved and expanded with a more usable workspace experience.',
    tags: ['Web-design', 'React'],
    projectLink: ''
  },
    {
    imgSrc: '/images/pronnexx.png',
    title: 'Pronnex Project Management',
    desc: 'Pronnex is a project and task management application built with a React frontend and an Express/MongoDB backend. It supports workspaces, projects, task boards, task details, comments, subtasks, members, invitations, archived tasks, profile settings, and dashboard statistics.',
    tags: ['React', 'Express', 'MongoDB'],
    projectLink: 'https://github.com/ceacarr/Pronnex'
  },
  {
    imgSrc: '/images/camp.png',
    title: 'Full Stack CampApp',
    desc: 'This platform allows users to create and view campsites, including authentication, image uploading, and interactive maps. While gaining hands-on experience with HTML, CSS, JavaScript, Node.js, Express, MongoDB, Passport.js, Cloudinary, MapBox, and many other technologies, I also improved my skills in backend development, authentication, and API integrations.',
    tags: ['API', 'Auth', 'Development'],
    projectLink: 'https://github.com/ceacarr/CampApp'
  },
  {
    imgSrc: '/images/porsche.png',
    title: 'Museum of Porsche',
    desc: 'A visual landing page experience focused on layout, styling and responsive presentation.',
    tags: ['HTML', 'CSS'],
    projectLink: 'https://github.com/ceacarr/Museum-Of-Porsche'
  },
  {
    imgSrc: '/images/filemanager.png',
    title: 'File Manager',
    desc: 'A file management project using authentication and file upload workflows.',
    tags: ['JWT', 'Multer'],
    projectLink: 'https://github.com/ceacarr/File-Manager'
  },
  {
    imgSrc: '/images/personel.png',
    title: 'Staff Salary Tracking',
    desc: 'A staff and salary tracking system built with a structured web application approach.',
    tags: ['Web-design', 'Asp.Net'],
    projectLink: 'https://github.com/ceacarr/Personel-Maas-Takip-Programi-PMTP'
  },

  

];

const Work = () => {
  return (
    <section
    id="work"
    className=""
    >
        <div className="container">
<div className="mb-8 max-w-[90ch]">
  <h2 className="headline-2"> My Portfolio </h2>
  <p className="mt-3 text-zinc-400">
    A selection of projects where I practiced full-stack development, interface design,
    authentication flows and real product-style features.
  </p>
</div>

<div className="grid gap-5 sm:grid-cols-2">
    {works.map(({ imgSrc, title, desc, projectLink }, key) => {
      const isLastOddItem = works.length % 2 !== 0 && key === works.length - 1;

      return (
          <ProjectCards
          key={key}
          imgSrc={imgSrc}
          title={title}
          desc={desc}
          projectLink={projectLink}
          variant="compact"
          classes={isLastOddItem ? "sm:col-span-1" : ""}
          />
      );
    })}
</div>
        </div>
    </section>
   
  )
}

export default Work

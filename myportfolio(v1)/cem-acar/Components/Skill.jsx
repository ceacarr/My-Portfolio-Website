 /* @copyright 2024 Cem Acar. 
  @licance Apache-2.0
*/

import SkillCard from "./SkillCard";

const skillItem = [

   {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript (ES6+)',
    desc: 'Interaction'
  },
    {
    imgSrc: '/images/png-sql.png',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React.js',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
   {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
   {
    imgSrc: '/images/net-logo.png',
    label: '.Net',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/git-icon.png',
    label: 'Git Github',
    desc: 'Version Control'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
];

const Skill = () => {
  return (
    <section className="section">
<div className="container">

<h2 className="headline-2"> Essential Tools I Use </h2>
   <p className="text-zinc-400 mt-3 mb-8 max-w-[90ch]">
   Always learning, always building. Here is the stack I use to turn complex ideas into functional web solutions.                         
   </p>
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 items-start ">
       <div> 
        <h3 className="text-zinc-200 text-lg font-semibold mb-5">Programming & Frameworks</h3>
        </div>
  <div>
       <h3 className="text-zinc-200 text-lg font-semibold mb-5">Databases</h3>
  </div>
  <div>
      <h3 className="text-zinc-200 text-lg font-semibold mb-5">Tools</h3>
  </div>
</div>

   <div className="grid gap-3 grid-cols-3 mb-10">
    {
    skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
            key={key}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
            />
    )) 
} 
</div>
   </div>
    </section>
  );
};

export default Skill
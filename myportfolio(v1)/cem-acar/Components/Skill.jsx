 /* @copyright 2026 Cem Acar. 
  @licance Apache-2.0
*/

import SkillCard from "./SkillCard";

const skillGroups = [
  {
    title: "Frontend Development",
    desc: "Building responsive, interactive and clean user interfaces.",
    items: [
      {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript (ES6+)",
        desc: "Interaction",
      },
      {
        imgSrc: "/images/react.svg",
        label: "React.js",
        desc: "Framework",
      },
      {
        imgSrc: "/images/css3.svg",
        label: "CSS",
        desc: "User Interface",
      },
      {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "Styling",
      },
    ],
  },
  {
    title: "Backend Development",
    desc: "Creating server-side logic, APIs and application services.",
    items: [
      {
        imgSrc: "/images/nodejs.svg",
        label: "NodeJS",
        desc: "JavaScript Runtime",
      },
      {
        imgSrc: "/images/expressjs.svg",
        label: "ExpressJS",
        desc: "Backend Framework",
      },
      {
        imgSrc: "/images/net-logo.png",
        label: ".Net",
        desc: "Backend Framework",
      },
    ],
  },
  {
    title: "Database & Tools",
    desc: "Managing data, version control and development workflow.",
    items: [
      {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "NoSQL Database",
      },
      {
        imgSrc: "/images/png-sql.png",
        label: "MySQL",
        desc: "Relational Database",
      },
      {
        imgSrc: "/images/git-icon.png",
        label: "Git Github",
        desc: "Version Control",
      },
    ],
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

   <div className="grid gap-5 lg:grid-cols-3 mb-10">
    {skillGroups.map(({ title, desc, items }, groupKey) => (
      <div
        key={groupKey}
        className="rounded-3xl ring-1 ring-inset ring-zinc-50/10 bg-zinc-800/40 p-5 transition-colors hover:bg-zinc-800/70"
      >
        <div className="mb-5">
          <h3 className="text-zinc-100 text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p>
        </div>

        <div className="grid gap-3">
          {items.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
            key={key}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
            />
          ))}
        </div>
      </div>
    ))}
</div>
   </div>
    </section>
  );
};

export default Skill

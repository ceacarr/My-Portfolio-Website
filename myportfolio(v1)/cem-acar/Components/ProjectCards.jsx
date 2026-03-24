 /* @copyright 2024 Cem Acar. 
  @licance Apache-2.0
*/

import PropTypes from "prop-types";


const ProjectCards = ({
   imgSrc,
   title,
   tags,
   projectLink,
   classes
}) => {
  return (
    <div className={"relative p-5 duration-500 hover:-translate-y-2 hover:shadow-xl rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition colors" + classes}>
       <figure className="img-box aspect-square rounded-lg overflow-hidden mb-3 ">
           <img 
           src={imgSrc}
           alt={title}
           loading='lazy'
           className="img-cover"
           />
       </figure>
       <div className="flex items-center justify-between gap-4 ">
               <div>
                <h3 className="title-1 mb-3">
                    {title}
                </h3>
           <div className="flex flex-wrap items-center gap-2 ">
            {tags.map(( label, key) => (
                 <span 
                 key={key} 
                 className="h-7 items-center text-sm text-zinc-400 bg-zinc-50/5 grid px-2 rounded-lg "
                 >
                    {label}
                 </span>
            ))}
            </div>
          </div>
   <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 mt-auto ">
   <span className="material-symbols-rounded" aria-hidden='true'>
    arrow_outward
    </span>
      </div>
     </div>
    <a 
    href={projectLink}
    target="_blank" 
    className="absolute inset-0"
    >
    </a>
    </div>
  )
}
ProjectCards.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    projectLink:PropTypes.string.isRequired,
    classes:PropTypes.string.isRequired
}

export default ProjectCards
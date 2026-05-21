 /* @copyright 2026 Cem Acar. 
  @licance Apache-2.0
*/

import PropTypes from "prop-types";


const ProjectCards = ({
   imgSrc,
   title,
   desc,
   tags,
   projectLink,
   variant = "default",
   classes
}) => {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-zinc-800/80 ring-1 ring-inset ring-zinc-50/10 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-xl ${isCompact ? "p-3" : "p-4"} ${classes || ""}`}>
       <figure className={`img-box overflow-hidden rounded-2xl bg-zinc-900 ${isFeatured ? "aspect-[16/10] mb-5" : isCompact ? "aspect-[16/9] mb-3" : "aspect-square mb-3"}`}>
           <img 
           src={imgSrc}
           alt={title}
           loading='lazy'
           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
       </figure>
       <div className="flex items-start justify-between gap-4">
               <div className="min-w-0">
                <h3 className={`${isFeatured ? "text-2xl" : "text-lg"} font-semibold text-zinc-50`}>
                    {title}
                </h3>
                {desc && (
                  <p className={`${isFeatured ? "mt-3 text-sm leading-6" : "mt-2 text-xs leading-5"} text-zinc-400`}>
                    {desc}
                  </p>
                )}
          </div>
   <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-400 text-zinc-950">
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
    desc: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink:PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["default", "featured", "compact"]),
    classes:PropTypes.string.isRequired
}
export default ProjectCards

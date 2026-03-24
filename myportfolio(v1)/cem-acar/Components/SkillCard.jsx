 /* @copyright 2026 Cem Acar. 
  @licance Apache-2.0
*/

import PropTypes from "prop-types";

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes 
}) => {
  return (
        <div className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3
         hover:bg-zinc-800 transition-colors group ${classes || ""}`}>

             <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 
             group-hover:bg-zinc-900 transition-colors flex-shrink-0">
                <img 
                src={imgSrc}
                width={32}
                height={32} 
                alt={label}
                className="w-full h-full object-contain"
                />
             </figure>
             <div className="min-w-0">
                <h3 className="text-zinc-200 text-sm md:text-base font-semibold truncate">{label}</h3>
                <p className="text-zinc-400 text-xs truncate">
                    {desc}
                </p>
             </div>
        </div>
  )
  }

SkillCard.propTypes ={
imgSrc: PropTypes.string.isRequired,
label: PropTypes.string.isRequired,
desc: PropTypes.string.isRequired,
classes: PropTypes.string.isRequired
}

export default SkillCard
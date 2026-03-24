 /* @copyright 2024 Cem Acar. 
  @licance Apache-2.0
*/
import {ButtonPrimary} from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/ceacarr'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cem-acar-426809320/'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ceacaar'
  },
];

const Footer = () => {
  return (
    <footer className="section bg-zinc-950/50">
      <div className="container">
        
        <div className="lg:grid lg:grid-cols-12 gap-10 ">
    
          <div className="lg:col-span-8">
            <h2 className="headline-1 text-white mb-10 lg:max-w-[15ch]">
              Solutions for your <br /> next big step.
            </h2>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-30 lg:pl-12 lg:ml-auto">
            <div>
              <p className="mb-4 text-zinc-200 font-medium">Sitemap</p>
              <ul className="space-y-4">
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a 
                      href={href} 
                      className="block text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-zinc-200 font-medium">Socials</p>
              <ul className="space-y-4">
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a 
                      href={href} 
                      target="_blank"
                      className="block text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-24 pt-10">
          <a href="/" 
          className="Logo">
            <img 
            src="/images/icons8-code-64.png"
            width={35}
            height={35}
             alt=""
              />
             <span className="text-2xl font-bold text-sky-400 transition-transform group-hover:scale-110 block">
             </span>
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2026 <span className="text-zinc-200 font-medium">Cem Acar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
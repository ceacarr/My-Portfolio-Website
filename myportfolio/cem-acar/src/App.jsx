 /* @copyright 2024 Cem Acar. 
  @licance Apache-2.0

*/
import Header from "/components/Header";
import Hero from "/components/Hero";
import About from "../Components/About";
import Skill from "../Components/Skill"; 
import Work from "../Components/Work";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-20"> 
        <Hero />
        <About/>
        <Skill/>
        <Work/> 
        <Contact/>
      </main>
       <Footer/>
    
    </>
  );
};
export default App;
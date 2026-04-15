import Image from "next/image";
import imagem from '../public/foto.png'
import { projects } from "@/data/project";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <main className="flex items-center justify-around mt-30">
      <div className="max-w-x1 space-y-6">
          <h3 className="text-sm uppercase tracking-[0.2em] text-lime-400 font-mono">DESENVOLVEDOR BANCO DE DADOS</h3>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight tracking-tight">Pedro Henrique</h1>
          <p className="text-zinc-800 text-lg leading-relaxed max-w-md text-justify">
            Construo produtos web do zero — 
            desde a API até a interface. 
            Foco em código limpo, 
            UX que faz sentido e entregas que não travam.
          </p>
          <div className="mt-8 flex gap-4">
      <a href="" 
      className="
      px-6 py-3 
      bg-lime-400 
      text-black 
      font-semibold 
      rounded-lg 
      hover:bg-lime-300 
      transition">
      Falar comigo
      </a>
      <a href="" className="px-6 py-3 border border-zinc-700 text-black rounded-lg hover:bg-white transition">Ver projetos</a>
    </div>
      </div>
      <div>
        <Image
        className="rounded-full"
        src={imagem}
        alt="foto perfil"
        width={250}
        height={250}
        />
      </div>
    </main>
    <section className="max-w-6x1 ml-65 mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">
        Projetos
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index)=>(
          <ProjectCard 
          key={index}
          title={project.title}
          description={project.description}
          techs={project.techs}
          />
        ))}
      </div>
    </section>
    <section className="max-w-3xl mx-auto ml-65 px-6">
      <h2 className="text-3xl font-bold mb-10">
        Skills
      </h2>
      <Skills />
    </section>
    <section>
      <Experience />
    </section>
    <section>
      <Contact />
    </section>
    <section>
      <Footer />
    </section>
    </>
    
  );
}

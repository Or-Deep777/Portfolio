import { FaGithub } from "react-icons/fa"

type ProjectProps = {
    title: string
    description: string
    techs: string[]
    github?: string
}

export default function ProjectCard({title,description,techs,github}:ProjectProps){
    return(
    <div className="bg-zinc-900 border-zinc-800 rounded-2xl p-6 hover:bg-zinc-600 transition space-y-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">{techs.map((tech,index)=>(
            <span key={index} className="text-xs bg-amber-50 px-2 py-1 rounded-md">
                {tech}
            </span>
        ))}</div>
        <a href={github} target="_blank" className="text-lime-400 hover:underline"><FaGithub className="text-lg"/><span>GitHub Repository</span></a>
    </div>
    )
}
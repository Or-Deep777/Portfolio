export default function Skills(){
    const skills = [
        "Next.js",
        "Nest.js",
        "TypeScript",
        "MySQL",
        "Git / Github",
        "GML",
        "HTML",
        "React",
        "Docker",
        "Tailwind"
    ]
    return(
        <section className="mt-20">
            <h2 className="text-3xl font-semibold mb-8"></h2>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill)=>(
                    <div key={skill} className="px-4 py-2 bg-white rounded-lg border">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}
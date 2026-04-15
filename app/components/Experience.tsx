export default function Experience(){
    return(
        <section className="max-w-6x1 mx-auto px-6 py-20">
          <h2 className="text-3x1 font-semibold mb-12 text-black">
            Experiências
          </h2>
            <div className="space-y-12">
                {/*Item 1*/}
                <div className="grid md:grid-cols-[150px_1fr] gap-6 group">
                <span className="text-zinc-500">2025 - atual</span>
                <div className="transition duration-300 p-6 rounded-lg  border hover:bg-zinc-50">
                    <h3 className="text-x1 font-semibold text-black">Aprendiz</h3>
                    <p className="text-yellow-400 font-medium mt-3 leading-relaxed">Desenvolvimento de pequenos projetos na duração do curso técnico.</p>
                </div>
            </div>
            </div>
        </section>
    )
}
export default function Contact(){
    return(
        <div className="max-w-5x1 mx-auto px-3 py-20">
            <div className="bg-zinc-900/60 border-white/10 rounded-2xl p-10">
            {/*LEFT*/}
            <div className="space-y-4">
                <h2 className="text-4x1 italic text-black font-light">Vamos trabalhar juntos?</h2>
                <p className="text-zinc-400">Aberto a projetos freelancer e oportunidades CLT.</p>
            </div>
            {/*RIGHT*/}
            <div className="space-t-4 text-zinc-400">
                <p className="hover:text-amber-100 transition">souza01pedro04@gmail.com</p>
                <p className="hover:text-amber-100 transition">Github.com/</p>
                <p className="hover:text-amber-100 transition">Linkedin.com/</p>
            </div>
            </div>
        </div>
    )
}
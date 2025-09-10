import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const cards = {
  agency: [
    {
      title: "Décollage réussi",
      desc: "Accompagnement sur le positionnement, le format, et l’intention de formation sur le matériel",
    },
    {
      title: "Montage et diffusion premium",
      desc: "Post-production, habillage musical, diffusion multiplateformes et référencement optimisé",
    },
    {
      title: "Création d’un contenu pilier attrayant",
      desc: "Rédaction des titres, descriptions et vignettes de l’épisode",
    },
    {
      title: "Transformation en posts variés",
      desc: "1 épisode de podcast —> Des Réels Instagram, TikTok, blog, newsletter, posts LinkedIn etc.",
    },
  ],
  training: [
    {
      title: "6 modules de formation vidéos",
      desc: "De l’idée à la mise en ligne, pour créer un podcast et le faire rayonner sur vos réseaux",
    },
    {
      title: "Coaching individuel & collectif",
      desc: "Un œil extérieur pour avancer avec clarté à chaque étape",
    },
    {
      title: "Accès au groupe privé de soutien",
      desc: "Accompagnement, réponses à vos questions, retours sur votre travail et votre réussite",
    },
    {
      title: "Nos outils + templates",
      desc: "Nos process de création, checklists de production, templates de briefs invités, de description et montage. Tout le matériel nécessaire à votre autonomie.",
    },
  ],
};

const Support = () => {
  return (
    <section className="bg-black text-white px-[12px] py-16 font-inter">
        <div className="max-w-[1080px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Trouvez l’accompagnement <br />
          le plus adapté à vos{" "}
          <span className="text-white relative inline-block">
            <span className="relative z-10">objectifs</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-600 z-0 rounded-full blur-sm opacity-80"></span>
          </span>
        </h2>
      </div>

      <div className="bg-gradient-to-br from-[#0f1c26] to-[#101010] rounded-xl p-8 mb-16">
        <div className="md:flex md:justify-between md:items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-[32px] font-semibold text-cyan-400 mb-1">L’Agence.</h3>
            <p className="text-gray-300 mb-1 text-[28px] font-semibold w-[240px]">Une offre clé-en-main</p>
            <p className="text-gray-500 mb-4">Vous enregistrez, on s’occupe du reste</p>
            <button className="bg-white text-black font-semibold px-[30px] py-[19px] rounded-[32px] hover:bg-gray-200 transition">
              Nous contacter
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-2/3">
            {cards.agency.map((item, index) => (
              <div key={index} className="bg-[#000000] py-[38px] px-[32px] rounded-[40px] shadow">
                <IoIosCheckmarkCircleOutline className="text-[28px] mb-[15px] text-[#00BFF8]" />
                <h4 className="text-cyan-300 font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-[18px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#1f1027] to-[#101010] rounded-xl p-8">
        <div className="md:flex md:justify-between md:items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-[32px] font-semibold text-purple-400 mb-1">La Formation.</h3>
            <p className="text-gray-300 mb-4 text-[28px] font-semibold w-[260px]">Pour lancer un podcast à succès en autonomie</p>
            <button className="bg-white text-black font-semibold px-[30px] py-[19px] rounded-[32px] hover:bg-gray-200 transition">
              En savoir plus
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-2/3">
            {cards.training.map((item, index) => (
              <div key={index} className="bg-[#000000] py-[38px] px-[32px] rounded-[40px] shadow">
                <IoIosCheckmarkCircleOutline className="text-[28px] mb-[15px] text-[#AC43FF]" />
                <h4 className="text-purple-300 font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-[18px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>
    </section>
  );
};

export default Support;

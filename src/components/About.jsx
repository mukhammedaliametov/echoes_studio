import React from "react";
import image from "../assets/about.png"; 

const About = () => {
  return (
    <section className="bg-black text-white px-6 py-16 font-sans">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Echoes est un duo entre <br />
          <span className="text-white">
            <span className="text-white">deux entrepreneurs et podcasteurs</span>
          </span>
        </h2>
        <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
          <strong className="text-white">Leur passion commune pour le podcast :</strong> c’est ce qui a motivé Jérémy et Xavier, deux anciens amis de promo, à créer Echoes en 2020. <br />
          Ça fait un bail ! et <strong className="text-white">Ça fait un bail ! et The Big Shift ! voient le jour :</strong> voient le jour : Jérémy veut démocratiser l’investissement immobilier ; Xavier veut sensibiliser aux enjeux climatiques à grande échelle.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start mt-12">
        <div className="w-full md:w-1/2 relative">
          <img
            src={image}
            alt="Jérémy et Xavier"
            className="rounded-xl w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-300 space-y-6 text-sm leading-relaxed text-[20px]">
          <p>
            Seulement leur passion ne suffit pas, et il faut trouver la recette qui fera de leurs hautes ambitions des réussites. <strong className="text-white">Après plus d’un an de tests et d’itérations</strong>, ils trouvent les bonnes stratégies de production et de Social Media : en quelques semaines, leurs 2 podcasts font désormais partie des plus écoutés de leur catégorie.
          </p>
          <p>
            Depuis, ils ont accompagné <strong className="text-white">plus de 20 startups, grands groupes et podcasteurs</strong> à lancer leurs podcasts, les transformer en contenus de contenus et atteindre leurs objectifs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

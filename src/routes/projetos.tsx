import { createFileRoute } from "@tanstack/react-router";
import projeto1 from "@/assets/projeto-1.png";
import projeto2 from "@/assets/projeto-2.png";
import projeto3 from "@/assets/projeto-3.png";
import projeto4 from "@/assets/projeto-4.png";
import projeto5 from "@/assets/projeto-5.png";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — HRS-HORUS Construtora e Incorporadora" },
      {
        name: "description",
        content:
          "Portfólio de empreendimentos residenciais, corporativos e de uso misto desenvolvidos pela HRS-HORUS.",
      },
      { property: "og:title", content: "Projetos — HRS-HORUS" },
      {
        property: "og:description",
        content:
          "Portfólio de empreendimentos residenciais e corporativos da HRS-HORUS.",
      },
      { property: "og:image", content: projeto1 },
    ],
  }),
  component: ProjetosPage,
});

const projects = [
  { tag: "Residencial", img: projeto1 },
  { tag: "Residencial", img: projeto2 },
  { tag: "Interiores", img: projeto3 },
  { tag: "Residencial", img: projeto4 },
  { tag: "Vertical", img: projeto5 },
];

function ProjetosPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-6">
            Portfólio
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Empreendimentos que definem o skyline brasileiro.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((p, i) => (
            <article key={i} className={`group ${i % 2 === 1 ? "md:mt-16" : ""}`}>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={p.img}
                  alt={`Projeto HRS-HORUS — ${p.tag}`}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mt-4">
                {p.tag}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

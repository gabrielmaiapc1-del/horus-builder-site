import { createFileRoute } from "@tanstack/react-router";
import projectResidencial from "@/assets/project-residencial.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";
import projectTower from "@/assets/project-tower.jpg";
import heroImg from "@/assets/hero-architecture.jpg";

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
      { property: "og:image", content: projectResidencial },
    ],
  }),
  component: ProjetosPage,
});

const projects = [
  {
    title: "Residencial Lumina",
    location: "São Paulo, SP",
    year: "2024",
    area: "14.500 m²",
    tag: "Residencial",
    img: projectResidencial,
  },
  {
    title: "Horus Business Center",
    location: "Curitiba, PR",
    year: "2023",
    area: "32.000 m²",
    tag: "Corporativo",
    img: projectCorporate,
  },
  {
    title: "Edifício Horizonte JK",
    location: "Balneário Camboriú, SC",
    year: "2024",
    area: "21.800 m²",
    tag: "Residencial",
    img: heroImg,
  },
  {
    title: "Torres Aurora",
    location: "Goiânia, GO",
    year: "2022",
    area: "28.300 m²",
    tag: "Uso Misto",
    img: projectTower,
  },
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
            <article
              key={p.title}
              className={`group ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="overflow-hidden mb-6 rounded-sm">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.location}`}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                    {p.tag}
                  </p>
                  <h3 className="font-display text-3xl mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {p.location} — {p.year}
                  </p>
                </div>
                <div className="font-mono text-[10px] border border-foreground/20 px-2 py-1 shrink-0">
                  {p.area}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

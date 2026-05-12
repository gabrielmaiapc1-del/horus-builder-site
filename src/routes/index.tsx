import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Star, Play, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import projectResidencial from "@/assets/project-residencial.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";
import projeto1 from "@/assets/projeto-1.png";
import projeto2 from "@/assets/projeto-2.png";
import projeto3 from "@/assets/projeto-3.png";
import projeto4 from "@/assets/projeto-4.png";
import projeto5 from "@/assets/projeto-5.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HRS-HORUS — Construtora e Incorporadora de Alto Padrão" },
      {
        name: "description",
        content:
          "Engenharia de precisão e arquitetura que transcende o tempo. Empreendimentos residenciais e corporativos da HRS-HORUS Construtora e Incorporadora.",
      },
      { property: "og:title", content: "HRS-HORUS — Construtora e Incorporadora" },
      {
        property: "og:description",
        content:
          "Empreendimentos residenciais e corporativos de alto padrão, com rigor técnico e design atemporal.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [sent, setSent] = useState(false);
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="font-mono text-xs text-accent mb-6 tracking-[0.2em] uppercase">
                ( 01 ) A Nova Forma do Morar
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-balance mb-8">
                Arquitetura que <i className="font-serif">transcende</i> o tempo.
              </h1>
              <p className="max-w-md text-muted-foreground leading-relaxed mb-10">
                A HRS-HORUS combina precisão técnica com a sensibilidade do alto luxo,
                construindo legados sólidos em todo o território nacional.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projetos"
                  className="bg-foreground text-background px-6 py-3 rounded-sm text-sm uppercase tracking-wider hover:bg-accent transition-colors"
                >
                  Ver Projetos
                </Link>
                <Link
                  to="/contato"
                  className="border border-foreground/20 px-6 py-3 rounded-sm text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                >
                  Fale com a HRS
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
              <img
                src={heroArchitecture}
                alt="Detalhe arquitetônico de empreendimento HRS-HORUS"
                width={896}
                height={1120}
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-16 border-b border-background/10 pb-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-2">Portfólio Selecionado</h2>
              <p className="text-background/50 font-mono text-xs uppercase tracking-widest">
                Residenciais de Alto Padrão & Corporativos
              </p>
            </div>
            <Link
              to="/projetos"
              className="text-xs uppercase tracking-[0.2em] border-b border-accent pb-1 text-accent hover:text-background transition-colors w-fit"
            >
              Ver Todos
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[projectResidencial, projectCorporate].map((src, i) => (
              <article
                key={i}
                className="group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={src}
                    alt="Empreendimento HRS-HORUS"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <img
                src={projeto3}
                alt="Detalhe de materiais nobres em obra HRS-HORUS"
                width={896}
                height={1184}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/10 -z-0" />
            </div>
            <div className="animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">
                Compromisso com o <i>Impecável</i>
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                    Engenharia de Valor
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Otimizamos processos construtivos sem jamais comprometer a estética ou a
                    segurança estrutural.
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                    Sustentabilidade Real
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Certificações reconhecidas que garantem eficiência energética e respeito
                    ao meio ambiente em cada empreendimento.
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                    Entrega Rigorosa
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mais de 500.000 m² entregues rigorosamente dentro dos prazos acordados
                    com nossos clientes e investidores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12">
            <div>
              <p className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-3">
                @hrs.construtora
              </p>
              <h2 className="font-display text-4xl md:text-5xl">No Instagram</h2>
            </div>
            <a
              href="https://www.instagram.com/hrs.construtora/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] border-b border-accent pb-1 text-accent hover:text-foreground transition-colors w-fit"
            >
              <Instagram className="size-4" /> Seguir
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[projeto1, projeto2, projeto3, projeto4, projeto5].map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/hrs.construtora/"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-sm aspect-square"
              >
                <img
                  src={src}
                  alt={`Post Instagram HRS ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors grid place-items-center">
                  {i === 2 ? (
                    <Play className="size-8 text-background opacity-90" fill="currentColor" />
                  ) : (
                    <Instagram className="size-6 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-24 bg-muted/40 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-3">
              Avaliações
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Quem constrói com a HRS, recomenda.
            </h2>
            <div className="flex items-center justify-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
              <span className="ml-3 font-mono text-xs text-muted-foreground tracking-widest uppercase">
                4.9 / 5 · Clientes HRS
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Camila R.",
                r: "Atendimento impecável do início ao fim. A obra foi entregue antes do prazo e com acabamento perfeito.",
              },
              {
                n: "Marcos T.",
                r: "Equipe técnica de altíssimo nível. Recomendo a HRS para quem busca seriedade e qualidade real.",
              },
              {
                n: "Juliana M.",
                r: "Casa dos sonhos realizada. Cuidado com cada detalhe e total transparência durante todo o projeto.",
              },
            ].map((t) => (
              <figure
                key={t.n}
                className="bg-background border border-border rounded-sm p-8 flex flex-col gap-6"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground/80">
                  "{t.r}"
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-auto">
                  {t.n} — Cliente
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/avaliacoes"
              className="text-xs uppercase tracking-[0.2em] border-b border-accent pb-1 text-accent hover:text-foreground transition-colors"
            >
              Ver todas as avaliações
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-foreground text-background rounded-sm px-8 py-16 md:py-20 md:px-16 flex flex-col md:flex-row md:items-end gap-8 justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
              Próximos Empreendimentos
            </p>
            <h3 className="font-display text-3xl md:text-4xl max-w-xl">
              Construa com quem entende de legado.
            </h3>
          </div>
          <Link
            to="/contato"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-sm text-sm uppercase tracking-wider w-fit hover:bg-background hover:text-foreground transition-colors"
          >
            Solicitar Proposta →
          </Link>
        </div>
      </section>
    </>
  );
}

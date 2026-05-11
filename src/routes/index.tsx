import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-architecture.jpg";
import projectResidencial from "@/assets/project-residencial.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";
import valuesDetail from "@/assets/values-detail.jpg";

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
                src={heroImg}
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
            <article className="group cursor-pointer animate-fade-up">
              <div className="overflow-hidden mb-6 rounded-sm">
                <img
                  src={projectResidencial}
                  alt="Residencial Lumina — fachada"
                  width={1280}
                  height={832}
                  loading="lazy"
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-1">Residencial Lumina</h3>
                  <p className="text-background/40 text-sm">São Paulo, SP — 2024</p>
                </div>
                <div className="font-mono text-[10px] border border-background/20 px-2 py-1 shrink-0">
                  14.500 m²
                </div>
              </div>
            </article>

            <article className="group cursor-pointer animate-fade-up [animation-delay:100ms]">
              <div className="overflow-hidden mb-6 rounded-sm">
                <img
                  src={projectCorporate}
                  alt="Horus Business Center — lobby"
                  width={1280}
                  height={832}
                  loading="lazy"
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-1">Horus Business Center</h3>
                  <p className="text-background/40 text-sm">Curitiba, PR — 2023</p>
                </div>
                <div className="font-mono text-[10px] border border-background/20 px-2 py-1 shrink-0">
                  32.000 m²
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <img
                src={valuesDetail}
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

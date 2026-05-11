import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Engenharia & Serviços — HRS-HORUS" },
      {
        name: "description",
        content:
          "Construção, incorporação imobiliária, gerenciamento de obras e consultoria técnica pela HRS-HORUS Construtora e Incorporadora.",
      },
      { property: "og:title", content: "Engenharia & Serviços — HRS-HORUS" },
      {
        property: "og:description",
        content: "Construção, incorporação, gerenciamento e consultoria técnica.",
      },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    n: "01",
    title: "Construção Civil",
    desc: "Execução completa de obras residenciais, corporativas e industriais com equipe técnica própria, controle de cronograma e gestão rigorosa de qualidade.",
  },
  {
    n: "02",
    title: "Incorporação Imobiliária",
    desc: "Estruturação de empreendimentos do estudo de viabilidade ao registro do memorial — incluindo análise jurídica, financeira e de mercado.",
  },
  {
    n: "03",
    title: "Gerenciamento de Obras",
    desc: "Coordenação técnica, financeira e contratual de obras de terceiros, garantindo previsibilidade de prazos, custos e padrão de entrega.",
  },
  {
    n: "04",
    title: "Consultoria Técnica",
    desc: "Pareceres estruturais, due diligence de obras e suporte a investidores e fundos imobiliários em decisões de alto impacto.",
  },
];

function ServicosPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-6">
            O que fazemos
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance max-w-3xl">
            Engenharia integrada, do terreno à chave entregue.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto divide-y divide-border border-y border-border">
          {services.map((s) => (
            <article key={s.n} className="py-10 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2 font-mono text-xs text-accent uppercase tracking-widest">
                {s.n}
              </div>
              <h3 className="md:col-span-4 font-display text-3xl leading-tight">{s.title}</h3>
              <p className="md:col-span-6 text-muted-foreground leading-relaxed text-sm">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-foreground text-background rounded-sm px-8 py-14 md:px-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl max-w-xl">
            Tem um terreno, projeto ou empreendimento em mente?
          </h2>
          <Link
            to="/contato"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-sm text-sm uppercase tracking-wider hover:bg-background hover:text-foreground transition-colors"
          >
            Solicitar Proposta →
          </Link>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import valuesDetail from "@/assets/values-detail.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Institucional — HRS-HORUS Construtora e Incorporadora" },
      {
        name: "description",
        content:
          "Conheça a HRS-HORUS: trajetória, valores e visão de uma construtora e incorporadora referência em obras de alto padrão no Brasil.",
      },
      { property: "og:title", content: "Institucional — HRS-HORUS" },
      {
        property: "og:description",
        content: "Trajetória, valores e visão da HRS-HORUS Construtora e Incorporadora.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <section className="px-6 pt-20 pb-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-6">
            Institucional
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
            Construímos para durar — em estrutura, em estética e em relação.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <img
            src={valuesDetail}
            alt="Detalhe de acabamento"
            width={896}
            height={1184}
            loading="lazy"
            className="w-full aspect-[3/4] object-cover rounded-sm"
          />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              A <strong className="text-foreground">HRS-HORUS Construtora e Incorporadora LTDA</strong> nasceu da
              convicção de que cada empreendimento deve unir engenharia rigorosa, design
              atemporal e respeito profundo pelo cliente final.
            </p>
            <p>
              Atuamos em todo o ciclo de desenvolvimento imobiliário — da prospecção do
              terreno e estudo de viabilidade à entrega das chaves — com equipe própria de
              engenheiros, arquitetos e mestres de obras.
            </p>
            <p>
              Nosso portfólio reúne residenciais de alto padrão, edifícios corporativos e
              empreendimentos de uso misto, sempre desenvolvidos com olhar para o
              entorno urbano e para o legado de longo prazo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { k: "Missão", v: "Transformar terrenos em legados que valorizam pessoas, cidades e investidores." },
            { k: "Visão", v: "Ser referência nacional em construção e incorporação de alto padrão." },
            { k: "Valores", v: "Rigor técnico, transparência, sustentabilidade e cuidado com o detalhe." },
          ].map((b) => (
            <div key={b.k}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-3">
                {b.k}
              </p>
              <p className="font-display text-2xl leading-snug">{b.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">Vamos conversar?</h2>
          <Link
            to="/contato"
            className="inline-block bg-foreground text-background px-6 py-3 rounded-sm text-sm uppercase tracking-wider hover:bg-accent transition-colors"
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </>
  );
}

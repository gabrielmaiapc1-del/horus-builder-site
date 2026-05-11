import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/avaliacoes")({
  head: () => ({
    meta: [
      { title: "Avaliações de Clientes — HRS-HORUS Construtora" },
      {
        name: "description",
        content:
          "Depoimentos e avaliações de clientes da HRS-HORUS Construtora e Incorporadora.",
      },
    ],
  }),
  component: AvaliacoesPage,
});

const reviews = [
  {
    n: "Camila R.",
    p: "Residencial",
    r: "Atendimento impecável do início ao fim. A obra foi entregue antes do prazo e com acabamento perfeito. Time muito comprometido e transparente em cada etapa.",
  },
  {
    n: "Marcos T.",
    p: "Corporativo",
    r: "Equipe técnica de altíssimo nível. Recomendo a HRS para quem busca seriedade e qualidade real. Faço questão de indicar a todos os meus contatos.",
  },
  {
    n: "Juliana M.",
    p: "Residencial",
    r: "Casa dos sonhos realizada. Cuidado com cada detalhe e total transparência durante todo o projeto. A entrega superou todas as expectativas que tínhamos.",
  },
  {
    n: "Rafael L.",
    p: "Reforma",
    r: "Profissionalismo do orçamento até a entrega. Cumpriram prazos e mantiveram o canal de comunicação sempre aberto. Voltarei a contratar com certeza.",
  },
  {
    n: "Patrícia S.",
    p: "Residencial",
    r: "Acabamento de altíssimo padrão. A HRS realmente entende de obra de luxo e entrega exatamente o que promete. Estamos morando há um ano e tudo perfeito.",
  },
  {
    n: "Eduardo V.",
    p: "Investidor",
    r: "Como investidor, valorizo previsibilidade. A HRS entrega cronograma, qualidade e relatórios claros. Já é o terceiro empreendimento que contratamos juntos.",
  },
];

function AvaliacoesPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-6">
            Avaliações
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl mb-8">
            A confiança de quem constrói conosco.
          </h1>
          <div className="flex items-center gap-2 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-current" />
            ))}
            <span className="ml-3 font-mono text-xs text-muted-foreground tracking-widest uppercase">
              4.9 / 5 · baseado em mais de 80 clientes
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {reviews.map((t) => (
            <figure
              key={t.n}
              className="bg-background border border-border rounded-sm p-8 flex flex-col gap-5"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/80 leading-relaxed">
                "{t.r}"
              </blockquote>
              <figcaption className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-auto">
                {t.n} — {t.p}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-6">
          Pronto para construir com a HRS?
        </h2>
        <Link
          to="/contato"
          className="inline-block bg-foreground text-background px-6 py-3 rounded-sm text-sm uppercase tracking-wider hover:bg-accent transition-colors"
        >
          Solicitar Proposta
        </Link>
      </section>
    </>
  );
}
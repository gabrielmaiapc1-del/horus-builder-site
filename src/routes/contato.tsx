import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — HRS-HORUS Construtora e Incorporadora" },
      {
        name: "description",
        content:
          "Entre em contato com a HRS-HORUS para projetos, parcerias e oportunidades de incorporação.",
      },
      { property: "og:title", content: "Contato — HRS-HORUS" },
      {
        property: "og:description",
        content: "Fale com a HRS-HORUS sobre seu próximo empreendimento.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-6">
            Contato
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Vamos construir o seu próximo legado.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                Escritório
              </p>
              <p className="text-sm leading-relaxed">
                Condá — Presidente Médici
                <br />
                Chapecó, SC — 89801-100
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                Telefone
              </p>
              <p className="text-sm">
                <a href="tel:+5549991132566" className="hover:text-accent transition-colors">
                  +55 (49) 99913-2566
                </a>
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                E-mail
              </p>
              <p className="text-sm">contato@hrshorus.com.br</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                Razão Social
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                HRS-HORUS Construtora e Incorporadora LTDA
              </p>
            </div>
          </div>

          <form
            className="md:col-span-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Nome" name="nome" required />
              <Field label="Empresa" name="empresa" />
              <Field label="E-mail" name="email" type="email" required />
              <Field label="Telefone" name="telefone" />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                required
                rows={6}
                className="w-full bg-transparent border-b border-foreground/20 focus:border-accent outline-none py-3 text-sm resize-none transition-colors"
              />
            </div>
            <div className="flex items-center justify-between gap-6 pt-4">
              <p className="text-xs text-muted-foreground">
                Retornaremos em até 1 dia útil.
              </p>
              <button
                type="submit"
                className="bg-foreground text-background px-6 py-3 rounded-sm text-sm uppercase tracking-wider hover:bg-accent transition-colors"
              >
                Enviar Mensagem →
              </button>
            </div>
            {sent && (
              <p className="text-sm text-accent font-mono uppercase tracking-widest pt-4">
                ✓ Mensagem enviada. Em breve entraremos em contato.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
            Localização
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Onde nos encontrar</h2>
          <div className="rounded-sm overflow-hidden border border-border shadow-lg">
            <iframe
              title="Mapa HRS-HORUS — Chapecó, SC"
              src="https://www.google.com/maps?q=Rua+Cond%C3%A1,+Presidente+M%C3%A9dici,+Chapec%C3%B3+-+SC,+89801-100&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-foreground/20 focus:border-accent outline-none py-3 text-sm transition-colors"
      />
    </div>
  );
}

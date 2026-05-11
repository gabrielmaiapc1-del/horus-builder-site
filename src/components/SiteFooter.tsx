import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo-hrs.png";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background/60 py-20 px-6 mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="HRS Horus" className="h-14 w-auto mb-6 rounded-sm" />
          <p className="max-w-sm text-sm leading-relaxed mb-8">
            Elevando o padrão da construção civil brasileira através da excelência técnica
            e do design atemporal. Construtora e incorporadora com legado em obras de alto
            padrão.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/hrs.construtora/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram HRS Construtora"
              className="size-10 rounded-full border border-background/10 grid place-items-center hover:bg-accent hover:border-accent transition-all"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-widest text-background mb-6">
            Escritório
          </h5>
          <ul className="space-y-4 text-sm">
            <li>
              São Paulo, SP
              <br />
              <span className="text-xs text-background/30">
                Av. Brigadeiro Faria Lima, 3477
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-widest text-background mb-6">
            Contato
          </h5>
          <ul className="space-y-4 text-sm">
            <li>+55 11 3456-7890</li>
            <li>contato@hrshorus.com.br</li>
            <li className="pt-4">
              <Link
                to="/contato"
                className="text-xs uppercase text-accent font-mono hover:underline"
              >
                Trabalhe Conosco →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-background/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} HRS-HORUS Construtora e Incorporadora LTDA. Todos os
          direitos reservados.
        </p>
        <p className="text-[10px] uppercase tracking-widest">Feito com rigor técnico.</p>
      </div>
    </footer>
  );
}

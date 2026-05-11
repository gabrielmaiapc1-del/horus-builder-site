import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/projetos", label: "Projetos" },
  { to: "/sobre", label: "Institucional" },
  { to: "/servicos", label: "Engenharia" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tighter font-semibold">HRS—HORUS</span>
          <span className="font-mono text-[10px] text-accent uppercase tracking-widest leading-none hidden sm:inline">
            Construtora & Incorporadora
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium uppercase tracking-wider">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="bg-foreground text-background px-5 py-2.5 rounded-sm hover:bg-accent transition-colors"
          >
            Fale Conosco
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-wider">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="bg-foreground text-background px-5 py-3 rounded-sm w-fit"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

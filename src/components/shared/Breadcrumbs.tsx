import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Migas de pan" className="mb-4">
      <ol className="flex items-center gap-1.5 text-xs text-neutral-400 flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-orange-500 transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-neutral-300 font-medium">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

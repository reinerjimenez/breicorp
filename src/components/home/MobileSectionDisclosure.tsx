"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface MobileSectionDisclosureProps {
  title: string;
  summary: string;
  children: ReactNode;
}

export function MobileSectionDisclosure({
  title,
  summary,
  children,
}: MobileSectionDisclosureProps) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div>
      <div className="border-b border-slate-200 bg-white px-4 py-4 md:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={contentId}
          onClick={() => setOpen((current) => !current)}
          className="mx-auto flex min-h-14 w-full max-w-xl items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition-colors hover:border-orange-200 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <span>
            <span className="block text-sm font-black text-slate-950">{title}</span>
            <span className="mt-0.5 block text-xs leading-5 text-slate-600">{summary}</span>
          </span>
          <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-orange-700">
            {open ? "Ver menos" : "Ver más"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </span>
        </button>
      </div>
      <div id={contentId} className={open ? "block" : "hidden md:block"}>
        {children}
      </div>
    </div>
  );
}

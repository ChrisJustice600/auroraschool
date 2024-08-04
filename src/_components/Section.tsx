import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

export default function Section({ className, id, children }: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-4 m-auto", className)}>
      <div className="max-w-5xl text-center mx-auto">{children}</div>
    </section>
  );
}

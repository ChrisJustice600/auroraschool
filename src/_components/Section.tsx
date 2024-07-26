import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export default function Section(
  props: PropsWithChildren<{ className?: string }>
) {
  return (
    <section className={cn(" px-4 py-4 m-auto", props.className)}>
      <div className="max-w-5xl text-center mx-auto"> {props.children}</div>
    </section>
  );
}

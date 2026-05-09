import { cn } from "@acme/ui";

interface SectionHeadingProps {
  title: string;
  description?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "border-l-primary relative mb-8 flex w-fit border-l-3 pl-4 text-center",
        align === "center" && "w-full border-l-0 pl-0 text-center",
        className,
      )}
    >
      {title && (
        <h2 className="text-primary text-2xl font-bold uppercase">{title}</h2>
      )}
    </div>
  );
}

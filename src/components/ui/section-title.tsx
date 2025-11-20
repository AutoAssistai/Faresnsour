import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "text-center items-center" : "text-right",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold text-primary-200">{eyebrow}</p>
      ) : null}
      <h2 className="text-h2 font-semibold text-text-high leading-tight text-balance">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-lg text-text-medium text-balance">
          {description}
        </p>
      ) : null}
    </div>
  );
}


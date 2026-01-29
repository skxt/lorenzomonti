interface SectionTitleProps {
  title: string;
  description?: string;
  leftAlign?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({
  title,
  description,
  leftAlign,
  children,
  className = ""
}: SectionTitleProps) => {
  return (
    <div className={className}>
      <h1
        className={`font-sans text-4xl/12 font-bold max-w-2xl bg-linear-to-r from-white to-white/50 bg-clip-text ${leftAlign ? "md:text-left text-center" : "text-center"}`}
      >
        {title}
      </h1>
      {children ? (
        children
      ) : (
        description && (
          <p
            className={`text-base text-zinc-500 max-w-lg mt-2 ${leftAlign ? "text-center md:text-left" : "text-center"}`}
          >
            {description}
          </p>
        )
      )}
    </div>
  );
};

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const SectionContainer = ({ children, className = "" }: Props) => {
  return (
    <div className={`py-12 lg:py-24 px-6 lg:px-24 ${className}`}>
      {children}
    </div>
  );
};

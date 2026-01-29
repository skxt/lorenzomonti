interface Props {
    className?: string;
    children: React.ReactNode;
}

export const SectionContainer = ({ children, className = "" }: Props) => {
    return (
        <div className={`py-24 px-6 md:px-24 ${className}`}>
            {children}
        </div>
    );
}
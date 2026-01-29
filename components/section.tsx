interface Props {
    children: React.ReactNode;
}

export const Section = ({ children }: Props) => {
    return (
        <section className="border-b border-blue-100">
            {children}
        </section>
    );
}
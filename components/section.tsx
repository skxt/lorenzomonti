interface Props {
    children: React.ReactNode;
    id?: string;
}

export const Section = ({ children, id }: Props) => {
    return (
        <section id={id} className="border-b border-blue-100">
            {children}
        </section>
    );
}
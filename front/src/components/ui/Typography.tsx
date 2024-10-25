type TypographyProps = {
    children: React.ReactNode
    level: 1 | 2 | 3 | 4 | 5 | 6
}

const style = {
    1: "text-4xl my-10",
    2: "text-3xl my-8",
    3: "text-2xl my-6",
    4: "text-xl my-4",
    5: "text-lg",
    6: "text-base"
}

const Typography = ({ children, level, ...rest }: TypographyProps) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return (
        <Tag className={`${style[level]} font-bold text-red-400 my-10`}
        {...rest}>
            {children}
        </Tag>
    );
}

export default Typography;
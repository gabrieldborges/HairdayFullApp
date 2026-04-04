import React from "react"
import Container from "./Container";

import { cva, type VariantProps } from "class-variance-authority";

export const CardVariants = cva(`rounded-xl min-h-[54.75rem] `,
    {
        variants: {
            variant: {
                "primary": "bg-gray-700",
                "secondary": "bg-gray-800"
            },
            size: {
                md: ``, lg: `flex-1`
            },
        },
        defaultVariants: {
            size: "md",
            variant: "primary"
        },
    },
);
interface CardProps extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof CardVariants> {
}

export default function Card({
    className,
    variant,
    size = "md",
    children,
    ...props }: CardProps) {
    return (
        <Container size={size} className={CardVariants({ size, variant, className })}>
            <div >
                {children}
            </div>
        </Container>
    )
}
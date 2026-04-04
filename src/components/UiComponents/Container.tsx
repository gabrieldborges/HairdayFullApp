import React from "react"

import { cva, type VariantProps } from "class-variance-authority";

export const ContainerVariants = cva(
  `
  mx-auto md-max-w-[90rem]
    `,
  {
    variants: {
      size: {
        md: `px-4 md:px-20`,
        lg : `px-4 md:px-28`,
        main : "p-1"
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface ContainerProps extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof ContainerVariants> {
    as?: keyof React.JSX.IntrinsicElements
}

export default function Container({
    as = "section",
    className,
    size,
    children,
    ...props }: ContainerProps) {
    return (
        React.createElement(as, {
            className: ContainerVariants({ size, className }),
            ...props
        },
            children)
    )
}
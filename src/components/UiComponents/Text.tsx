import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const TextVariants = cva("text-gray-200", {
    variants: {
        variant: {
            "title-lg-bold": "text-[1.5rem] leading-6 font-bold",
            "title-md-bold": "text-[1rem] leading-6 font-bold",
            "title-sm-bold": "text-[0.875rem] leading-5 font-bold",
            "text-md-regular": "text-[1rem] leading-6 font-normal",
            "text-sm-regular": "text-[0.875rem] leading-5 font-normal",
        },

    },
    defaultVariants: {
        variant: "text-md-regular",
    }
})

interface TextProps extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof TextVariants> {
    as?: keyof React.JSX.IntrinsicElements
}

export default function Text({ as = "span", className, children, variant, ...props }: TextProps) {
    return (
        React.createElement(as, { className: TextVariants({ variant, className, }), ...props }, children)
    )
}
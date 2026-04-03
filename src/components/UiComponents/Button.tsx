import type React from "react"
import Text from "./Text"
import { cva, type VariantProps } from "class-variance-authority"

const ButtonVariants = cva("flex justify-center items-center", {
    variants: {
        variant: {
            "primary": `bg-yellow border-2 border-yellow
             hover:border-yellow-light`,
        },
        size: {
            "lg": "py-4.5 px-[8.59375rem] rounded-lg"
        },
        disabled: {
            true: "opacity-30"
        }

    },
    defaultVariants: {
        variant: "primary",
        size: "lg",
        disabled: false

    }
})




interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof ButtonVariants> {

}

export default function Button({ children, disabled, variant, size, className, ...props }: ButtonProps) {
    return (
        <button className={ButtonVariants({ variant, size, className, disabled })}{...props}>
            <Text variant={"title-sm-bold"} className="text-gray-900">
                {children}
            </Text>
        </button>
    )
}
import type React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import Text from "./Text"

const TimeButtonWrapperVariants = cva(`
    flex justify-center items-center transition
    duration-150 cursor-pointer
    border gap-2 group
    w-[4.90625rem] h-10
    `, {
    variants: {
        variant: {
            "primary": `border-gray-500 focus-within:border-yellow
            bg-gray-600 hover:bg-gray-500
            `,
        },
        size: {
            "lg": "py-2 px-4.5 rounded-lg"
        },
        disabled: {
            true: "pointer-events-none border-gray-600 bg-gray-900/0"
        },
        selected: {
            true: "border-yellow bg-gray-500"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "lg",
        disabled: false,
        selected: false
    }
})

const TimeButtonVariants = cva(`
    flex justify-center items-center transition duration-150
    flex-1 outline-none
    `, {
    variants: {
        variant: {
            "primary": `group-focus:text-yellow`,
        },
        disabled: {
            true: "text-gray-500"
        },
        selected: {
            true: "text-yellow"
        }
    },
    defaultVariants: {
        variant: "primary",
        disabled: false,
        selected: false
    }
})


interface TimeButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof TimeButtonWrapperVariants> { }

export default function TimeButton({ children, disabled, variant, size, className, selected, ...props }: TimeButtonProps) {
    return (
        <button type="button" className={TimeButtonWrapperVariants({ variant, size, className, disabled, selected })}
            {...props}>
            <Text className={TimeButtonVariants({ variant, disabled, selected })}>
                {children || "09:00"}
            </Text>
        </button>
    )
}

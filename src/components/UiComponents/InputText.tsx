import type React from "react"
import Icon from "./Icon"
import { iconsLib } from "./Icon"
import { cva, type VariantProps, cx } from "class-variance-authority"
import TextVariants from "./Text"

const InputTextWrapperVariants = cva(`
    flex justify-center items-center transition duration-150
    border gap-2 focus-within:border-yellow-dark
    
    `, {
    variants: {
        variant: {
            "primary": `border-gray-500 `,
        },
        size: {
            "lg": "p-3 rounded-lg"
        },


    },
    defaultVariants: {
        variant: "primary",
        size: "lg",

    }
})


const InputTextVariants = cva(`
    flex justify-center items-center transition duration-150 
    flex-1 outline-none 
    focus-within:placeholder:opacity-0
    `, {
    variants: {
        variant: {
            "primary": `text-gray-200 placeholder:text-gray-400 `,
        },
        size: {
            "lg": ""
        },
        disabled: {
            true: "pointer-events-none"
        }

    },
    defaultVariants: {
        variant: "primary",
        size: "lg",
        disabled: false

    }
})


interface InputTextProps extends Omit<React.ComponentProps<"input">, "size" | "disabled">, VariantProps<typeof InputTextVariants> {

}

export default function InputText({ children, disabled, variant, size, className, ...props }: InputTextProps) {
    return (
        <div className={InputTextWrapperVariants({ variant, size, className })}>
            <Icon svg={iconsLib.userSquare}></Icon>
            < input className={
                cx(InputTextVariants({ variant, size, className, disabled }),
                    TextVariants({ variant: "text-md-regular" })
                )
            }
                {...props} placeholder="Nome do cliente" />
        </div >

    )
}
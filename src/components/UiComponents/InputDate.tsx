import type React from "react"
import Icon from "./Icon"
import { iconsLib } from "./Icon"
import { cva, type VariantProps, cx } from "class-variance-authority"
import TextVariants from "./Text"

const InputDateWrapperVariants = cva(`
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


const InputDateVariants = cva(`
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


interface InputDateProps extends Omit<React.ComponentProps<"input">, "size" | "disabled">, VariantProps<typeof InputDateVariants> {

}

export default function InputDate({ children, disabled, variant, size, className, ...props }: InputDateProps) {
    return (
        <div className={InputDateWrapperVariants({ variant, size, className })}>
            <Icon svg={iconsLib.userSquare}></Icon>
            < input className={
                cx(InputDateVariants({ variant, size, className, disabled }),
                    TextVariants({ variant: "text-md-regular" })
                )
            }
                {...props} placeholder="Nome do cliente" />
        </div >

    )
}
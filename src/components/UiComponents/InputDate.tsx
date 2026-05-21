import type React from "react"
import { useRef } from "react"
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
    transition duration-150
    flex-1 outline-none text-left
    focus-within:placeholder:opacity-0
    [&::-webkit-calendar-picker-indicator]:hidden
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

const todayIso = new Date().toLocaleDateString("en-CA");
export default function InputDate({ children, disabled, variant, size, className, ...props }: InputDateProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className={InputDateWrapperVariants({ variant, size, className })}
            onClick={() => inputRef.current?.showPicker()}>
            <Icon svg={iconsLib.calendar}></Icon>
            <input className={
                cx(InputDateVariants({ variant, size, className, disabled }),
                    TextVariants({ variant: "text-md-regular" })
                )
            }
                ref={inputRef} defaultValue={todayIso}{...props} placeholder="Data de hoje" type="date" />
            <Icon svg={iconsLib.caretDown} ></Icon>
        </div>
    )
}